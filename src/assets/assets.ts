// import cate1 from "./cate1.jpeg";
// import cate2 from "./cate2.jpeg";
// import cate3 from "./cate3.jpeg";
// import cate4 from "./cate4.jpeg";
import p_img1 from "./p_img1.jpg";
import p_img1_2 from "./p_img1_2.jpg";
import p_img1_3 from "./p_img1_3.jpg";
import p_img1_4 from "./p_img1_4.jpg";
import p_img2 from "./p_img2.jpeg";
import p_img3 from "./p_img3.jpeg";
import p_img4 from "./p_img4.jpeg";
import p_img5 from "./p_img5.jpeg";
import p_img6 from "./p_img6.jpeg";
import p_img7 from "./p_img7.jpeg";
import p_img8 from "./p_img8.jpeg";
import hero_img from "./p_img1_5.jpg";
import search_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png";
import menu_icon from "./menu_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import quality_icon from "./quality_icon.png";
import support_img from "./support_img.png";
import cross_icon from "./cross_icon.png";
import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import bin_icon from "./bin_icon.png";
import logo from "./logo.png";

export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img,
  exchange_icon,
  quality_icon,
  support_img,
  cross_icon,
  star_icon,
  star_dull_icon,
  bin_icon,
};
// export const products = [
//   {
//     _id: "aaaaa",
//     name: "Faible Collection",
//     description: "Faible 100 White Performance Fabric Sofa",
//     price: 5000000,
//     image: [p_img1],
//     category: "Sofa",
//     subcategory: "Sofa & sectional collections",
//     sizes: ["CM", "NC", "C&M"],
//     date: 1716634345448,
//     bestseller: true,
//   },
//   {
//     _id: "bbbbb",
//     name: "Faible Collection",
//     description: "Faible 100 White Performance Fabric Sofa",
//     price: 5000000,
//     image: [p_img1, p_img1_2, p_img1_3, p_img1_4],
//     category: "Bed",
//     subcategory: "Sofa & sectional collections",
//     sizes: ["CM", "NC", "C&M"],
//     date: 1716634345448,
//     bestseller: true,
//   },
// ];
// Định nghĩa kiểu dữ liệu cho sản phẩm
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[]; // Mảng chứa đường dẫn ảnh
  category: string;
  subcategory: string;
  sizes: string[];
  date: number;
  bestSeller: boolean;
}

// Xuất mảng sản phẩm
export const products: Product[] = [
  {
    _id: "MS01",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img1],
    category: "Sofa",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "MS02",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img1, p_img1_2, p_img1_3, p_img1_4],
    category: "Bed",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "MS03",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img2],
    category: "Bed",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "MS04",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 500000,
    image: [p_img3],
    category: "Rugs",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "MS05",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000,
    image: [p_img4],
    category: "Bed",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "MS06",
    name: "Lighting",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img5],
    category: "Lighting",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "MS07",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img6],
    category: "Bed",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: false,
  },
  {
    _id: "MS08",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img7],
    category: "Bed",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "MS08",
    name: "Faible Collection",
    description: "Faible 100 White Performance Fabric Sofa",
    price: 5000000,
    image: [p_img8],
    category: "Bed",
    subcategory: "Sofa & sectional collections",
    sizes: ["CM", "NC", "C&M"],
    date: 1716634345448,
    bestSeller: false,
  },
];
