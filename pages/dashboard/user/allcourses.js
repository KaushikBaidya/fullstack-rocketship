import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Loader } from "../../../components/common/Loader";
import AllCourses from "../../../components/common/AllCourses";

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.BASE_URL}/api/getPublishedBlogs`);
//   const data = await res.json();
//   return { props: { data } };
// }

const AllCourse = () => {
  // if (!data) return <Loader />;
  const tmp = [
    {
      course_id: "01",
      course_name: "PROFESSIONAL GRAPHIC DESIGN",
      picture: "https://i.ibb.co/Zzt5KG8/graphic.png",
      authou: "authou1",
    },
    {
      course_id: "02",
      course_name: "WEB DEVELOPMENT",
      picture: "https://i.ibb.co/CJZxYTJ/webdevelopment.jpg",
      authou: "authou2",
    },
    {
      course_id: "03",
      picture: "https://i.ibb.co/Q98jT3p/graphic.jpg",
      authou: "authou3",
      course_name: "ADVANCED GRAPHIC DESIGN",
    },
    {
      course_id: "04",
      course_name: "DIGITAL MARKETING",
      picture: "https://i.ibb.co/Cn0tw7X/digital.jpg",
      authou: "authou4",
    },
    {
      course_id: "05",
      course_name: "UI/UX DESIGN",
      picture: "https://i.ibb.co/2Wbj9pP/ui.jpg",
      authou: "authou5",
    },
    {
      course_id: "06",
      course_name: "FULL STACK WEB DEVELOPMENT",
      picture: "https://i.ibb.co/S0JKJKC/full.jpg",
      authou: "authou6",
    },
    {
      course_id: "07",
      course_name: "WORDPRESS THEMES CUSTOMIZATION",
      picture: "https://i.ibb.co/WnN6psQ/worp.jpg",
      authou: "authou7",
    },
  ];

  return (
    <div className="card w-full max-w-screen-xl">
      <AllCourses />
    </div>
  );
};

export default AllCourse;
