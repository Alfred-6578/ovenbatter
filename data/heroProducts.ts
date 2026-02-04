export const heroProducts = [
  {
    id: 1,
    name: "Classic Burger",
    description:
      "Our signature crispy classic layered with fresh lettuce, ripe tomatoes, and melted cheese. Handcrafted daily and served hot",
    price: 1850,
    currency: "NGN",
    category: "Small Chops",
    image: "/images/burger-1.jpg",
    color: "brand-coral",
    colorCode:"#E8453C",
    removableIngredients: [
      { id: "lettuce", label: "Lettuce" },
      { id: "tomato", label: "Tomato" },
      { id: "cheese", label: "Cheese" },
      { id: "onion", label: "Onion" },
    ],
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description:
      "Buttery, flaky layers wrapped around rich Belgian chocolate. Baked fresh every morning until golden and crispy",
    price: 1200,
    currency: "NGN",
    category: "Pastries",
    image: "/images/donut.png",
    colorCode: "#F08C00",
    color:"brand-orange",
    removableIngredients: [
      { id: "chocolate", label: "Chocolate Filling" },
      { id: "butter", label: "Butter Glaze" },
    ],
  },
  {
    id: 3,
    name: "Iced Caramel Latte",
    description:
      "Smooth espresso over velvety steamed milk, drizzled with homemade caramel and served over ice.",
    price: 950,
    currency: "NGN",
    category: "Drinks",
    image: "/images/latt.png",
    color: "brand-yellow",
    colorCode: "#F5C542",
    removableIngredients: [
      { id: "caramel", label: "Caramel Drizzle" },
      { id: "milk", label: "Extra Milk" },
      { id: "ice", label: "Ice" },
    ],
  },
];