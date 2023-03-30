import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Loader } from "../components/common/Loader";
export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPublishedBlogs`);
  const data = await res.json();
  return { props: { data } };
}
const Courses = ({ data }) => {
  if (!data) return <Loader />;
  const tmp = data;
  return (
    <div className="xl:max-w-screen-lg mx-auto grid grid-cols-1 justify-items-center content-center mb-20 py-28">
      <div className="flex flex-col items-center mx-auto mb-5">
        <h2 className="text-xl text-[#211A56] font-semibold lg:text-4xl text-center px-5 uppercase tracking-wider">
          Our Courses
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-5 p-5">
        {tmp.map((item) => (
          <div key={item.blogId} className="grid rounded-lg shadow-lg">
            <Image
              src={item.img}
              alt="Blog title"
              width={381}
              height={200}
              className="w-full rounded-t-lg object-cover object-center h-[200px]"
            />
            <div className="px-6 py-4 bg-white grid gap-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>

              <Link href={`/blog/${item.permalink}`}>
                <button className="px-4 py-2 text-sm text-white bg-[#211A56] rounded-lg hover:bg-indigo-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
