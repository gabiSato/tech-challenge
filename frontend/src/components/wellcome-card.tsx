"use client";
import Image from "next/image";

import pixels1Image from "../../public/images/pixels-1.png";
import pixels2Image from "../../public/images/pixels-2.png";
import manWithSafeImage from "../../public/images/man-with-safe.png";

interface WellcomeCardProps {
  children: React.ReactNode;
}

export default function WellcomeCard({ children }: WellcomeCardProps) {
  return (
    <div className="bg-cyan-300 p-32 rounded relative h-[655] sm:h-[402px] flex flex-col justify-between">
      <Image
        className="absolute top-0 left-0 sm:right-0 sm:left-auto lg:hidden sm:w-[177px]"
        src={pixels1Image}
        alt="pixels"
        width={144}
        height={141.96}
      />

      <Image
        className="absolute bottom-0 right-0 sm:right-auto sm:left-0 lg:hidden sm:w-[177px]"
        src={pixels2Image}
        alt="pixels"
        width={143.56}
        height={141.54}
      />

      <div className="relative w-full z-1">{children}</div>

      <Image
        className="relative z-1 lg:hidden"
        src={manWithSafeImage}
        alt="Homem sentando em cima de um cofre"
        width={283}
        height={228.17}
      />
    </div>
  );
}
