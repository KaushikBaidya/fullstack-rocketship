import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";
import { Loader } from "../../common/Loader";
import Image from "next/image";
SwiperCore.use([Pagination, Autoplay]);

const StudentTestimonial = ({ data }) => {
  if (!data) return <Loader />;

  const tmp = data;

  return (
    <section className="bg-white antialiased ">
      <div className="bg-sbanner bg-fixed">
        <div className="bg-[#221a55dc] text-white backdrop-blur-none  gap-y-3 px-10 py-20 justify-items-center content-center mx-auto">
          <div className="xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-2">
              <p className="text-left text-base font-thin px-3">Reviews</p>
              <p className="text-xl md:text-3xl px-3">
                Happy students say about us
              </p>
            </div>

            <div className="w-full md:mt-0 sm:mt-14 mt-10 col-span-3">
              <div className="w-full">
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    540: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                  }}
                >
                  {tmp.length > 0 ? (
                    tmp.map((item) => {
                      return (
                        <SwiperSlide key={item.testimonialId}>
                          <div className="w-full flex flex-col mx-auto my-2 bg-white rounded-tl-3xl rounded-br-3xl p-5 justify-evenly h-full">
                            <div className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] ml-5 mt-2 rounded-full overflow-hidden">
                              <Image
                                src={item.img}
                                alt={item.title}
                                width={200}
                                height={200}
                              />
                            </div>
                            <p className="text-sm lg:text-base text-justify text-gray-700 m-5">
                              {item.description}
                            </p>

                            <h3 className="text-lg lg:text-xl text-[#221a55] font-semibold mx-5">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-700 mx-5 my-2">
                              {item.designation}
                            </p>
                          </div>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <h1 className="text-center text-red-700">Not Available</h1>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;
