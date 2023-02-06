import React from "react";
import Image from "next/image";
import contact from "../public/gallery/Consultative sales-amico.png";
import { usePostData } from "../hooks/DataApi";
import ConsultForm from "../components/admin/forms/ConsultForm";

const Consult = () => {
  const defaultValues = {
    consultId: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    consultdate: new Date(),
    consulttime: "",
    details: "",
  };
  const { mutateAsync } = usePostData();
  return (
    <main className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-aboutBg py-20">
      <div className="hidden md:flex flex-col pl-8 ">
        <div className="space-y-2 pl-10 pt-10 ">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#251B37]">
            Lets talk!
          </h2>
          <div className="text-[#251B37]">Book your consult date</div>
        </div>
        <div className="pb-40">
          <Image src={contact} width={400} height={500} alt="" />
        </div>
      </div>
      <div className="max-w-lg mx-auto py-10">
        <ConsultForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="Apply"
          path="/consult/createConsult"
          returnPath="/"
          mutateAsync={mutateAsync}
        />
      </div>
    </main>
  );
};
export default Consult;
