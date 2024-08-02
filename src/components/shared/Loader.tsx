import React from "react";
import Image from "next/image";

const Loader = () => {
   return (
      <div className="loader">
         <Image
            src="/assets/icons/loader.svg"
            width={30}
            height={30}
            alt="Loader"
            className="animate-spin"
         />
         Loading...
      </div>
   );
};

export default Loader;
