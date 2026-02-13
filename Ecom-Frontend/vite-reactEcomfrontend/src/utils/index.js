import { FaBoxOpen, FaHome, FaShoppingCart, FaStore, FaThList } from "react-icons/fa";
import {
  bannerImageOne,
  bannerImageTwo,
  bannerImageThree,
  aboutUsImage
} from "./constant";

export const bannerLists = [
  {
    id: 1,
    image: bannerImageOne,
    title: "Built to Last",
    subtitle: "Heavy-Duty Parts",
    description: "Premium engine components for construction and mining equipment",
  },
  {
    id: 2,
    image: bannerImageTwo,
    title: "Industrial Grade",
    subtitle: "Precision Engineering",
    description: "High-performance machinery parts for maximum uptime",
  },
  {
    id: 3,
    image: bannerImageThree,
    title: "Reliable Supply",
    subtitle: "Equipment Components",
    description: "OEM-quality parts for excavators, loaders, and heavy machinery",
  },
];

// KEEP aboutUsImage AVAILABLE — just NOT in bannerLists
export { aboutUsImage };

export const adminNavigation = [
  { 
    name: "Dashboard", 
    href: "/admin",
    icon: FaHome, 
    current:true
  },
  { 
    name: "Orders", 
    href: "/admin/orders",
    icon: FaShoppingCart, 
  },
  { 
    name: "Products", 
    href: "/admin/products",
    icon: FaBoxOpen
    
  },
  { 
    name: "Categories", 
    href: "/admin/categories",
    icon: FaThList
  },
  { 
    name: "Seller", 
    href: "/admin/sellers",
    icon: FaStore 
    
  }
];

export const sellerNavigation = [
  
  { 
    name: "Orders", 
    href: "/admin/orders",
    icon: FaShoppingCart, 
  },
  { 
    name: "Products", 
    href: "/admin/products",
    icon: FaBoxOpen
    
  }
  
];

