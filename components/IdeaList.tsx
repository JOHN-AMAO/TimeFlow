import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant='outline'>Edit Idea</Button>
                  </DialogTrigger>
                  <DialogContent className=' bg-black'>
                    <DialogHeader>
                      <DialogTitle>Edit Idea</DialogTitle>
                      <DialogDescription>
                        Make changes to your ideas here. Click save when youre
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                      <div className='grid grid-cols-4 items-center gap-4'>
                        <Label
                          htmlFor='name'
                          className='text-right'
                        >
                          Title
                        </Label>
                        <Input
                          id='name'
                          className='col-span-3 text-black'
                        />
                      </div>
                      <div className='grid grid-cols-4 items-center gap-4'>
                        <Label
                          htmlFor='username'
                          className='text-right'
                        >
                          Idea
                        </Label>
                        <Textarea className='text-black px-40' />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        className='border rounded'
                        type='submit'
                      >
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
