import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Phantom GX 2 Elite SE",
    price: "₹23,795.00",
  },
  {
    imgURL: shoe5,
    name: " Adidas PREDATOR 94 FG",
    price: "₹29,999.00",
  },
  {
    imgURL: shoe6,
    name: "Adidas COPA PURE 2 ELITE KT FG",
    price: "₹29,999.00",
  },
  {
    imgURL: shoe7,
    name: "Puma FUTURE 7 ULTIMATE FG/AG",
    price: "₹19,999",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Aiden Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Cahill",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Nike Phantom GX 2 Elite SE", href: "#products" },
      { name: "Adidas PREDATOR 94", href: "#products" },
      { name: "Adidas COPA PURE 2 ELITE KT", href: "#products" },
      { name: "Puma FUTURE 7 ULTIMATE", href: "#products" },
      { name: "Nike Air 1", href: "#products" },
      // { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", href: "#about-us" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@ghostgoal.com", link: "mailto:customer@ghostgoal.com" },
      { name: "+91 98765 43210", link: "tel:+919876543210" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    href: "https://www.facebook.com/ParthRana102303",
  },
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://twitter.com/Rana10Parth",
  },
  {
    src: instagram,
    alt: "instagram logo",
    href: "https://www.instagram.com/_parthrana_/",
  },
];
