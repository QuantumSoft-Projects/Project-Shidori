const cuisines = [
    { 
        id: 1, 
        name: "Biryani", 
        image: require("../assets/biriyani.png"), 
        description: "Aromatic rice dish with spices and tender meat or vegetables.", 
        price: 250,
        rating: 4.8,
        calories: "500 kcal",
        type: "Non-Veg" // ✅ Added type
    },
    { 
        id: 2, 
        name: "Pav Bhaji", 
        image: require("../assets/pavbhaji.png"), 
        description: "Spicy mashed vegetable dish served with buttered bread.", 
        price: 150,
        rating: 4.5,
        calories: "350 kcal",
        type: "Veg" // ✅ Added type
    },
    { 
        id: 3, 
        name: "Dosa", 
        image: require("../assets/dosa.png"), 
        description: "Crispy, savory pancake made from fermented rice batter.", 
        price: 120,
        rating: 4.6,
        calories: "250 kcal",
        type: "Veg" // ✅ Added type
    }
];

export default cuisines;
