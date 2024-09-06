import React from 'react';
import Studfooter from "../components/Studfooter";
import Studnav from '../components/Studnav';

function Services() {
  return (
    <div>
      <Studnav />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto max-w-2xl py-10">
            <h1 className="text-4xl font-bold tracking-tight text-[#88343B] sm:text-5xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-black">
            We're dedicated to providing CIT-University with convenient medical and dental consultations, ensuring your health needs are met safely.
            Your well-being matters to us.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-[#88343B] p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="/path-to-your-image-1.jpg" alt="General Dentistry" className="h-48 w-48 rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">General Dentistry</h3>
              <p className="mt-4 text-white">
                Comprehensive exams, cleanings, and preventive care to keep your smile healthy and beautiful.
              </p>
            </div>

            <div className="text-center bg-[#88343B] p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="/path-to-your-image-2.jpg" alt="Cosmetic Dentistry" className="h-48 w-48 rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Cosmetic Dentistry</h3>
              <p className="mt-4 text-white">
                Enhance your smile with our cosmetic services including teeth whitening, veneers, and more.
              </p>
            </div>

            <div className="text-center bg-[#88343B] p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="/path-to-your-image-3.jpg" alt="Orthodontics" className="h-48 w-48 rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Orthodontics</h3>
              <p className="mt-4 text-white">
                Straighten your teeth with our range of orthodontic treatments including braces and clear aligners.
              </p>
            </div>

            <div className="text-center bg-[#88343B] p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="/path-to-your-image-4.jpg" alt="Pediatric Dentistry" className="h-48 w-48 rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Pediatric Dentistry</h3>
              <p className="mt-4 text-white">
                Gentle and friendly dental care for children, ensuring a positive experience for our youngest patients.
              </p>
            </div>

            <div className="text-center bg-[#88343B] p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="/path-to-your-image-5.jpg" alt="Dental Implants" className="h-48 w-48 rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Dental Implants</h3>
              <p className="mt-4 text-white">
                Replace missing teeth with durable and natural-looking dental implants.
              </p>
            </div>

            <div className="text-center bg-[#88343B] p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <img src="/path-to-your-image-6.jpg" alt="Emergency Care" className="h-48 w-48 rounded-full object-cover" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Emergency Care</h3>
              <p className="mt-4 text-white">
                Prompt and efficient care for dental emergencies to alleviate pain and address urgent issues.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#88343B]">Schedule an Appointment</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Ready to experience top-notch dental care? Contact us today to schedule your appointment.
          </p>
          <div className="mt-10">
            <button className="px-6 py-3 bg-[#F7C301] text-white font-bold rounded-lg hover:bg-[#F7C301]">Book Now</button>
          </div>
        </div>
      </div><Studfooter />
    </div>
  );
}

export default Services;
