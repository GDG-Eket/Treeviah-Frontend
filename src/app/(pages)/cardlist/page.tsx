"use client";
import { CardGrid } from "@/components/atoms";
import Card from "@/components/organisms/cardComponent";
import { items } from "@/components/organisms/data";
import { StaticImageData } from "next/image";

type UserData = {
  userurl1: StaticImageData; // Assuming userurl is a URL or string
  userurl2: StaticImageData; // Assuming userurl is a URL or string
  userurl3: StaticImageData; // Assuming userurl is a URL or string
  text: number;
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  questionNumber: number;
  userData: UserData;
}

const CardHome: React.FC<CardProps> = () => {
  return (
    <>
      <h1>Items</h1>
      <CardGrid>
          <div>
            {items.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
      </CardGrid>
    </>
  );
};

export default CardHome;
