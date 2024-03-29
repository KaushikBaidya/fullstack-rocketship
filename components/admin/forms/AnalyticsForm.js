import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";

const schema = yup.object({
  analyticsId: yup.string().max(50),
  code: yup.string().required("Required."),
});

const AnalyticsForm = ({
  defaultValues,
  path,
  mutateAsync,
  action,
  btnText,
  returnPath,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

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
  const { code } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    const data = {
      analyticsId: formData.analyticsId,
      code: formData.code,
    };
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        toast.success("Saved successfully!");
        reset();
      }
      if (status === 204) {
        toast.success("Update successful!");
        router.push(returnPath);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
      action();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("analyticsId")} />

      <div className="form-col">
        <Input
          name="code"
          label="Insert your google analytics code"
          type="text"
          register={register}
          errorMessage={code?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default AnalyticsForm;
