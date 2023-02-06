import React from "react";
import Image from "next/image";
import { Loader } from "../../common/Loader";

const HeroAbout = ({ data }) => {
  if (!data) return <Loader />;
  const tmp = data;
  return (
    <section className="w-full overflow-hidden bg-aboutBg ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 pb-16 pt-24 ">
        <div className="flex justify-center items-center col-span-3">
          <div className="mx-5 lg:ml-20 text-center lg:text-left z-30 ">
            <h1 className="text-2xl lg:text-5xl text-[#211A53] py-5 font-semibold">
              {tmp.title}
            </h1>
            <p className="text-sm text-left lg:text-base">{tmp.subtitle}</p>
          </div>
        </div>

        <div className="w-3/4 z-30 mx-auto overflow-hidden col-span-2">
          <Image
            className="object-cover"
            src={tmp.image}
            width={500}
            height={500}
            alt={tmp.title}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
