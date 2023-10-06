"use client";
import { JoinGameContainer, JoinGameForm } from "@/components/atoms";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Avatar from "../../../../../public/Images/Guy playing with a gamepad.png";
import JoinedAvatar from "@/components/selectaAvatar/joinedAvatar";

const JoinGame: React.FC = () => {
  const Loading = styled.div`
    font-size: 2em;
    color: white;
    padding-bottom: 20px;
    text-align: center;
  `;

  return (
    <JoinGameContainer>
      <JoinGameForm className='w-[60%]'>
        <Loading>Waiting For Host To Start</Loading>
        <div className="px-2 flex flex-col justify-center items-center">
          <div className="p-2 border-4 border-dashed border-spacing-4 border-primary rounded-full flex justify-center align-middle self-center w-[200px] h-[200px]">
            <Image
              src={Avatar}
              alt="avatar.png"
              width={300}
              height={200}
              className="w-[100%] h-[100%] rounded-full"
            />
          </div>
          <h2 className="text-[30px] text-black font-semibold">Developer</h2>
          <div className="flex flex-col justify-center items-center pt-6">
            <h3 className="text-white self-center text-[30px] text-center">
              Fellow Players
            </h3>
            <JoinedAvatar />
          </div>
        </div>
      </JoinGameForm>
    </JoinGameContainer>
  );
};

export default JoinGame;
