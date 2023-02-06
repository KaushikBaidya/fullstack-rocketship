import React from "react";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../hooks/DataApi";
import { Loader } from "../../../components/common/Loader";
import { Error } from "../../../components/common/Error";
import AnalyticsForm from "../../../components/admin/forms/AnalyticsForm";

function Details() {
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("analytics", `/analytics`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit Hero Section" btn="Return" path="/dashboard" />

      {tmp && (
        <AnalyticsForm
          defaultValues={{
            analyticsId: tmp.analyticsId,
            code: tmp.code,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/analytics`}
          returnPath="/dashboard"
        />
      )}
    </div>
  );
}

export default Details;
