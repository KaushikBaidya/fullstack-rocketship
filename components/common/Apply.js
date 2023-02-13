import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Graduate from "../../public/icons/violet.png";
import toast from "react-hot-toast";

// import SaveButton from "../../common/button/SaveButton";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectFromOptions } from "./SelectList";
import Input from "../admin/Input";
import TextArea from "../admin/TextArea";
import SaveButton from "./button/SaveButton";

const schema = yup.object({
  first_name: yup.string().required("Required.").max(50),
  last_name: yup.string().required("Required.").max(50),
  user_email: yup.string().required("Required.").max(50),
  phone_number: yup.string().required("Required.").max(50),
  user_identity: yup.string().required("Required"),
  user_year: yup.string().required("Required"),
  social_media: yup.string().required("Required."),
  description: yup.string().required("Required."),
});

const Contact = ({ defaultValues, path, mutateAsync }) => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const {
    first_name,
    last_name,
    user_email,
    phone_number,
    user_identity,
    user_year,
    social_media,
    description,
  } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    const data = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      user_email: formData.user_email,
      phone_number: formData.phone_number,
      user_identity: formData.user_identity,
      user_year: formData.user_year,
      social_media: formData.social_media,
      description: formData.description,
    };

    try {
      emailjs
        .send(
          `${process.env.EMAILJS_SERVICE}`,
          `${process.env.EMAILJS_TEMPLATE_CONTACT}`,
          data,
          `${process.env.EMAILJS_PUBLIC}`
        )
        .then(
          () => {
            toast.success("Message sent successfully");
          },
          (error) => {
            toast.error("Response : " + error);
          }
        );
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error : ", error.message);
      }
    } finally {
      reset();
      setSubmitting(false);
    }
  };

  return (
    <section>
      <div className="xl:max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div className="flex justify-center items-center">
            <div>
              <div className="w-24 h-24 mx-auto">
                <Image src={Graduate} alt="graduate" />
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-relaxed text-black">
                Contact a Rocketship Consultant and start your journey for
                United States.
              </h3>
              <p className="mt-6 text-base text-black">
                We help Bangladeshi students go through the college admissions
                process by offering them a personalized and detailed admissions
                guidance program that empowers students to achieve success.
              </p>
              <p className="mt-6 text-base font-medium text-black my-4">
                During our initial consultation, we will:
              </p>
              <ul className="list-disc px-5">
                <li>
                  Assess your student’s applicant profile and higher education
                  goals
                </li>
                <li>
                  Provide detailed information about our services and
                  programming
                </li>
                <li>
                  Share tips on how to navigate the U.S. college admissions
                  process
                </li>
              </ul>
              <p className="text-2xl text-[#4e2ddf] mt-4">Lets Get Started !</p>
            </div>
          </div>

          <div>
            <div className="w-full p-10 bg-white drop-shadow-2xl rounded-tl-3xl rounded-br-3xl">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-col">
                  <Input
                    name="first_name"
                    label="First Name"
                    type="text"
                    register={register}
                    errorMessage={first_name?.message}
                  />
                  <Input
                    name="last_name"
                    label="Last Name"
                    type="text"
                    register={register}
                    errorMessage={last_name?.message}
                  />
                  <Input
                    name="user_email"
                    label="Email"
                    type="text"
                    register={register}
                    errorMessage={user_email?.message}
                  />
                  <Input
                    name="phone_number"
                    label="Phone"
                    type="text"
                    register={register}
                    errorMessage={phone_number?.message}
                  />
                  <SelectFromOptions
                    register={register}
                    options={[
                      "Student",
                      "Parent",
                      "Guardian",
                      "School Administrator/Counselor",
                      "Employer",
                      "Other",
                    ]}
                    label="I am a..."
                    name="user_identity"
                    errorMessage={user_identity?.message}
                  />
                  <SelectFromOptions
                    register={register}
                    options={[
                      "2023",
                      "2024",
                      "2025",
                      "2026",
                      "Gap Year",
                      "Transfer",
                    ]}
                    label="Expected Graduation Year"
                    name="user_year"
                    errorMessage={user_year?.message}
                  />
                  <SelectFromOptions
                    register={register}
                    options={[
                      "Instagram",
                      "Twitter",
                      "Reddit",
                      "Facebook",
                      "LinkedIn",
                      "Other",
                    ]}
                    label="How did you hear about us?"
                    name="social_media"
                    errorMessage={social_media?.message}
                  />
                  <TextArea
                    control={control}
                    name="description"
                    label="If you have anything to say..."
                    errorMessage={description?.message}
                  />
                  <SaveButton btnText="Submit" disabled={submitting} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
