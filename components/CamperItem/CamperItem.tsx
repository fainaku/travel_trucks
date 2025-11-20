"use client";
import { Camper } from "@/lib/api/api";
import Image from "next/image";

type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  return (
    <li>
      <div>
        <Image
          src={item.gallery[0].thumb}
          alt={item.name}
          width={300}
          height={200}
        />
        <span>{item.name}</span>
        <span>{item.price}</span>
        <span>{item.rating}</span>
        <span>{item.location}</span>
        <span>{item.description}</span>
        <span>{item.transmission}</span>
        <span>{item.engine}</span>
        <span>{item.kitchen}</span>
        <span>{item.AC}</span>
        <button>Show more</button>
      </div>
    </li>
  );
};

export default CamperItem;
