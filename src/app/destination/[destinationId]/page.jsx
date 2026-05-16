import React from 'react'
import { getIdData } from '@/lib/Data';
import { FaCheck, FaMapMarkerAlt, FaRegClock, FaStar } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { Input } from '@heroui/react';
import Image from 'next/image';
import EditModal from '@/components/ui/EditModal';

const DestinationDetails = async ({ params }) => {

    const { destinationId } = await params;
    const destinationData = await getIdData(destinationId);

    const {
        imageUrl,
        country,
        destinationName,
        price,
        duration,
        description,
    } = destinationData;

     const highlights = [
    "Luxury beachfront accommodation",
    "Traditional Balinese spa treatment",
    "Sunrise trek to Mount Batur",
    "Visit Uluwatu Temple at sunset",
    "Private beach dinner experience",
  ];

    return (
         <div className="max-w-7xl rounded-none mx-auto overflow-hidden ">
          <div className='text-right my-5'>
            <EditModal destination = {destinationData} />
          </div>
      {/* Banner Section */}
      <div className="w-full h-[260px] md:h-[350px] overflow-hidden">
        <Image
          alt={destinationName}
          className="w-full h-full object-cover"
          src={imageUrl}
          radius="none"
          height={300}
          width={1200}
        />
      </div>

      <div className="py-5 px-5 md:px-10 border-t border-t-gray-300 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info (Left) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <FaMapMarkerAlt size={12} />
                <span className="ml-1">{country} </span>
              </div>
              <h1 className="text-4xl font-semibold text-slate-800">{destinationName} </h1>
              
              <div className="flex items-center gap-6 pt-1">
                <div className="flex items-center gap-1 text-green-600 font-bold">
                  <FaStar size={14} className="mb-0.5" />
                  <span>4.9</span>
                  <span className="text-gray-400 font-normal ml-1">(234 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-medium">
                  <FaRegClock size={16} />
                  <span>{duration}</span>
                </div>
              </div>

              <div className='text-sm text-gray-500'>
                    {description}
                </div>
            </div>

            <section className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-800">Overview</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. 
                Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-500 text-sm">
                    <FaCheck className="text-green-500 shrink-0" size={14} />
                    <span className="text-md">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Pricing & Booking (Right) */}
          <div className="lg:col-span-4 h-fit border border-gray-100 rounded-2xl p-5 bg-white shadow-xl shadow-gray-100/50 space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Starting from</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-cyan-600">{price} </span>
                <span className="text-sm text-gray-400">/ person</span>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Date 05/15/2026"
                variant="bordered"
                className="font-medium w-full"
              />
              <button className='group flex justify-center items-center gap-1 h uppercase text-sm w-full bg-sky-400 py-1.5 mt-2 cursor-pointer hover:bg-sky-500 duration-300 rounded-lg text-white transition-all'>
                Book Now
                  <HiArrowRight className='group-hover:translate-x-1 duration-300 transition-all' size={15} />
              </button>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-50">
              {[
                "Free cancellation up to 7 days",
                "Travel insurance included",
                "24/7 customer support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-[13px] text-gray-500">
                  <FaCheck className="text-green-500" size={12} />
                  {text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>

    
    )
}

export default DestinationDetails;


// import { Card,  Button, Input } from "@heroui/react";
// import { FaStar, FaMapMarkerAlt, FaRegClock, FaCheck } from "react-icons/fa";
// import { HiArrowRight } from "react-icons/hi";
// import Image from 'next/image';

// export default async function BaliParadiseCard() {

//      const { destinationId } = await params;
//     const destinationData = await getIdData(destinationId);

//     const {
//         imageUrl,
//         country,
//         destinationName,
//         price,
//         duration,
//         description,
//     } = destinationData;

//   const highlights = [
//     "Luxury beachfront accommodation",
//     "Traditional Balinese spa treatment",
//     "Sunrise trek to Mount Batur",
//     "Visit Uluwatu Temple at sunset",
//     "Private beach dinner experience",
//   ];
//     // imageUrl,
//     //     country,
//     //     destinationName,
//     //     price,
//     //     duration,
//     //     description,
//   return (
//     <div className="max-w-[950px] rounded-none mx-auto overflow-hidden border  shadow-sm bg-white">
//       {/* Banner Section */}
//       <div className="w-full h-[300px] overflow-hidden">
//         <Image
//           alt={destinationName}
//           className="w-full h-full object-cover"
//           src={imageUrl}
//           radius="none"
//         />
//       </div>

//       <div className="p-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* Main Info (Left) */}
//           <div className="lg:col-span-8 space-y-8">
//             <div className="space-y-3">
//               <div className="flex items-center gap-1 text-gray-400 text-sm">
//                 <FaMapMarkerAlt size={12} />
//                 <span className="ml-1">{country} </span>
//               </div>
//               <h1 className="text-5xl font-semibold text-slate-800">{destinationName} </h1>
              
//               <div className="flex items-center gap-6 pt-1">
//                 <div className="flex items-center gap-1 text-green-600 font-bold">
//                   <FaStar size={14} className="mb-0.5" />
//                   <span>4.9</span>
//                   <span className="text-gray-400 font-normal ml-1">(234 reviews)</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-500 font-medium">
//                   <FaRegClock size={16} />
//                   <span>{duration}</span>
//                 </div>
//               </div>
//             </div>

//             <section className="space-y-3">
//               <h3 className="text-2xl font-bold text-slate-800">Overview</h3>
//               <p className="text-gray-500 text-lg leading-relaxed">
//                 Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. 
//                 Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
//               </p>
//             </section>

//             <section className="space-y-4">
//               <h3 className="text-2xl font-bold text-slate-800">Highlights</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
//                 {highlights.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3 text-gray-600">
//                     <FaCheck className="text-green-500 shrink-0" size={14} />
//                     <span className="text-md">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>

//           {/* Pricing & Booking (Right) */}
//           <div className="lg:col-span-4 h-fit border border-gray-100 rounded-2xl p-8 bg-white shadow-xl shadow-gray-100/50 space-y-6">
//             <div>
//               <p className="text-sm text-gray-400 mb-1">Starting from</p>
//               <div className="flex items-baseline gap-1">
//                 <span className="text-4xl font-bold text-cyan-600">{price} </span>
//                 <span className="text-sm text-gray-400">/ person</span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <Input
//                 type="text"
//                 placeholder="05/15/2026"
//                 variant="bordered"
//                 radius="sm"
//                 className="font-medium"
//               />
//               <button 
//                 className="w-full bg-cyan-500 text-white font-bold h-14 rounded-lg text-lg hover:bg-cyan-600 transition-colors"
//                 endContent={<HiArrowRight size={20} />}
//               >
//                 Book Now
//               </button>
//             </div>

//             <div className="space-y-3 pt-4 border-t border-gray-50">
//               {[
//                 "Free cancellation up to 7 days",
//                 "Travel insurance included",
//                 "24/7 customer support"
//               ].map((text, i) => (
//                 <div key={i} className="flex items-center gap-3 text-[13px] text-gray-500">
//                   <FaCheck className="text-green-500" size={12} />
//                   {text}
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

