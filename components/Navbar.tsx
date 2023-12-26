import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between items-center mx-40 mt-5'>
          <h1 className='text-2xl font-mono bg-gradient-to-r from-[rgb(48,223,72)] via-[#b609a7] to-[#077e64] text-transparent bg-clip-text animate-text font-bold'>
            Ideation
          </h1>
          <Button
            variant='outline'
            className='bg-white text-black font-bold'
          >
            New Idea
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
