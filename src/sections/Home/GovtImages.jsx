import React from "react";

const GovtImgtImages = () => {
  const GovtImgs = [
    "https://i.ibb.co/tPs1LkhV/image-search-1768287156578.png",
    "https://i.ibb.co/hJYfhQY5/image-search-1768287401455.png",
    "https://i.ibb.co/W4WhK0sx/image-search-1768287480864.png",
    "https://i.ibb.co/Py4gRs0/image-search-1768287677773.png",

  ];

  return (
    <section
      id="GovtImgs"
      className="p-8 text-center items-center my-25 justify-center"
    >
      <div className="flex w-full gap-52 justify-center items-center flex-wrap">
        {GovtImgs.map((img, index) => (
          <img
            key={`first-${index}`}
            src={img}
            alt="GovtImg"
            className="w-32 object-contain rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default GovtImgtImages;