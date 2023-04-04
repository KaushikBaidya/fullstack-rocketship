import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import BlogsForm from "../../../components/admin/forms/BlogsForm";

const Add = () => {
  const defaultValues = {
    blogId: "",
    title: "",
    description: "",
    permalink: "",
    keywords: "",
    seoDescription: "",
    filepath: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Add New Course" btn="Return" path="/dashboard/course" />
      <BlogsForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save as Draft"
        path="/course/createCourse"
        returnPath="/dashboard/course"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
