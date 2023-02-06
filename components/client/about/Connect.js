import Link from "next/link";
import React from "react";

const Connect = () => {
  return (
    <section className="bg-white my-10">
      <div className="bg-sbanner">
        <div className="bg-[#221a55dc] text-white  items-center backdrop-blur-none  gap-y-3 px-10 py-20  mx-auto">
          <div className="xl:max-w-4xl mx-auto flex flex-col md:flex-row justify-around gap-5">
            <h1 className="text-white lg:w-3/4 text-center md:text-left">
              On the search for a new career or building a college list?
            </h1>
            <div className="flex items-center justify-center">
              <Link href="/contactus">
                <button className="px-10 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
