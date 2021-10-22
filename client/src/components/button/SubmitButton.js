// Built with TailwindCSS
import React from "react";

const SubmitButton = () => {
  // Calls UsePostPhoto
  const onSubmit = () => {};

  return (
    <>
      <button
        onClick={onSubmit()}
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit Photograph
      </button>
    </>
  );
};

export default SubmitButton;
