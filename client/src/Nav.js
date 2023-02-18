import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [activeStatus, setActiveStatus] = useState(1);
  const [isList, setIsList] = useState(false);
  const [isJobList, setIsJobList] = useState(false);
  const [isVolunteerList, setIsVolunteerList] = useState(false);

//   const [isSubList, setIsSubList] = useState(3);
//   const [isSubJobList, setIsSubJobList] = useState(3);
//   const [isSubList, setIsSubList] = useState(3);

  return (
    <div className="">
      <div className=" sm:hidden relative w-11/12  mx-auto bg-darkblue">
        <select
          aria-label="Selected tab"
          className="form-select block w-full p-3 border border-gray-300 rounded text-white appearance-none bg-transparent relative z-10"
        >
          <Link to="/dashboard">
            <option className="text-sm text-white">Dashboard </option>
          </Link>
          <Link to="donationForm">
            <option className="text-sm text-white">Dontation Form</option>
          </Link>
          <Link to="donateForm">
            <option selected className="text-sm text-white">
              Donate Form
            </option>
          </Link>
          <Link to="volunteerForm">
            <option className="text-sm text-white">Volunteer Form</option>
          </Link>
          <Link to="hiringForm">
            <option className="text-sm text-white">Hiring Form</option>
          </Link>
          <Link to="/jobApply">
            <option className="text-sm text-white">Job Apply</option>
          </Link>

          <Link to="/volunteerApply">
            <option className="text-sm text-white">Volunteer Apply</option>
          </Link>
        </select>
      </div>
      <div className="xl:w-full xl:mx-0 h-auto hidden sm:block bg-darkblue ">
        <ul className="relative flex  px-8 pt-1 mb-8 bg">
          
          <Link to="/dashboard">
            <li
              onClick={() => setActiveStatus(1)}
              className={
                activeStatus === 1
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-white mr-12"
                  : "text-lg text-white py-3 flex items-center mr-12 hover:text-white cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-home"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 1 ? "Dashboard" : "Dashboard"}
                </span>
              </div>
              {activeStatus === 1 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          <li className="w-36">
            <div className="">
              <div
                onClick={() => setIsList(!isList)}
                className="w-64 p-4 shadow rounded text-lg font-medium leading-none text-white flex items-center justify-between cursor-pointer"
              >
                Donations
                <div>
                  {isList ? (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {isList && (
                <div className="w-64 mt-2 p-4 bg-white shadow rounded z-10 absolute">
                  
                  <Link to="donateForm">
                        <li
                          onClick={() => setActiveStatus(4)}
                          className={
                            activeStatus === 4
                              ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                              : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
                          }
                        >
                          <div className="flex items-center mb-3">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-eye"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={2} />
                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                              </svg>
                            </span>
                            <span className="ml-1 font-normal">
                              {activeStatus === 4 ? "Donation" : "Donation"}
                            </span>
                          </div>
                          {activeStatus === 4 && (
                            <div className="w-full h-1 bg-amber-400 rounded-t-md" />
                          )}
                        </li>
                      </Link>
                      <Link to="/donationReport">
            <li
              onClick={() => setActiveStatus(9)}
              className={
                activeStatus === 9
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-blacks cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 9 ? "Donation Report" : "Donation Report"}
                </span>
              </div>
              {activeStatus === 9 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          <Link to="/donationList">
            <li
              onClick={() => setActiveStatus(10)}
              className={
                activeStatus === 10
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 10 ? "Donation List" : "Donation List"}
                </span>
              </div>
              {activeStatus === 10 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
                </div>
              )}
              <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
              </style>
            </div>
          </li>
          <li className="w-36">
            <div>
              <div
                onClick={() => setIsVolunteerList(!isVolunteerList)}
                className="w-64 p-4 shadow rounded text-lg font-medium leading-none text-white flex items-center justify-between cursor-pointer"
              >
                Volunteer
                <div>
                  {isJobList ? (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {isVolunteerList && (
                <div className="w-64 mt-2 p-4 bg-white shadow rounded z-10 absolute">
          <Link to="volunteerForm">
            <li
              onClick={() => setActiveStatus(5)}
              className={
                activeStatus === 5
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 5 ? "Volunteer" : "Volunteer"}
                </span>
              </div>
              {activeStatus === 5 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          <Link to="/volunteerReports">
            <li
              onClick={() => setActiveStatus(14)}
              className={
                activeStatus === 14
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 14 ? "Volunteer Reports" : "Volunteer Reports"}
                </span>
              </div>
              {activeStatus === 14 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          <Link to="/volunteerList">
            <li
              onClick={() => setActiveStatus(12)}
              className={
                activeStatus === 12
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 12 ? "Volunteer List" : "Volunteer List"}
                </span>
              </div>
              {activeStatus === 12 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          
                </div>
              )}
              <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
              </style>
            </div>
          </li>

          <li className="w-36">
            <div>
              <div
                onClick={() => setIsJobList(!isJobList)}
                className="w-64 p-4 shadow rounded text-lg font-medium leading-none text-white flex items-center justify-between cursor-pointer"
              >
                Job
                <div>
                  {isJobList ? (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {isJobList && (
                <div className="w-64 mt-2 p-4 bg-white shadow rounded z-10 absolute">
                  <Link to="hiringForm">
            <li
              onClick={() => setActiveStatus(6)}
              className={
                activeStatus === 6
                  ? "text-lg border-emerald-700 pt-3 rounded-t textblack mr-12"
                  : "text-lg textblack py-3 flex items-center mr-12 hover:textblack cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 6 ? "Hiring" : "Hiring"}
                </span>
              </div>
              {activeStatus === 6 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          <Link to="/jobReports">
            <li
              onClick={() => setActiveStatus(15)}
              className={
                activeStatus === 15
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 15 ? "Job Reports" : "Job Reports"}
                </span>
              </div>
              {activeStatus === 15 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>    
          <Link to="/jobList">
            <li
              onClick={() => setActiveStatus(11)}
              className={
                activeStatus === 11
                  ? "text-lg border-emerald-700 pt-3 rounded-t text-black mr-12"
                  : "text-lg text-black py-3 flex items-center mr-12 hover:text-black cursor-pointer"
              }
            >
              <div className="flex items-center mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-eye"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={2} />
                    <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                    <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                  </svg>
                </span>
                <span className="ml-1 font-normal">
                  {activeStatus === 11 ? "Job List" : "Job List"}
                </span>
              </div>
              {activeStatus === 11 && (
                <div className="w-full h-1 bg-amber-400 rounded-t-md" />
              )}
            </li>
          </Link>
          
                </div>
              )}
              <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
              </style>
            </div>
          </li>

          <li className="mb-2">
            <Link to="/signup">
            <button className="w-32 h-10 bg-yellow border-none rounded-2xl text-white font-semibold pb-1 mb-10 absolute top-0 right-10">
                SignUp
            </button>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Nav;
