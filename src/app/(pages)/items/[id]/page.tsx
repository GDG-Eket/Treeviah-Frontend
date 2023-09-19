"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { items } from "@/components/organisms/data";
import Image from "next/image";
import Link from "next/link";

const ItemDetail: React.FC = () => {
  const router = usePathname();
  const id = router?.split("/")[2];
  const [item, setItem] = useState<any>();

  const fetchProduct = async (id: any) => {
    const selectedItem = items.find(
      (item) => item.id === parseInt(id as string)
    );
    setItem(selectedItem);
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  if (!item) {
    return <div>item not found</div>;
  }

  return (
    <div>
      <Link href="/items">Go back</Link>
      <h1>{item.title}</h1>
      <Image src={item.image} alt={item.title} width={700} height={300} />
      <p>{item.description}</p>
      <p>{item.questionNumber}</p>
      <div className="flex">
        <h4>{item.text}</h4>
        <Image
          src={item?.userurl1}
          alt="user.png"
          width={50}
          height={50}
          className="w-10 h-10"
        />
        <Image
          src={item?.userurl2}
          alt="user.png"
          width={50}
          height={50}
          className="w-10 h-10"
        />
        <Image
          src={item?.userurl3}
          alt="user.png"
          width={50}
          height={50}
          className="w-10 h-10"
        />
      </div>
    </div>
  );
};

export default ItemDetail;
