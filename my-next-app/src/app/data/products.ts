export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gaming Headset Pro",
    description: "Professional gaming headset with 7.1 surround sound, noise-canceling microphone and comfortable padding for long gaming sessions.",
    price: "$299.90",
    category: "Audio"
  },
  {
    id: 2,
    name: "RGB Gaming Mouse",
    description: "High-precision gaming mouse with 16,000 DPI optical sensor, 7 programmable buttons and customizable RGB lighting.",
    price: "$189.90",
    category: "Peripherals"
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with Cherry MX Blue switches, per-key RGB backlighting and premium aluminum construction.",
    price: "$449.90",
    category: "Peripherals"
  },
  {
    id: 4,
    name: "4K Gaming Monitor",
    description: "27-inch 4K gaming monitor with 144Hz refresh rate, HDR10 and 1ms response time for the ultimate visual experience.",
    price: "$1,299.90",
    category: "Monitors"
  },
  {
    id: 5,
    name: "Wireless Gaming Controller",
    description: "Professional wireless controller with haptic feedback, adaptive triggers and up to 40-hour battery life.",
    price: "$79.90",
    category: "Peripherals"
  },
  {
    id: 6,
    name: "Gaming Chair Elite",
    description: "Ergonomic gaming chair with lumbar support, adjustable armrests and premium PU leather upholstery.",
    price: "$349.90",
    category: "Furniture"
  },
  {
    id: 7,
    name: "Curved Ultrawide Monitor",
    description: "34-inch curved ultrawide monitor with 3440x1440 resolution, 120Hz refresh rate and HDR support.",
    price: "$899.90",
    category: "Monitors"
  },
  {
    id: 8,
    name: "Studio Microphone",
    description: "Professional USB condenser microphone with cardioid pickup pattern and real-time monitoring.",
    price: "$159.90",
    category: "Audio"
  }
];