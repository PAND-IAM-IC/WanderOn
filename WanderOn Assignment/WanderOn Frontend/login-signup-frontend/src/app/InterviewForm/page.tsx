import React from "react";
import Form from "./Form";
import Image from "./Image";

const InterviewPage = () => {
  const interviewName = "Dynamic Interview Name";

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <Form interviewName={interviewName} />
      <Image />
    </div>
  );
};

export default InterviewPage;
