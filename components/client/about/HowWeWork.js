import React from "react";
import Image from "next/image";
import Picture from "../../../public/gallery/x.png";

const HowWeWork = () => {
  return (
    <main>
      <section className="w-full">
        <div className="max-w-2xl mx-auto pb-5">
          <h1 className="text-[#221a55] text-4xl font-bold text-center">
            How it works
          </h1>
        </div>
        <div className="xl:max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 h-full pb-5 mx-auto">
          <div className="flex justify-center items-center ">
            <div className="py-5">
              <div className="w-3/4 mx-auto ">
                <Image src={Picture} alt="" />
              </div>
              <p className="mt-4 text-2xl text-center font-medium">
                2.5x likely to get an admission.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mx-5">
            <div className="md:pr-2 md:py-6">
              <div className="flex relative pb-5">
                <div className="h-full w-10 absolute inset-3 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">1</h1>
                </div>
                <div className="flex-grow pl-4">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    First, a Rocketship consultant will provide you free
                    consultation to see if you are eligible to apply to an
                    University in United States
                  </p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="h-full w-10 absolute inset-3 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">2</h1>
                </div>
                <div className="flex-grow pl-4">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    After you determined you want to work with us , you will
                    fill out your profile. Then, based on your profile, the
                    major you want study, and eligibility, Rocketship consultant
                    will help come up with an university list. If you have you
                    own list, we will give you a clear picture of your chances
                    of getting an admitted to those colleges.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="h-full w-10 absolute inset-3 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">3</h1>
                </div>
                <div className="flex-grow pl-4">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    Your test scores in IELTS, TOFL, or SAT qualify you to
                    pursue a degree from top university in the United States. If
                    you need help on these prep, we will match you with Test
                    Preparation consultant
                  </p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="h-full w-10 absolute inset-3 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">4</h1>
                </div>
                <div className="flex-grow pl-4">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    When the application opens for your university, we will get
                    you documents ready: transcripts, resume, extracurricular
                    activities, and letters of recommendations.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="h-full w-10 absolute inset-3 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">5</h1>
                </div>
                <div className="flex-grow pl-4 pb-5">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    A key part of the application is your Essays (Personal
                    Statement) and often a supplemental essay. We will help you
                    craft your essay and ensure your profile stands out to the
                    admissions committee
                  </p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="h-full w-10 absolute inset-3 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">6</h1>
                </div>
                <div className="flex-grow pl-4">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    Rocketship Consultant will start by listing down all the
                    possible scholarships a student can get based on his
                    background and scores. Once the scholarships are identified,
                    mentors at we will help the students with the application
                    process, like documentation, essays, etc.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <h1 className="text-white font-bold">7</h1>
                </div>
                <div className="flex-grow pl-4 pb-5">
                  <p className="font-normal text-base text-gray-900 mb-5">
                    Finally, after accepting the offer from the university of
                    your choice, the next step is applying for the visa. We will
                    help you with your visa document and conduct several mock
                    interviews as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;
