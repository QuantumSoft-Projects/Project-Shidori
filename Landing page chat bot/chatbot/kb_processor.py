import os
import csv
import json
import logging
import glob
import unicodedata
import re

# Set up logging
logging.basicConfig(level=logging.INFO, 
                   format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class KnowledgeBaseProcessor:
    def __init__(self, kb_directory='Knowledgebase'):
        self.kb_directory = kb_directory
        self.knowledge_base = {}
        self.category_map = {}
        self.processed_count = 0
        
        # Map folder names to nice category names
        self.folder_to_category = {
            'Allergen Info Fodd Recommendation': 'Allergen Information',
            'Cancellation Policy Order History': 'Orders & Cancellations',
            'Contact Support terms and condition': 'Customer Support',
            'Offer and Discount Subscription plan': 'Offers & Subscriptions',
            'Operating hours loyalty Program': 'Hours & Loyalty',
            'Payment methods': 'Payment Options',
            'Track Order fodd quality and Hygin': 'Food Quality & Tracking'
        }
        
        # Special manual entries for important queries that need exact matches
        self.special_entries = [
            {
                "question": "View Cuisines",
                "answer": "Here are our available cuisines: North Indian, South Indian, Chinese, Continental, and Street Food. Each cuisine offers a variety of vegetarian and non-vegetarian options. Would you like to explore a specific cuisine?",
                "category": "Menu Information",
                "source_file": "manual_entry"
            },
            {
                "question": "What is Taste of India",
                "answer": "Taste of India is a premium Indian restaurant offering authentic dishes from across India. We specialize in traditional recipes prepared with fresh ingredients and serve both vegetarian and non-vegetarian options. Our menu includes tandoori specialties, curries, biryanis, and more.",
                "category": "Restaurant Information",
                "source_file": "manual_entry"
            },
            {
                "question": "Tell me about Taste of India",
                "answer": "Taste of India is a premium Indian restaurant offering authentic dishes from across India. We specialize in traditional recipes prepared with fresh ingredients and serve both vegetarian and non-vegetarian options. Our menu includes tandoori specialties, curries, biryanis, and more.",
                "category": "Restaurant Information",
                "source_file": "manual_entry"
            }
        ]

    def normalize_text(self, text):
        """Normalize text by removing accents, converting to lowercase, and removing special characters"""
        if not text:
            return ""
        # Normalize unicode characters
        text = unicodedata.normalize('NFKD', text)
        # Remove non-alphanumeric characters (except spaces)
        text = re.sub(r'[^\w\s]', ' ', text.lower())
        # Replace multiple spaces with a single space
        text = re.sub(r'\s+', ' ', text).strip()
        return text

    def extract_keywords(self, text, min_length=3):
        """Extract potential keywords from text"""
        if not text:
            return []
        
        # Normalize the text
        normalized = self.normalize_text(text)
        
        # Split into words and filter out short ones
        words = [word for word in normalized.split() if len(word) >= min_length]
        
        # Generate n-grams (1, 2, and 3 words)
        keywords = set(words)  # Unigrams
        
        # Add bigrams
        for i in range(len(words) - 1):
            keywords.add(f"{words[i]} {words[i+1]}")
            
        # Add trigrams
        for i in range(len(words) - 2):
            keywords.add(f"{words[i]} {words[i+1]} {words[i+2]}")
        
        # Add the original phrase as a whole if it's not too long
        if len(normalized.split()) <= 6:
            keywords.add(normalized)
            
        return list(keywords)

    def process_kb_file(self, filepath):
        """Process a single knowledge base CSV file"""
        category = "General"
        
        # Determine category from the folder path
        for folder, cat_name in self.folder_to_category.items():
            if folder in filepath:
                category = cat_name
                break
        
        filename = os.path.basename(filepath)
        logger.info(f"Processing file: {filename} (Category: {category})")
        
        try:
            with open(filepath, 'r', encoding='utf-8') as file:
                reader = csv.reader(file)
                headers = next(reader)  # Get header row
                
                # Determine the structure type based on headers
                if 'Question' in headers and 'Answer' in headers:
                    q_index = headers.index('Question')
                    a_index = headers.index('Answer')
                elif 'Questions Asked by User' in headers and 'Response Given to User' in headers:
                    q_index = headers.index('Questions Asked by User')
                    a_index = headers.index('Response Given to User')
                else:
                    # Try to guess - first column is usually question, second is answer
                    q_index = 0
                    a_index = 1
                
                # Process each row
                for row in reader:
                    if len(row) <= max(q_index, a_index):
                        continue  # Skip incomplete rows
                    
                    question = row[q_index].strip()
                    answer = row[a_index].strip()
                    
                    if not question or not answer:
                        continue  # Skip empty entries
                    
                    # Generate unique ID for this QA pair
                    entry_id = f"{category}_{self.processed_count}"
                    self.processed_count += 1
                    
                    # Extract keywords
                    keywords = self.extract_keywords(question)
                    
                    # Add specific category terms for better matching
                    if category == "Allergen Information":
                        keywords.extend(["allergen", "allergy", "food allergy"])
                    elif "food" in filename.lower() or "menu" in filename.lower():
                        keywords.extend(["menu", "food", "dish", "cuisine"])
                    
                    # Add the entry to our knowledge base
                    self.knowledge_base[entry_id] = {
                        "question": question,
                        "answer": answer,
                        "category": category,
                        "keywords": keywords,
                        "source_file": filename
                    }
                    
                    # Map category to entry IDs
                    if category not in self.category_map:
                        self.category_map[category] = []
                    
                    self.category_map[category].append(entry_id)
                    
                logger.info(f"Processed {self.processed_count} entries from {filename}")
                
        except Exception as e:
            logger.error(f"Error processing file {filepath}: {str(e)}")
    
    def process_all_kb_files(self):
        """Process all CSV files in the knowledge base directory and its subdirectories"""
        csv_files = []
        
        # Find all CSV files in the knowledge base directory and subdirectories
        for folder, _, _ in os.walk(self.kb_directory):
            csv_files.extend(glob.glob(os.path.join(folder, "*.csv")))
        
        logger.info(f"Found {len(csv_files)} CSV files to process")
        
        # Process each file
        for file_path in csv_files:
            self.process_kb_file(file_path)
        
        # Add special manual entries
        for entry in self.special_entries:
            entry_id = f"{entry['category']}_{self.processed_count}"
            self.processed_count += 1
            
            # Extract keywords with extra importance
            keywords = self.extract_keywords(entry['question'])
            
            # For special entries, include the exact phrase as a keyword
            keywords.append(entry['question'].lower())
            
            # Add the entry to our knowledge base
            self.knowledge_base[entry_id] = {
                "question": entry['question'],
                "answer": entry['answer'],
                "category": entry['category'],
                "keywords": keywords,
                "source_file": entry['source_file'],
                "priority": 100  # Give high priority to manual entries
            }
            
            # Map category to entry IDs
            if entry['category'] not in self.category_map:
                self.category_map[entry['category']] = []
            
            self.category_map[entry['category']].append(entry_id)
        
        logger.info(f"Total entries in knowledge base: {len(self.knowledge_base)}")
        logger.info(f"Categories: {list(self.category_map.keys())}")
    
    def save_to_json(self, output_file="kb_processed.json"):
        """Save the processed knowledge base to a JSON file"""
        output = {
            "knowledge_base": self.knowledge_base,
            "categories": self.category_map,
            "stats": {
                "total_entries": len(self.knowledge_base),
                "category_counts": {cat: len(entries) for cat, entries in self.category_map.items()}
            }
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Knowledge base saved to {output_file}")
        
        # Also create compatible format for web app
        web_compatible = {"knowledge_base": []}
        
        for entry_id, entry in self.knowledge_base.items():
            # Create a primary keyword from the entry ID
            keyword = entry_id.lower().replace(" ", "_")
            
            web_compatible["knowledge_base"].append({
                "keyword": keyword,
                "answer": entry["answer"]
            })
        
        with open("knowledge_base.json", 'w', encoding='utf-8') as f:
            json.dump(web_compatible, f, indent=2, ensure_ascii=False)
        
        logger.info(f"Web-compatible knowledge base saved to knowledge_base.json")
        
        return output

if __name__ == "__main__":
    processor = KnowledgeBaseProcessor()
    processor.process_all_kb_files()
    processor.save_to_json() 