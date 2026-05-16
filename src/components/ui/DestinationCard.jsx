

import { Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import {
    FiArrowRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

function DestinationCard({ destinationData }) {
  const {
    imageUrl,
    country,
    destinationName,
    price,
    duration,
    description,
    _id
  } = destinationData;

  return (
    <Card
      shadow="none"
      className="border border-gray-200 rounded-none overflow-hidden group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={600}
          height={400}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 flex items-center gap-1 text-sm font-medium">
          4.5 <FaStar className="text-black text-xs" />
        </div>
      </div>

      <div className="pt-4 pb-2">
        {/* Country */}
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
          <FiMapPin className="text-sm" />
          <span>{country}</span>
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-medium text-black">
            {destinationName}
          </h3>

          <div className="text-right whitespace-nowrap">
            <span className="text-2xl font-semibold text-black">
              ${price}
            </span>

            <span className="text-gray-400 text-sm">
              {" "}
              /Person
            </span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
          <FiCalendar className="text-sm" />
          <span>{duration} Days</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-4 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

     <Link href= {`/destination/${_id}`}>
     
      <CardFooter className="pt-2">
        <button className="cursor-pointer flex items-center gap-2 text-sky-500 text-sm font-medium hover:gap-3 hover:text-blue-900 transition-all">
          BOOK NOW
          <FiArrowRight className="text-base" />
        </button>
      </CardFooter>
     </Link>
    </Card>
  );
}

export default DestinationCard;