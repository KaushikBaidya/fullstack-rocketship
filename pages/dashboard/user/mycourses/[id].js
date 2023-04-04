import { useRouter } from "next/router";
import React, { useState } from "react";

const ContinueCourse = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/J6uam9jEmDU");
  console.log(link);
  const router = useRouter();
  // console.log(router);
  const { id } = router.query;
  const datas = [
    {
      _id: "0282e0e58a5c404fbd15261f11c2ab6a",
      course_id: "01",
      course_name: "PROFESSIONAL GRAPHIC DESIGN",
      content_title:
        "Graphicriver and freelancing marketplace base graphic design & design concept development based curriculum.",
      image_url: "https://i.ibb.co/Zzt5KG8/graphic.png",
      details:
        "Graphic designing is a combination of symbols, images, and text to form visual representations of messages and ideas. The graphic designing field is considered as an extended field of visual communication and communication design. Graphic designers create and combine symbols, images, and text to represent an idea or message. Graphic design course allows creating a logo, flyer, brochure, catalog, business card, posters, branding of a product or business, corporate graphic, website, UI, UX, web banner, digital marketing campaign related ad, Photoshop, vector and vector illustration, infographic, technical illustration, and visualization.",
      course_fee: "30,000.00",
      total_class: "40 classes",
      duration: "5 month",
      content_links: [
        {
          video_title: "Javascript",
          video_link: "https://www.youtube.com/embed/J6uam9jEmDU",
        },
        {
          video_title: "React",
          video_link: "https://www.youtube.com/embed/O0rvesNrzP0",
        },
        {
          video_title: "Next",
          video_link: "https://www.youtube.com/embed/ko5lL2MQKCU",
        },
      ],
    },
  ];
  // console.log(datas[0].content_links);
  return (
    <div className="card w-full max-w-screen-xl">
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div>
          <h1>Course video</h1>

          <iframe
            width="560"
            height="315"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center gap-5 flex-col cursor-pointer">
          {datas[0]?.content_links?.map((data) => (
            <>
              <div onClick={() => setLink(data.video_link)}>
                {data.video_title}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinueCourse;
