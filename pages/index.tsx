import Image from "next/image";
import React from "react";

const HomePage: React.FC = () => {
  return (
    // HomePage Structure
    <div>
      {/* Header */}
      <div className="mx-auto ">
        <Image
          src={"https://i.imgur.com/vur9S3p.png"}
          width={150}
          height={150}
          alt={""}
        />
      </div>
      {/* Main */}
      <div className="bg-yellow-200/20 p-24">hi</div>
      {/* Footer */}
    </div>
  );
};

export default HomePage;
