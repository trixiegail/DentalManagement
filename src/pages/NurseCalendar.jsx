import React from 'react';
import Nav from '../components/Nav';

function NurseCalendar() {
  
  return (
    <div>
      <Nav />

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <p className="py-5">Articles</p>
            <h2 className=" py-5text-3xl font-bold tracking-tight text-black sm:text-4xl">Choose an Appointment</h2>
            <p className="py-5">Read our latest blog posts for valuable insights</p>
        </div>
      </div>

        <div className="isolate bg-[#88343B] px-6 py-24 sm:py-32 lg:px-8">
            <div class="relative my-6">
                <input id="id-date01" type="date" name="id-date01" class="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border-b outline-none peer border-slate-200 text-white bg-[#88343B] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-[#88343B] disabled:text-white" />
                <label for="id-date01" class="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-white transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#88343B] before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-white peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-white peer-disabled:before:bg-[#88343B]"> Date </label>
            </div>

        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-xs font-semibold leading-6 text-white">9 AM</p>
              <p className="mt-1 font-semibold text-lg leading-5 text-white">5 slots</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">asdas</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
          </div>
        </li>
        
        </div>
    </div>
  );
}

export default NurseCalendar;
