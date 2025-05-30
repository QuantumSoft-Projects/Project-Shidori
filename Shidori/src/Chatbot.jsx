import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const QuickActionButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-gradient-to-r from-red-50 to-orange-50 text-red-600 px-4 py-2 rounded-lg hover:from-red-100 hover:to-orange-100 transition-all text-sm font-medium border border-red-100 shadow-sm hover:shadow-md active:scale-95"
  >
    {text}
  </button>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Namaste! I'm your virtual assistant from Taste of India. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action) => {
    const actionMessages = {
      'order': 'Where is my order?',
      'payment': 'I have a payment issue',
      'cuisines': 'What cuisines do you offer?',
      'track': 'How can I track my order?'
    };
    
    setInput(actionMessages[action]);
    handleSendMessage(actionMessages[action]);
  };

  const handleSendMessage = async (messageText = null) => {
    const userMessage = messageText || input.trim();
    if (!userMessage) return;

    setInput('');
    setIsLoading(true);

    // Add user message to chat
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);

    try {
      const response = await fetch('http://localhost:8080/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      // Add bot response to chat
      setMessages(prev => [...prev, { 
        text: data.response || 'Sorry, I encountered an error. Please try again.', 
        sender: 'bot' 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, I encountered an error. Please try again.', 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:from-red-600 hover:to-orange-600 animate-bounce"
        >
          <FontAwesomeIcon icon={faRobot} className="text-2xl" />
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden border border-gray-100">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <FontAwesomeIcon icon={faRobot} className="text-red-500 text-lg" />
              </div>
              <div>
                <span className="font-bold">SwadSeva Bot</span>
                <div className="text-xs text-red-100">We're here to help</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-white hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-red-50 to-orange-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl p-3 shadow-sm rounded-bl-none border border-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="text-xs text-gray-500 mb-2 font-medium">QUICK ACTIONS</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <QuickActionButton text="Where is my order?" onClick={() => handleQuickAction('order')} />
              <QuickActionButton text="Payment issues" onClick={() => handleQuickAction('payment')} />
              <QuickActionButton text="View Cuisines" onClick={() => handleQuickAction('cuisines')} />
              <QuickActionButton text="Track Order" onClick={() => handleQuickAction('track')} />
            </div>

            {/* Chat Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-xl hover:from-red-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;