import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function signup() {
  return (
    <div>
      <Header />
      <main className="bg-[#E6CCE6] w-full h-full pt-8 sm:pt-16 pb-28 flex justify-center items-center">
        <div className="h-full px-5 sm:px-32 lg:px-12 xl:px-32 flex justify-center w-full">
          <div className="min-h-fit  bg-white rounded-3xl lg:rounded-r-none w-full sm:w-[664px] lg:w-[664px] flex flex-col md:py-16 p-8 lg:pl-14 justify-start items-start">
            <div className="w-full h-full first-letter:lg:w-11/12">
              <h1 className="text-primary w-full text-center text-[32px] leading-normal md:text-[40px] md:leading-[48px] font-medium font-dmSans">
                Sign Up
              </h1>
              <div className="w-full space-y-8">
                <form
                  className="w-full mt-7 sm:mt-14 space-y-8"
                  action="/accountType"
                  method="post"
                >
                  <div className="relative font-poppins">
                    <label
                      className="absolute top-[-8px] px-1 w-fit ms-3 bg-white text-[#6E6E6E] text-xs font-normal leading-[18px]-"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Placeholder"
                      className="w-full px-4 py-2 block items-center h-14 text-[#60656F] rounded shadow-sm border-[#888B93]- border-[#929292] border-[1.5px] placeholder-[#60656F]- focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-[#C21010] -invalid:border-[#C21010]  focus:invalid:border-[#C21010] focus:invalid:ring-[#C21010] valid:border-primary"
                      required
                    />
                  </div>
                  <div className=" w-full relative font-poppins">
                    <div className="inline-flex w-[100%] items-center rounded shadow-sm  border-[#888B93]- border-[#929292] border-2 focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-[#C21010] -invalid:border-[#C21010]  focus:invalid:border-[#C21010] focus:invalid:ring-[#C21010] valid:border-primary">
                      <label
                        className="absolute top-[-8px] px-1 w-fit ms-3 bg-white text-[#6E6E6E] text-xs font-normal"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 flex items-center h-14 text-[#60656F]  focus:outline-none focus:border-0"
                        required
                      />
                      <button type="button" className="p-2 flex w-fit">
                        <Image
                          src={require("@/../public/Images/eye-slash.svg")}
                          alt="password-toggle-icon"
                        ></Image>
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-center w-full text-white px-6 py-2.5 rounded hover:bg-[#952B95] -hover:bg-[#6a0c6a]"
                  >
                    Sign Up
                  </button>
                </form>
                {/* divider */}
                <div className="flex text-[#1D1D1D]  w-full space-x-4 items-center justify-center">
                  <div className="border h-0 w-48- w-4/12"></div>
                  <div className="text-[#1D1D1D]-">Or</div>
                  <div className="border h-0 w-48- w-4/12"></div>
                </div>
                {/* other signin options */}
                <div className="w-full inline-flex justify-center items-center gap-6">
                  <a
                    href="#"
                    className="bg-white hover:scale-110 hover:bg-primary-light ease-in-out duration-150 flex justify-center items-center w-10  shadow rounded-full p-2"
                  >
                    <Image
                      className=" hover:bg-primary-light ease-in-out duration-150"
                      src={require("../../public/Images/apple-icon.svg")}
                      alt="apple-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-white hover:scale-110 hover:bg-primary-light ease-in-out duration-150 flex justify-center items-center w-10 shadow rounded-full p-2"
                  >
                    <Image
                      className=" hover:bg-primary-light ease-in-out duration-150"
                      src={require("../../public/Images/google-icon.svg")}
                      alt="google-icon"
                    />
                  </a>
                  <a
                    href="#"
                    className="bg-white hover:scale-110 hover:bg-primary-light ease-in-out duration-150 flex justify-center items-center w-10 shadow rounded-full p-2"
                  >
                    <Image
                      className="hover:bg-primary-light ease-in-out duration-150"
                      src={require("../../public/Images/facebook-icon.svg")}
                      alt="facebook-icon"
                    />
                  </a>
                </div>
                <p className=" w-full justify-center text-center">
                  <span className="text-[#1D1D1D]">
                    Already have an account?{" "}
                  </span>
                  <Link
                    href={"/login"}
                    className="text-primary hover:text-primary-light hover:font-semibold  hover:underline hover:underline-offset-2"
                  >
                    {" "}
                    Sign In{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <Image
            className="hidden h-full lg:flex lg:max-w-[480px] bg-primary rounded-r-3xl"
            src={require("../../public/images/Frame 4.svg")}
            alt="hero-img"
          />
        </div>
      </main>
    </div>
  );
}