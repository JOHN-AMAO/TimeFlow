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

const Navbar = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between items-center mx-40 mt-5'>
          <h1 className='text-2xl font-mono bg-gradient-to-r from-[rgb(48,223,72)] via-[#b609a7] to-[#077e64] text-transparent bg-clip-text animate-text font-bold'>
            Ideation
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant='outline'
                className='bg-white text-black'
              >
                Create Idea
              </Button>
            </DialogTrigger>
            <DialogContent className=' bg-black'>
              <DialogHeader>
                <DialogTitle>Save Idea</DialogTitle>
                <DialogDescription>
                  Create your ideas here. Click save when youre done.
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
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
