import React from "react";
import { Button } from "./ui/button";

export const IdeaList = () => {
  return (
    <>
      <div>
        <div className='flex justify-center items-center mt-10'>
          <div className='flex rounded-xl border w-2/3 h-auto'>
            <div className='flex flex-col gap-2 p-4'>
              <h1>Topic Title</h1>
              <div>
                Topic desciption: The size-auto utility can be useful if you
                need to remove an element assigned width and height under a
                specific condition, like at a particular breakpoint: Topic
                desciption: The size-auto utility can be useful if you need to
                remove an element assigned width and height under a specific
                condition, like at a particular breakpoint:
              </div>
              <div className='flex  gap-2 justify-end'>
                <Button
                  variant='outline'
                  className='text-black bg-white hover:bg-slate-900'
                >
                  Edit
                </Button>
                <Button
                  variant='outline'
                  className='text-black bg-white hover:bg-red-500'
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
