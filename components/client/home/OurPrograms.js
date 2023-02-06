import Image from "next/image";
import flag from "../../../public/icons/flag.png";
import counseling from "../../../public/icons/counselling.png";
import university from "../../../public/icons/university.png";

const OurPrograms = () => {
  return (
    <section className="min-h-full pb-14 px-10">
      <div className="h-full grid grid-cols-1 content-center">
        <div className="max-w-5xl mx-auto pb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold text-[#221a55] px-2 py-2 text-center">
            Achieve your dreams of studying in America with Rocketship. We will
            take you there
          </h1>
        </div>
        <div className="py-2">
          <div className="xl:max-w-screen-xl grid grid-cols-1 md:grid-cols-3 mx-auto gap-10">
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl justify-evenly">
              <div className="py-2 w-14">
                <Image src={flag} alt="US flag" />
              </div>
              <h2 className="text-[#211A56] font-semibold text-xl ">
                50 States
              </h2>
              <p className="">
                Get exposure to college of your choice in any of the states
              </p>
            </div>
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl justify-evenly">
              <div className="py-2 w-14">
                <Image src={counseling} alt="counseling" />
              </div>
              <h2 className="text-[#211A56] font-semibold text-xl ">
                Dedicated Consultants
              </h2>
              <p className="">
                We will have a dedicated consultant for you. From start to
                finish, our consultants will guide you step by step.
              </p>
            </div>
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl justify-evenly">
              <div className="py-2 w-14">
                <Image src={university} alt="US university" />
              </div>
              <h2 className="text-[#211A56] font-semibold text-xl ">
                90% Acceptance Rate
              </h2>
              <p className="">
                Over 90% of the students we work with get into at least 1 of
                their top 7 school choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;