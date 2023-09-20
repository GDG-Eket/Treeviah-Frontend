"use client";
import React from "react";
import { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import EyeSlash from "@/../public/Images/eye-slash.svg";
import Eye from "@/../public/Images/eye.svg";
import AppleIcon from "@/../public/Images/apple-icon.svg";
import GoogleIcon from "@/../public/Images/google-icon.svg";
import FacebookIcon from "@/../public/Images/facebook-icon.svg";
import Frame4 from "@/../public/Images/Frame 4.svg";
import { useSession, signIn, signOut } from "next-auth/react";

export default function login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  const handleRegister = async () => {
    await signOut({ redirect: false });

    const userData = {
      email: email,
      name: name,
      password: password,
    };

    const registeredUser = await (
      await fetch("api/register", {
        method: "POST",
        body: JSON.stringify({ userData: userData }),
      })
    ).json();

    let signInResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  return (
    <div>
      <Header />
      <button onClick={() => handleLogin()}>Test signup</button>
      <main className="bg-[#E6CCE6] w-full h-full pt-8 sm:pt-16 pb-28 flex justify-center items-center">
        <div className="h-full px-5 sm:px-32 lg:px-12 xl:px-32 flex justify-center w-full">
          <div className="min-h-fit bg-white rounded-3xl lg:rounded-r-none w-full sm:w-[664px] lg:w-[664px] flex flex-col md:py-16 p-8 lg:pl-14 justify-start items-start">
            <div className="w-full h-full first-letter:lg:w-11/12">
              <h1 className="text-primary w-full text-center text-[32px] leading-normal md:text-[40px] md:leading-[48px] font-medium font-dmSans">
                Sign {isRegistered ? "In" : "Up"}
              </h1>
              <div className="w-full space-y-8">
                <div className="w-full mt-7 sm:mt-14 space-y-8">
                  {!isRegistered && (
                    <div className="relative font-poppins">
                      <label
                        className="absolute top-[-8px] px-1 w-fit ms-3 bg-white text-[#6E6E6E] text-xs font-normal leading-[18px]-"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        placeholder="Placeholder"
                        className="w-full px-4 py-2 block items-center h-14 text-[#60656F] rounded shadow-sm border-[#888B93]- border-[#929292] border-[1.5px] placeholder-[#60656F]- focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-[#C21010] -invalid:border-[#C21010]  focus:invalid:border-[#C21010] focus:invalid:ring-[#C21010] valid:border-primary"
                        required
                      />
                    </div>
                  )}

                  <div className="relative font-poppins">
                    <label
                      className="absolute top-[-8px] px-1 w-fit ms-3 bg-white text-[#6E6E6E] text-xs font-normal leading-[18px]-"
                      htmlFor="name"
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="name"
                      placeholder="treeviah@gmail.com"
                      className="w-full px-4 py-2 block items-center h-14 text-[#60656F] rounded shadow-sm border-[#888B93]- border-[#929292] border-[1.5px] placeholder-[#60656F]- focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-[#C21010] -invalid:border-[#C21010]  focus:invalid:border-[#C21010] focus:invalid:ring-[#C21010] valid:border-primary"
                      required
                    />
                  </div>

                  <div className="w-full relative font-poppins">
                    <div className="inline-flex w-[100%] items-center rounded shadow-sm  border-[#888B93]- border-[#929292] border-2 focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:text-[#C21010] -invalid:border-[#C21010]  focus:invalid:border-[#C21010] focus:invalid:ring-[#C21010] valid:border-primary">
                      <label
                        className="absolute top-[-8px] px-1 w-fit ms-3 bg-white text-[#6E6E6E] text-xs font-normal"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 flex items-center h-14 text-[#60656F]  focus:outline-none focus:border-0"
                        required
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                        className="p-2 flex w-fit"
                      >
                        <Image
                          src={showPassword ? EyeSlash : Eye}
                          alt=""
                        ></Image>
                      </button>
                    </div>
                  </div>
                  {isRegistered ? (
                    <button
                      onClick={() => handleLogin()}
                      className="bg-primary text-center w-full text-white px-6 py-2.5 rounded hover:bg-primary-light -hover:bg-[#6a0c6a]"
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRegister()}
                      className="bg-primary text-center w-full text-white px-6 py-2.5 rounded hover:bg-primary-light -hover:bg-[#6a0c6a]"
                    >
                      Sign Up
                    </button>
                  )}
                </div>
                {/* divider */}
                <div className="flex text-[#1D1D1D]  w-full space-x-4 items-center justify-center">
                  <div className="border h-0 w-48- w-4/12"></div>
                  <div className="text-[#1D1D1D]-">Or</div>
                  <div className="border h-0 w-48- w-4/12"></div>
                </div>
                {/* other signin options */}
                <div className="w-full inline-flex justify-center items-center gap-6">
                  <Link
                    href="#"
                    className="bg-white hover:scale-110 hover:bg-primary-light ease-in-out duration-150 flex justify-center items-center w-10  shadow rounded-full p-2"
                  >
                    <Image
                      className=" hover:bg-primary-light ease-in-out duration-150"
                      src={AppleIcon}
                      alt="apple-icon"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="bg-white hover:scale-110 hover:bg-primary-light ease-in-out duration-150 flex justify-center items-center w-10 shadow rounded-full p-2"
                  >
                    <Image
                      className=" hover:bg-primary-light ease-in-out duration-150"
                      src={GoogleIcon}
                      alt="google-icon"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="bg-white hover:scale-110 hover:bg-primary-light ease-in-out duration-150 flex justify-center items-center w-10 shadow rounded-full p-2"
                  >
                    <Image
                      className="hover:bg-primary-light ease-in-out duration-150"
                      src={FacebookIcon}
                      alt="facebook-icon"
                    />
                  </Link>
                </div>
                <p className=" w-full justify-center text-center">
                  <span className="text-[#1D1D1D]">
                    {isRegistered
                      ? `Don't have an account? `
                      : "Already have an account? "}
                  </span>
                  <button
                    onClick={() => setIsRegistered(!isRegistered)}
                    className="text-primary hover:text-primary-light hover:font-semibold  hover:underline hover:underline-offset-2"
                  >
                    Sign {isRegistered ? "Up" : "In"}
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden h-full lg:flex lg:max-w-[480px] bg-primary rounded-r-3xl">
            <Image
              className="h-full w-full rounded-r-3xl object-cover"
              src={Frame4}
              alt="hero-img"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
