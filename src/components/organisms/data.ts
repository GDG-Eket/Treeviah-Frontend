"use client";
import { StaticImageData } from "next/image";
import Image1 from "../../../public/Images/card1.png";
import Image2 from "../../../public/Images/card2.png";
import Image3 from "../../../public/Images/card3.png";
import Image4 from "../../../public/Images/card4.png";
import Image5 from "../../../public/Images/card5.png";
import Image6 from "../../../public/Images/eight.jpg";

export type UserData = {
  userurl1: StaticImageData; // Assuming userurl is a URL or string
  userurl2: StaticImageData; // Assuming userurl is a URL or string
  userurl3: StaticImageData; // Assuming userurl is a URL or string
  text: number;
};

export interface Card {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  questionNumber: number;
  userData: UserData;
}


// data.ts
export const items: Card[] = [
  {
    id: 1,
    title: "Item 1",
    image: Image1,
    description: "Description for Item 1",
    questionNumber: 2,
    userData: {
      userurl1: Image1,
      userurl2: Image2,
      userurl3: Image3,
      text: 14,
    },
  },
  {
    id: 2,
    title: "Item 2",
    image: Image2,
    description: "Description for Item 2",
    questionNumber: 2,
     userData: {
      userurl1: Image1,
      userurl2: Image2,
      userurl3: Image3,
      text: 12,
    },
  },
  {
    id: 3,
    title: "Item 1",
    image: Image3,
    description: "Description for Item 1",
    questionNumber: 2,
     userData: {
      userurl1: Image1,
      userurl2: Image2,
      userurl3: Image3,
      text: 12,
    },
  },
  {
    id: 4,
    title: "Item 2",
    image: Image4,
    description: "Description for Item 2",
    questionNumber: 2,
     userData: {
      userurl1: Image1,
      userurl2: Image2,
      userurl3: Image3,
      text: 12,
    },
  },
  {
    id: 5,
    title: "Item 1",
    image: Image5,
    description: "Description for Item 1",
    questionNumber: 2,
     userData: {
      userurl1: Image1,
      userurl2: Image2,
      userurl3: Image3,
      text: 12,
    },
  },
  {
    id: 6,
    title: "Item 2",
    image: Image6,
    description: "Description for Item 2",
    questionNumber: 2,
     userData: {
      userurl1: Image1,
      userurl2: Image2,
      userurl3: Image3,
      text: 12,
    },
  },
  // Add more items as needed
];
