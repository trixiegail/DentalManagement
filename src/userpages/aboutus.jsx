import React from 'react';
import Studfooter from "../components/Studfooter";
import Studnav from '../components/Studnav';
 
function AboutUs() {
  return (
    <div>
      <Studnav />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl py-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">About Us</h1>
            <p className="py-5 text-black">
              Welcome to our Dental Clinic, where your smile is our top priority. Our team is dedicated to providing you with personalized, gentle care that you deserve.
            </p>
          </div>
 
          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-your-image-1.jpg" alt="Our Mission" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#88343B]">Our Mission</h3>
                <p className="mt-4 text-black">
                  To deliver the highest quality of dental care in a comfortable and welcoming environment.
                </p>
              </div>
 
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-your-image-2.jpg" alt="Our Vision" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#88343B]">Our Vision</h3>
                <p className="mt-4 text-black">
                  To be the leading dental care provider, known for our commitment to excellence and patient satisfaction.
                </p>
              </div>
 
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-your-image-3.jpg" alt="Our Values" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#88343B]">Our Values</h3>
                <p className="mt-4 text-black">
                  Compassion, integrity, and innovation are at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
 
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-[#88343B]">Meet Our Team</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-team-member-image-1.jpg" alt="Team Member" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#88343B]">Dr. John Doe</h4>
                <p className="mt-2 text-black">Chief Dentist</p>
              </div>
             
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-team-member-image-2.jpg" alt="Team Member" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#88343B]">Dr. Jane Smith</h4>
                <p className="mt-2 text-black">Orthodontist</p>
              </div>
             
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-team-member-image-3.jpg" alt="Team Member" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#88343B]">Dr. Emily Johnson</h4>
                <p className="mt-2 text-black">Pediatric Dentist</p>
              </div>
             
              <div className="text-center">
                <div className="flex justify-center">
                  <img src="/path-to-team-member-image-4.jpg" alt="Team Member" className="h-48 w-48 rounded-full object-cover" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-[#88343B]">Dr. Michael Lee</h4>
                <p className="mt-2 text-black">Periodontist</p>
              </div>
            </div>
          </div>
 
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-[#88343B]">Contact Us</h2>
            <p className="py-5 text-black">
              We would love to hear from you! Whether you have a question, want to book an appointment, or simply want to share your feedback, feel free to reach out.
            </p>
            <div className="mt-10">
 
              <a className="px-6 py-3 bg-[#F7C301] text-white font-bold rounded-lg hover:bg-yellow-600 "
              href="/contact">Get in Touch</a>
            </div>
          </div>
        </div>
      </div><Studfooter />
    </div>
  );
}
 
export default AboutUs;