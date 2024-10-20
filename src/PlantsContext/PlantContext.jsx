import React, { createContext, useContext, useState } from "react";

// Create a Context for the plant data
const PlantContext = createContext();

// PlantProvider component to provide the plant data
export const PlantProvider = ({ children }) => {
  const [plantDataList] = useState([
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729357970/mp1_k9emvk.jpg",
      plantName: "Monsterra",
      price: {
        oldPrice: "$350",
        newPrice: "$250",
      },
      description: "Indoor Plant, Low maintenance",
      rating: 4.5,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729358050/mp2_engtiv.jpg",
      plantName: "Aloe Vera",
      price: {
        oldPrice: "$300",
        newPrice: "$220",
      },
      description: "Succulent plant, Easy to grow",
      rating: 4.7,
    },
    {
      img: "https://res.cloudinary.com/day1peihn/image/upload/v1729421771/mp3_selkg1.jpg",
      plantName: "Peace Lily",
      price: {
        oldPrice: "$400",
        newPrice: "$310",
      },
      description: "Air purifying plant, Low light tolerant",
      rating: 4.6,
    },
    // Add other plants similarly...
  ]);

  return (
    <PlantContext.Provider value={plantDataList}>
      {children}
    </PlantContext.Provider>
  );
};

// Custom hook to use the PlantContext
export const usePlants = () => useContext(PlantContext);
