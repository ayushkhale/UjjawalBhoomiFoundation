import React from "react";

const GovtImages = () => {
  const GovtImgs = [
    "https://i.ibb.co/tPs1LkhV/image-search-1768287156578.png",
    "https://i.ibb.co/hJYfhQY5/image-search-1768287401455.png",
    "https://i.ibb.co/W4WhK0sx/image-search-1768287480864.png",
    "https://i.ibb.co/Py4gRs0/image-search-1768287677773.png",
  ];

  return (
    <section
      id="GovtImgs"
      className="py-10 sm:py-16 px-4 sm:px-8 text-center"
    >
      <div className="flex w-full gap-8 sm:gap-16 md:gap-24 lg:gap-32 justify-center items-center flex-wrap max-w-5xl mx-auto">
        {GovtImgs.map((img, index) => (
          <img
            key={`first-${index}`}
            src={img}
            alt="GovtImg"
            className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default GovtImages;