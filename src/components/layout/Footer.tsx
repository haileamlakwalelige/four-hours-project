import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mb-4">
      <div className="flex justify-start items-center gap-4">
        <p className="font-bold text-sm">Benefit</p>
        <p className="font-bold text-sm">Specification</p>
        <p className="font-bold text-sm">How-to</p>
      </div>
      <div className="flex justify-between items-end mt-32">
        <div className=" flex items-end gap-4">
          <Image src="/footer_image.svg" alt="footer" width={40} height={70} />
          <p className="text-xs font-light">@Area 2025</p>
        </div>
        <div>
          <p className="text-xs font-light">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
