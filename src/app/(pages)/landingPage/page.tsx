"use client";

import React from "react";
import LandingHeader from "../../../components/landingHeader";
import LandingFooter from "../../../components/landingFooter";
import Image from "next/image";
import Link from "next/link";
import "@/styles/dashboard.css";
import Pizza from "@/../public/Images/pizza.svg";
import Member1 from "@/../public/Images/ellipse-10.svg";
import Member2 from "@/../public/Images/ellipse-8.svg";
import Member3 from "@/../public/Images/ellipse-9.svg";
import Member4 from "@/../public/Images/ellipse-11.svg";
import Member5 from "@/../public/Images/ellipse-12.svg";
import Polygons from "@/../public/Images/polygons.svg";
import Hero1 from "@/../public/Images/hero1.svg";
import Polygon4 from "@/../public/Images/polygon-4.svg";
import Theme1 from "@/../public/Images/theme1.svg";
import Theme2 from "@/../public/Images/theme2.svg";
import Theme3 from "@/../public/Images/theme3.svg";
import Theme4 from "@/../public/Images/theme4.svg";
import Theme5 from "@/../public/Images/theme5.svg";
import Theme6 from "@/../public/Images/theme6.svg";
import Theme7 from "@/../public/Images/theme7.svg";
import Theme8 from "@/../public/Images/theme8.svg";
import Book from "@/../public/Images/book.svg";
import Player1 from "@/../public/Images/player1.svg";
import Player2 from "@/../public/Images/player2.svg";
import Player3 from "@/../public/Images/player3.svg";
import Player4 from "@/../public/Images/player4.svg";
import Player5 from "@/../public/Images/player5.svg";
import Player6 from "@/../public/Images/player6.svg";
import Player7 from "@/../public/Images/player7.svg";
import Ranking from "@/../public/Images/ranking.svg";
import TaskSquare from "@/../public/Images/task-square.svg";
import MenuBoard from "@/../public/Images/menu-board.svg";
import FileNotebook from "@/../public/Images/file-notebook.svg";
import BookSaved from "@/../public/Images/book-saved.svg";
import ProfilePic from "@/../public/Images/profilepic.svg";
import Star from "@/../public/Images/star.svg";
import Tlogo2 from "@/../public/Images/t-logo2.svg";
import Flutter from "@/../public/Images/flutter.svg";
import WTM from "@/../public/Images/wtm.svg";
import GDG from "@/../public/Images/gdg.svg";
import Africinnovate from "@/../public/Images/africinnovate.svg";
import Playstore from "@/../public/Images/playstore.svg";
import Appstore from "@/../public/Images/appstore.svg";
import Facebook from "@/../public/Images/fb.svg";
import Twitter from "@/../public/Images/twitter.svg";
import Instagram from "@/../public/Images/instagram.svg";
import Whatsapp from "@/../public/Images/whatsapp.svg";


export default function LandingPage() {
  const games = [
    {
      imageUrl: Pizza,
      title: "Pizza Day",
      questions: 10,
      members: [
        Member1,
        Member2,
        Member3,
        Member4,
        Member5,
        Member1,
        Member2,
        Member3,
        Member4,
        Member5,
      ],
    },
    {
      imageUrl: Pizza,
      title: "Pokemons",
      questions: 12,
      members: [Member1, Member2, Member3, Member4, Member5],
    },
    {
      imageUrl: Pizza,
      title: "Pizza Day",
      questions: 16,
      members: [Member1, Member2, Member3, Member4, Member5],
    },
    {
      imageUrl: Pizza,
      title: "Pizza Day",
      questions: 20,
      members: [Member1, Member2, Member3, Member4, Member5],
    },
  ];
  return (
    <div>
      <LandingHeader />
      <main>
        {/* hero */}
        <section className="w-[100%] h-[783px] relative flex bg-primary px-10 xl:px-[72px]">
          <div className="w-[663.89px]- h-[535px]- left-[9.55px] bottom-0 absolute">
            <Image className="z-0" src={Polygons} alt="bg-decoration"></Image>
          </div>
          <div className="flex justify-center items-center">
            <div className="left-[72px]- top-[216px]- absolute- z-20 flex-col justify-center items-start space-y-6 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-2 inline-flex">
                <h1 className="lg:w-[60%] 2xl:w-[80%] font-montserrat text-white text-3xl md:text-4xl lg:text-5xl m-d:leading-normal  xl:text-6xl font-bold lg:leading-[80px]">
                  Embark on a Journey of Knowledge
                </h1>
                <p className="lg:w-[40%] 2xl:w-[70%] font-montserrat text-white text-xl md:text-2xl font-bold">
                  Step into the World of Learning Adventure Fun with Our
                  Interactive Quizzes
                </p>
              </div>
              <button className="rounded-lg px-6 py-2.5 bg-white hover:bg-[#D5AAD5] hover:font-bold">
                <a
                  href="/getStarted"
                  className="text-primary text-sm leading-6 font-medium"
                >
                  Get Started
                </a>
              </button>
            </div>
            <Image
              src={Hero1}
              className="hidden sm:block w-32 sm:w-[348px] xl:max-w-[470px] h-[470px]- md:right-[72px] right-12 bottom-5 sm:bottom-52- lg:bottom-[180px] 2xl:bottom-[280px]  3xl:block lg:absolute"
              alt="hero-img"
            />
          </div>
          <Image
            className="z-10 left-0 bottom-0 absolute w-full"
            src={Polygon4}
            alt="bg-top-deco"
          ></Image>
        </section>
        <div className="w-11/12 sm:w-1/2 lg:w-3/5 2xl:w-2/6 h-full mb-4 pl-4 sm:pl-12 pr-[43px] py-6 bg-primary rounded-r-[64px] justify-end items-center flex">
          <div className=" text-sm text-center text-white sm:text-lg font-medium leading">
            With over 300+ Users Playing and learning everday
          </div>
        </div>
        {/* discover section */}
        <section className="pb-8 px-[72px] w-full flex flex-col items-center">
          <div className="w-full xl:w-3/5">
            <h2 className="font-montserrat text-center mb-2 text-2xl sm:text-3xl xl:leading-10 font-bold">
              Discover our various collections of Games in Treeviah
            </h2>
            <p className="text-gray text-center text-lg leading-6 font-dmSans font-medium">
              Engaging Games and Expand Your Knowledge
            </p>
          </div>
          <div className="my-20">
            <div className="lg:flex justify-between items-center md:gap-4 sm:grid sm:grid-cols-2 grid-cols-1 gap-2">
              {games.map((item, index) => (
                <div key={index} className="relative rounded-3xl">
                  <Image
                    className="border-y-2 border-gray1 border-x-2 rounded-3xl bg-gray1"
                    src={item.imageUrl}
                    alt="pizza"
                  ></Image>
                  <div>
                    <div className="w-full absolute bottom-0 pt-4 pl-4 pb-3 text-gray bg-white border-b-2 border-gray1 border-x-2 rounded-b-3xl">
                      <h3 className="text-[27px] leading-10">{item.title}</h3>
                      <p className="text-xl mb-1">{item.questions} Questions</p>
                      <div className="gap-4 block sm:inline-flex justify-center items-center">
                        <div className="flex relative h-8 w-24">
                          {item.members.splice(0, 5).map((item, index) => (
                            <div key={index} className="h-8 w-8 ml-[-8px]">
                              <Image
                                className="h-full w-full"
                                width={500}
                                height={500}
                                src={item}
                                alt="people-joined-img"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-base text-black">
                          {item.members.length}+ Joined
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="border  lg:mt-24 mb-10 border-primary rounded-lg px-6 py-2.5 bg-primary hover:bg-primary-light">
            <a href="/sign-up" className="text-white">
              Sign Up
            </a>
          </button>
        </section>
        {/* template section */}
        <section className="pt-7 px-6 sm:px-[72px] flex items-center justify-center flex-col">
          <div className="w-4/5 mb-24 ">
            <h2 className="text-center font-montserrat text-2xl sm:text-[32px] leading-10 font-bold mb-4 wrap">
              Top notch customizable templates and Themes
            </h2>
            <p className="text-center text-gray text-lg leading-6 font-medium">
              Unleash your Creativity with Customizable Templates
            </p>
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            <Image
              alt="1st-theme"
              className="bg-yellow1 w- rounded-3xl"
              src={Theme1}
            ></Image>
            <Image
              alt="2nd-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme2}
            ></Image>
            <Image
              alt="3rd-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme3}
            ></Image>
            <Image
              alt="4th-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme4}
            ></Image>
            <Image
              alt="5th-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme5}
            ></Image>
            <Image
              alt="6th-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme6}
            ></Image>
            <Image
              alt="7th-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme7}
            ></Image>
            <Image
              alt="8th-theme"
              className="bg-yellow1 w-[348px] rounded-3xl"
              src={Theme8}
            ></Image>
          </div>
          <div className="flex flex-wrap gap-6 my-9 md:my-28 justify-center items-center">
            <button className="border border-primary rounded-lg px-6 py-2.5  xl:px-8 xl:py-5  bg-primary hover:bg-primary-light">
              <Link
                href="/signup"
                className="text-white text-2xl font-medium md:font-bold"
              >
                Get Started
              </Link>
            </button>
            <button className="shadow border-primary rounded-lg px-6 py-2.5 xl:py-0 xl:px-0 xl:w-[149px] xl:h-[72px] flex justify-center items-center hover:bg-[#D5AAD5]">
              <a
                href="/join-game"
                className="text-primary  text-2xl font-medium md:font-bold hover:text-primary-light"
              >
                Join game
              </a>
            </button>
          </div>
        </section>
        {/* Quiz Types */}
        <section className="pt-7 xl:px-[72px] flex items-center justify-center flex-col">
          <div className="w-4/5 mb-12 ">
            <h2 className="text-center font-montserrat text-[32px] leading-10 font-bold mb-4">
              Create Quizzez for every Occasion
            </h2>
            <p className="text-center text-gray text-lg leading-6 font-medium">
              Built in templates to match the occasion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10  xl:gap-x-14`">
            <div className="bg-[#E6CCE6] rounded-lg px-8 py-12 sm:px-[52px] sm:pb-11 lg:pt-[124px] flex flex-col items-center justify-end gap-x-5 sm:gap-y-10">
              <Image
                className="w-16 xl:w-[112px]"
                src={Book}
                alt="book-icon"
              ></Image>
              <h3 className="text-center font-montserrat text-2xl sm:text-[32px] sm:leading-10 font-medium">
                Personality Test
              </h3>
            </div>
            <div className="bg-[#E6CCE6] rounded-lg px-8 py-12 sm:px-[52px] sm:pb-11 lg:pt-[124px] flex flex-col items-center justify-end gap-5 sm:gap-y-10">
              <Image
                className="w-16 xl:w-[112px]"
                src={Ranking}
                alt="quiz-competition-icon"
              ></Image>
              <h3 className="text-center font-montserrat text-2xl sm:text-[32px] sm:leading-10 font-medium">
                Quiz Competition
              </h3>
            </div>
            <div className="bg-[#E6CCE6] rounded-lg px-8 py-12 sm:px-[52px] sm:pb-11 lg:pt-[124px] flex flex-col items-center justify-end gap-5 sm:gap-y-10">
              <Image
                className="w-16 xl:w-[112px]"
                src={TaskSquare}
                alt="employees-test-icon"
              ></Image>
              <h3 className="text-center font-montserrat text-2xl sm:text-[32px] sm:leading-10 font-medium">
                Employees Test
              </h3>
            </div>
            <div className="bg-[#E6CCE6] rounded-lg px-8 py-12 sm:px-[52px] sm:pb-11 lg:pt-[124px] flex flex-col items-center justify-end gap-5 sm:gap-y-10">
              <Image
                className="w-16 xl:w-[112px]"
                src={MenuBoard}
                alt="compliance-quiz-icon"
              ></Image>
              <h3 className="text-center font-montserrat text-2xl sm:text-[32px] sm:leading-10 font-medium">
                Compliance quiz
              </h3>
            </div>
            <div className="bg-[#E6CCE6] rounded-lg px-8 py-12 sm:px-[52px] sm:pb-11 lg:pt-[124px] flex flex-col items-center justify-end gap-5 sm:gap-y-10">
              <Image
                className="w-16 xl:w-[112px]"
                src={FileNotebook}
                alt="club-tests-icon"
              ></Image>
              <h3 className="text-center font-montserrat text-2xl sm:text-[32px] sm:leading-10 font-medium">
                Club Tests
              </h3>
            </div>
            <div className="bg-[#E6CCE6] rounded-lg px-8 py-12 sm:px-[52px] sm:pb-11 lg:pt-[124px] flex flex-col items-center justify-end gap-5 sm:gap-y-10">
              <Image
                className="w-16 xl:w-[112px]"
                src={BookSaved}
                alt="school-exams-icon"
              ></Image>
              <h3 className="text-center font-montserrat text-2xl sm:text-[32px] sm:leading-10 font-medium">
                School Exams
              </h3>
            </div>
          </div>
          <div className="pt-6 pb-10 flex justify-center">
            <button className="border border-primary rounded-lg  px-6 py-2.5  xl:py-5  bg-primary hover:bg-primary-light">
              <Link
                href="#"
                className="text-white text-2xl py-2.5 font-medium md:font-bold"
              >
                Create a Triviah
              </Link>
            </button>
          </div>
        </section>
        {/* join players */}
        <section className="bg-[#BF80BF] h-full pt-16 pb-20  md:pb-32 px-6 lg:px-[72px] flex items-center justify-center flex-col">
          <div className="w-4/5 mb-12 text-white ">
            <h2 className="text-center font-montserrat text-[32px] leading-10 font-bold mb-4">
              Join the Fun with 100+ Players
            </h2>
            <p className="text-center text-lg leading-6 font-medium">
              Collaborate, Compete, and Conquer!
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-row h-full gap-4 sm:gap-2 w-full relative justify-center">
            <Image
              src={Player1}
              className="order-first w-5/12 sm:w-[28%]"
              alt="player1-icon"
            ></Image>
            <div className="order-last sm:order-2 flex flex-col justify-end gap-2 w-full sm:w-[44%]">
              <div className="flex gap-2 w-full">
                <Image
                  src={Player2}
                  className="w-[49%]"
                  alt="player1-icon"
                ></Image>
                <Image
                  src={Player3}
                  className="w-[49%]"
                  alt="player1-icon"
                ></Image>
              </div>
              <div className="flex gap-2 w-full">
                <Image
                  src={Player5}
                  className="w-[31.25%]"
                  alt="player1-icon"
                ></Image>
                <Image
                  src={Player6}
                  className="w-[31.785%]"
                  alt="player1-icon"
                ></Image>
                <Image
                  src={Player7}
                  className="w-[31.25%]"
                  alt="player1-icon"
                ></Image>
              </div>
            </div>
            <Image
              src={Player4}
              className="order-2 sm:order-last w-5/12 sm:w-[28%]"
              alt="player1-icon"
            ></Image>
          </div>
        </section>
        {/* Testimonials */}
        <section className="w-full py-28 px-8 lg:px-8 xl:px-[72px]">
          <h2 className="font-montserrat text-gray font-bold text-center text-[32px] leading-10 py-2">
            Testimonials
          </h2>
          <div className="my-28 w-full flex flex-wrap xl:flex-nowrap gap-8 lg:gap-12 xl:gap-24 justify-center">
            {/* 1st */}
            <div className="rounded-2xl w-fit sm:w-5/12 lg:w-[28%] flex flex-col justify-center items-center shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] py-6 px-5">
              <h2 className="font-montserrat text-center text-black text-2xl font-medium mb-6">
                A Great tool for Accessing Students
              </h2>
              <p className="w-11/12 text-center text-black text-lg font-normal leading-6 mb-7">
                “Treeviah has been a great tool when it comes to accessing my
                students in live quizeIt has a really beautiful UI, When it
                comes to awesome support & building delightful software.
              </p>
              <div className="p-2 flex-col justify-center items-center gap-1 inline-flex">
                <Image
                  alt="profile-photo"
                  className="w-12 h-12 rounded-full border-2 border-primary"
                  src={ProfilePic}
                />
                <div className="flex-col justify-center items-center gap-1 flex">
                  <h4 className="text-primary font-montserrat text-2xl font-medium text-center">
                    Troy Maxwelson
                  </h4>
                  <p className="text-gray text-sm font-normal leading-normal">
                    Administrator
                  </p>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="rounded-2xl w-fit sm:w-5/12 lg:w-[28%] flex flex-col justify-center items-center shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] py-6 px-5">
              <h2 className="font-montserrat text-center text-black text-2xl font-medium mb-6">
                A Great tool for Accessing Students
              </h2>
              <p className="w-11/12 text-center text-black text-lg font-normal leading-6 mb-7">
                “Treeviah has been a great tool when it comes to accessing my
                students in live quizeIt has a really beautiful UI, When it
                comes to awesome support & building delightful software.
              </p>
              <div className="p-2 flex-col justify-center items-center gap-1 inline-flex">
                <Image
                  alt="profile-photo"
                  className="w-12 h-12 rounded-full border-2 border-primary"
                  src={ProfilePic}
                />
                <div className="flex-col justify-center items-center gap-1 flex">
                  <h4 className="text-primary font-montserrat text-2xl font-medium text-center">
                    Troy Maxwelson
                  </h4>
                  <p className="text-gray text-sm font-normal leading-normal">
                    Administrator
                  </p>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className="rounded-2xl w-fit sm:w-5/12 lg:w-[28%] flex flex-col justify-center items-center shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] py-6 px-5">
              <h2 className="font-montserrat text-center text-black text-2xl font-medium mb-6">
                A Great tool for Accessing Students
              </h2>
              <p className="w-11/12 text-center text-black text-lg font-normal leading-6 mb-7">
                “Treeviah has been a great tool when it comes to accessing my
                students in live quizeIt has a really beautiful UI, When it
                comes to awesome support & building delightful software.
              </p>
              <div className="p-2 flex-col justify-center items-center gap-1 inline-flex">
                <Image
                  alt="profile-photo"
                  className="w-12 h-12 rounded-full border-2 border-primary"
                  src={ProfilePic}
                />
                <div className="flex-col justify-center items-center gap-1 flex">
                  <h4 className="text-primary font-montserrat text-2xl font-medium text-center">
                    Troy Maxwelson
                  </h4>
                  <p className="text-gray text-sm font-normal leading-normal">
                    Administrator
                  </p>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <Image
                      alt="star-rating"
                      src={Star}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* partner */}
        <section className=" w-full flex flex-col items-center pb-20">
          <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
            <div className="flex items-center gap-0.5">
              <Image
                alt="t-reeviah"
                src={Tlogo2}
              ></Image>
              <p className="font-bold text-primary font-montserrat text-[45.48px] leading-[52px]">
                reeviah
              </p>
            </div>
            <h2 className="text-center text-gray font-montserrat text-[32px] leading-10 font-bold">
              is in partnership with
            </h2>
          </div>
          <div className=" w-11/12 flex flex-wrap gap-6 justify-center lg:justify-center items-center  lg:gap-x-[120px]">
            <Image
              alt="Flutter-Festivals-Eket"
              src={Flutter}
            ></Image>
            <Image
              alt="Women-Tech-Makers"
              src={WTM}
            ></Image>
            <Image
              alt="Google Developers-Group"
              src={GDG}
            ></Image>
            <Image
              alt="Africinnovate"
              src={Africinnovate}
            ></Image>
          </div>
        </section>
        {/* connect */}
        <section className="px-8 sm:px-[72px] pt-14 pb-16 bg-gradient-to-l from-[#40196D] from-[16%] via-[#6F077B] via-[57.29%] to-primary to-[99.54%]">
          <div>
            <h2 className="text-white font-montserrat text-[32px] leading-10 font-bold mb-6">
              Connect with us on social media
            </h2>
            <div className="flex gap-x-9 mb-10">
              <a
                href="#"
                className="hover:scale-110 ease-in-out duration-150 rounded-full shadow"
              >
                <Image
                  className="ease-in-out duration-150"
                  src={Facebook}
                  alt="facebook-icon"
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 ease-in-out duration-150 rounded-full shadow"
              >
                <Image
                  className="ease-in-out duration-150"
                  src={Twitter}
                  alt="twitter-icon"
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 ease-in-out duration-150 rounded-full shadow"
              >
                <Image
                  className="ease-in-out duration-150"
                  src={Instagram}
                  alt="instagram-icon"
                />
              </a>
              <a
                href="#"
                className="hover:scale-110 ease-in-out duration-150 rounded-full shadow"
              >
                <Image
                  className="ease-in-out duration-150"
                  src={Whatsapp}
                  alt="whatsapp-icon"
                />
              </a>
            </div>
            <p className="text-base text-white mb-2.5">
              Subscribe for our newsletter, and get updates on what happens
              behind the scenes at Treeviah
            </p>
            <div className="block sm:flex gap-4">
              <input
                className="px-6 py-5 w-full sm:w-3/5 rounded-lg text-sm leading-6"
                type="email"
                name="email"
                id="useremail"
                placeholder="Enter your email address"
              />
              <button
                className="px-6 py-2.5 shadow text-white bg-primary hover:bg-primary-light rounded-lg font-bold text-2xl mt-2.5 sm:mt-0"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
        {/* download */}
        <div className="px-[72px] py-7 flex gap-6">
          <a href="#">
            <Image
              alt="Get from Google Playstore"
              src={Playstore}
            ></Image>
          </a>
          <a href="#">
            <Image
              alt="Get from Appstore"
              src={Appstore}
            ></Image>
          </a>
        </div>
        <LandingFooter />
      </main>
    </div>
  );
}
