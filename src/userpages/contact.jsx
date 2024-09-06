import React from 'react';
import Studfooter from "../components/Studfooter";
import Studnav from '../components/Studnav';
 
function Contact() {
  return (
    <div>
      <Studnav />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl py-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Contact Us</h1>
            <p className="py-5 text-black">
              We would love to hear from you! Whether you have a question about our services, need assistance, or want to schedule an appointment, please feel free to reach out to us.
            </p>
          </div>
 
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#88343B] p-6 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-bold">Clinic Address</h3>
              <p className="mt-4">
                123 Dental St.<br />
                Smile City, SC 12345
              </p>
              <h3 className="text-2xl font-bold mt-6">Phone</h3>
              <p className="mt-4">
                (123) 456-7890
              </p>
              <h3 className="text-2xl font-bold mt-6">Email</h3>
              <p className="mt-4">
                contact@dentalclinic.com
              </p>
            </div>
 
            <div className="bg-[#88343B] p-6 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-bold">Office Hours</h3>
              <p className="mt-4">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
 
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-[#88343B]">Send Us a Message</h2>
            <form className="mt-8 space-y-6 mx-auto max-w-lg">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#F7C301] text-black font-bold rounded-lg hover:bg-yellow-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div><Studfooter />
    </div>
  );
}
 
export default Contact;