import React from "react";
import ImageOne from "../../public/Images/one.jpg";
import { MdDelete } from "react-icons/md";
import "../styles/dashboard.css";
import Image from "next/image";
import Link from "next/link";

interface Notification {
  user: string;
  notify: string;
  time: number;
}

const NoticeArray: Notification[] = [
  {
    user: "Snr developer",
    notify: "Sent a friend request",
    time: 3,
  },
  {
    user: "Snr developer",
    notify: "Sent a friend request",
    time: 3,
  },
  {
    user: "Snr developer",
    notify: "Sent a friend request",
    time: 3,
  },
  {
    user: "Snr developer",
    notify: "Sent a friend request",
    time: 3,
  },
];

const NotificationComponent: React.FC = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col w-100 p-[10px] md:px-[40px] md:py-[20px] justify-start align-middle">
          <div className="w-[100%] flex flex-row justify-between align-middle">
            <span>
              <Link
                href="/"
                className="text-primary hover:text-purple-800 pl-2"
              >
                Go Back
              </Link>
            </span>
            <span className="flex justify-center align-middle">
              <span className="border-2 rounded-full border-dashed flex justify-center align-middle self-center w-[40px] md:w-[30px] lg:w-[60px] h-[40px] md:h-[40px] lg:h-[60px]">
                <Image
                  src={ImageOne}
                  alt="one.jpg"
                  width={700}
                  height={200}
                  className="w-[100%] h-[100%] rounded-full"
                />
              </span>
            </span>
          </div>
          <div className="">
            <h1 className="font-semibold text-[32px] ml-2">Notification</h1>
          </div>
          <div className="flex flex-col w-100 p-2">
            <label className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-[100%] rounded-md gap-10">
              {NoticeArray.map((notice, i) => (
                <div
                  className="shadow-lg rounded-md flex flex-col justify-between align-middle py-2 px-4 lg:flex-row w-[100%] lg:h-[100px] h-auto"
                  key={i}
                >
                  <div className="flex flex-col xl:flex-row justify-start xl:justify-center align-middle">
                    <span className="border-2 rounded-full flex justify-start xl:justify-cente align-middle xl:self-center w-[40px] md:w-[30px] lg:w-[60px] h-[40px] md:h-[40px] lg:h-[60px]">
                      <Image
                        src={ImageOne}
                        alt="one.jpg"
                        width={700}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </span>
                    <span className="flex flex-col justify-center align-middle xl:pl-2">
                      <span className="flex flex-row justify-center align-middle">
                        <h2 className="font-semibold text-[15px] xl:text-[20px] xl:pr-2 text-primary">
                          {notice.user}
                        </h2>
                        <p className="text-[13px] xl:text-[15px] text-gray-light self-end">
                          {notice.notify}
                        </p>
                      </span>
                      <span>
                        <p>{notice.time} days ago</p>
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-center align-middle self-start xl:self-center pt-[20px] xl:pt-0">
                    <span className="flex justify-center align-middle self-center lg:flex-row flex-col">
                      <span
                        className={`lg:flex justify-center align-middle self-center gap-[20px] flex-row`}
                      >
                        <button className="px-2 py-2 rounded join-team lg:w-[100px] text-[13px]">
                          Reject
                        </button>
                        <button className="px-2 py-2 rounded host-team lg:w-[100px] text-[13px] ml-2">
                          Join
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-[100%] gap-10 my-4">
              <label className="">
                <div className="shadow-xl rounded-md flex flex-col justify-between align-middle py-2 px-4 lg:flex-row w-[100%] lg:h-[100px] h-auto">
                  <div className="flex flex-col xl:flex-row justify-start xl:justify-center align-middle">
                    <span className="border-2 rounded-full flex justify-start xl:justify-cente align-middle xl:self-center w-[40px] md:w-[30px] lg:w-[60px] h-[40px] md:h-[40px] lg:h-[60px]">
                      <Image
                        src={ImageOne}
                        alt="one.jpg"
                        width={700}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </span>
                    <span className="flex flex-col justify-center align-middle pl-2">
                      <span className="flex flex-row justify-start xl:justify-center align-middle">
                        <h2 className="font-semibold text-[15px] xl:text-[20px] xl:pr-2 text-primary">
                          Snr developer
                        </h2>
                        <p className="text-[13px] xl:text-[15px] text-gray-light self-end">
                          Sent a friend request
                        </p>
                      </span>
                      <span>
                        <p>2 days ago</p>
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-center align-middle xl:self-center self-start pt-[20px] xl:pt-0">
                    <span className="flex justify-center align-middle self-center lg:flex-row flex-col">
                      <span
                        className={`lg:flex justify-center align-middle self-center gap-[20px] flex-row`}
                      >
                        <p className="text-primary">Mark as read</p>
                      </span>
                    </span>
                  </div>
                </div>
              </label>
              <label className="">
                <div className="shadow-md rounded-md flex flex-col justify-between align-middle py-2 px-4 lg:flex-row w-[100%] lg:h-[100px] h-auto">
                  <div className="flex flex-col xl:flex-row justify-start xl:justify-center align-middle">
                    <span className="border-2 rounded-full flex justify-start xl:justify-cente align-middle xl:self-center w-[40px] md:w-[30px] lg:w-[60px] h-[40px] md:h-[40px] lg:h-[60px]">
                      <Image
                        src={ImageOne}
                        alt="one.jpg"
                        width={700}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </span>
                    <span className="flex flex-col justify-center align-middle pl-2">
                      <span className="flex flex-row justify-center align-middle">
                        <h2 className="font-semibold text-[15px] xl:text-[20px] xl:pr-2 text-primary">
                          Snr developer
                        </h2>
                        <p className="text-[13px] xl:text-[15px] text-gray-light self-end">
                          Sent a friend request
                        </p>
                      </span>
                      <span>
                        <p>2 days ago</p>
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-center align-middle self-start xl:self-center pt-[20px] xl:pt-0">
                    <span className="flex justify-center align-middle self-center lg:flex-row flex-col">
                      <span
                        className={`lg:flex justify-center align-middle self-center gap-[20px] flex-row`}
                      >
                        <i className="text-primary text-[20px]">
                          <MdDelete />
                        </i>
                      </span>
                    </span>
                  </div>
                </div>
              </label>
              <label className="">
                <div className="shadow-md rounded-md flex flex-col justify-between align-middle py-2 px-4 lg:flex-row w-[100%] lg:h-[100px] h-auto">
                  <div className="flex flex-col xl:flex-row justify-start xl:justify-center align-middle">
                    <span className="border-2 rounded-full flex justify-start xl:justify-cente align-middle xl:self-center w-[40px] md:w-[30px] lg:w-[60px] h-[40px] md:h-[40px] lg:h-[60px]">
                      <Image
                        src={ImageOne}
                        alt="one.jpg"
                        width={700}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </span>
                    <span className="flex flex-col justify-center align-middle pl-2">
                      <span className="flex flex-row justify-center align-middle">
                        <h2 className="font-semibold text-[15px] xl:text-[20px] xl:pr-2 text-primary">
                          Snr developer
                        </h2>
                        <p className="text-[13px] xl:text-[15px] text-gray-light self-end">
                          Sent a friend request
                        </p>
                      </span>
                      <span>
                        <p>2 days ago</p>
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-center align-middle self-start xl:self-center pt-[20px] xl:pt-0">
                    <span className="flex justify-center align-middle self-center lg:flex-row flex-col">
                      <span
                        className={`lg:flex justify-center align-middle self-center gap-[20px] flex-row`}
                      >
                        <i className="text-primary text-[20px]">
                          <MdDelete />
                        </i>
                      </span>
                    </span>
                  </div>
                </div>
              </label>
              <label className="4">
                <div className="shadow-md rounded-md flex flex-col justify-between align-middle py-2 px-4 lg:flex-row w-[100%] lg:h-[100px] h-auto">
                  <div className="flex flex-col xl:flex-row justify-start xl:justify-center align-middle">
                    <span className="border-2 rounded-full flex justify-start xl:justify-cente align-middle xl:self-center w-[40px] md:w-[30px] lg:w-[60px] h-[40px] md:h-[40px] lg:h-[60px]">
                      <Image
                        src={ImageOne}
                        alt="one.jpg"
                        width={700}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </span>
                    <span className="flex flex-col justify-center align-middle pl-2">
                      <span className="flex flex-row justify-center align-middle">
                        <h2 className="font-semibold text-[15px] xl:text-[20px] xl:pr-2 text-primary">
                          Snr developer
                        </h2>
                        <p className="text-[13px] xl:text-[15px] text-gray-light self-end">
                          Sent a friend request
                        </p>
                      </span>
                      <span>
                        <p>2 days ago</p>
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-center align-middle self-start xl:self-center pt-[20px] xl:pt-0">
                    <span className="flex justify-center align-middle self-center lg:flex-row flex-col">
                      <span
                        className={`lg:flex justify-center align-middle self-center gap-[20px] flex-row`}
                      >
                        <i className="text-primary text-[20px]">
                          <MdDelete />
                        </i>
                      </span>
                    </span>
                  </div>
                </div>
              </label>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
