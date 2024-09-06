import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarBasicPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-[#F7C301] shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img
                className="h-20 w-auto"
                src="src/image/logo1.png"
                alt="Your Company"
              />
              Cebu Institute of Technology - University
            </a>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
      
      {/*<!-- Component: Second Navbar with Tabs --> */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <ul className="flex justify-center space-x-4 p-4 text-slate-700">
            <li>
              <Link
                to="/AfterLogin"
                className={location.pathname === "/AfterLogin" ? "font-bold" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/CalendarSchedule"
                className={location.pathname === "/CalendarSchedule" ? "font-bold" : ""}
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/CheckupApplicantList"
                className={location.pathname === "/CheckupApplicantList" ? "font-bold" : ""}
              >
                Applicant List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/*<!-- End Second Navbar with Tabs --> */}
    </>
  );
}
