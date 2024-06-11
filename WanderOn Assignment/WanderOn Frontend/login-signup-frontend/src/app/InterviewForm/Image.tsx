// components/Image.tsx
import React from "react";

const Image = () => {
  return (
    <div className="flex-1 flex justify-center items-center bg-green-100">
      <img
        src="https://media.istockphoto.com/id/642079398/photo/concept-of-cloud-computing.jpg?s=1024x1024&w=is&k=20&c=uHQkopQhOzEER_wcQDujd0BR6mo55J65mqBzTEmJtHM="
        alt="Descriptive Alt Text"
        className="w-1/2 h-auto rounded"
        style={{ maxWidth: "50%", maxHeight: "50%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Image;
