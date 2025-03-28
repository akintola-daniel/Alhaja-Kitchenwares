import { image1, image2, image3, image4 } from "@/assets/images";
import { FaRegStar } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { FaFacebookSquare} from "react-icons/fa";

export const navLinks = [
  { href: "home", label: "Home", offset:-70 },
  { href: "products", label: "Products", offset:-60 },
  { href: "why-us", label: "Why Us", offset:-60 },
  { href: "reviews", label: "Reviews", offset:-60 },
  { href: "Contact Us", label: "Contact Us", offset:-420 },
];

export const kitchenWares = [
  {
    id: 1,
    name: "Kitchen Ware 1",
    price: "₦5,000.00",
    image: image4,
  },
  {
    id: 2,
    name: "Kitchen Ware 2",
    price: "₦12,000.00",
    image: image4,
  },
  {
    id: 3,
    name: "Kitchen Ware 3",
    price: "₦200,000.00",
    image: image4,
  },
  {
    id: 4,
    name: "Kitchen Ware 4",
    price: "₦25,000.00",
    image: image4,
  },
  {
    id: 5,
    name: "Kitchen Ware 5",
    price: "₦25,000.00",
    image: image4,
  },
  {
    id: 6,
    name: "Kitchen Ware 6",
    price: "₦25,000.00",
    image: image4,
  },
];

export const whyUs =[
 {
  title: "Top Quality",
  text: "We adhere to strict quality standards, ensuring every product meets excellence in durability and performance.",
  icon: FaRegStar,
 },

 {
  title: "Low Cost",
  text: "We offer high-quality products at competitive prices, making them affordable without compromising value.",
  icon: GiReceiveMoney,
 },

 {
  title: "Quick & Reliable Delivery",
  text: "Our streamlined logistics ensure fast, efficient delivery while minimizing environmental impact.",
  icon: CiDeliveryTruck,
 },

 {
  title: "Customer Service",
  text: "Our dedicated team is always here to provide prompt assistance, expert recommendations, and seamless support.",
  icon: BsPersonFill,
 },

];

export const reviews=[
{
 name: "Fatima A",
 rating: 5,
 review: "I recently purchased some kitchenware from Alhaja Kitchen Wares, and I’m beyond impressed!. Will definitely shop again."
},

{
  name: "Daniel A",
  rating: 5,
  review: "Best Store for reasonably priced, durable and high quality kitchenwares. Glad they have a website now."
 },

{
 name: "Michael O.",
 rating: 4,
 review: "I love that their prices are so reasonable even with this quality. Highly recommend."
},

{
 name: "Amina K.",
 rating: 5,
 review: "I was worried about delivery delays because i ordered alot, but my order got to me on time. I was shocked o."
},

{
 name: "Chinedu E.",
 rating: 4,
 review: "Had a change my order after i had already ordered, but the support team responded quickly and resolved it without stress. It’s rare to find such great customer service these days."
},

{
 name: "Zainab M.",
 rating: 4,
 review: "This is my third time shopping here, and they never disappoint. Durable utensils and stylish cookware, they have it all. Shopping here is always a smooth experience."
},
]

export const footerLinks = [

  { label: "Contact Us",
 
      links: [
          { name: "+234 814 584 5032" },
          { name: "No. 25, Olaoluwa St, Agbado Rd, Ogun State, Nigeria."
          },
      ],
  }
]

export const socialMedia = [
  { icon: FaFacebookSquare, alt: "facebook", href:"https://www.instagram.com/the.other.daniel_?igsh=NTc5aG03OXIwdjBj&utm_source=qr" }
];