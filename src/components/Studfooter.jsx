import React from 'react';

const Studfooter = () => {
  return (
    <footer className="bg-[#88343B] text-white py-10">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold">HAPPY <span className="text-[#F7C301]">DENTAL</span></h2>
          <p className="mt-2">
            Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor blandit eget nibh ac lacus vitae purus. Sagittis tortor fermentum.
          </p>
        </div>
        <div className="w-1/3 ml-20">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-[#F7C301]">Home</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">About Us</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Services</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-semibold">Services</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-[#F7C301]">Teeth Whitening</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Dental Filling</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Teeth Checkup</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Teeth Implants</a></li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-[#F7C301]">Customer Stories</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Documentation</a></li>
            <li><a href="#" className="hover:text-[#F7C301]">Blog & Guide</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F7C301] text-black text-center py-4 mt-10">
        <p>Copyright © 2023 Happy Dental | Design by TokoTema</p>
        <p>
          <a href="#" className="hover:text-black">Terms of Use</a> | <a href="#" className="hover:text-black">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Studfooter;
