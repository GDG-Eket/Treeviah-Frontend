"use client";
import { JoinGameContainer, JoinGameForm } from "@/components/atoms";
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import SelectAvatar from "@/components/selectaAvatar/avatar";
import { useMutation } from "@apollo/client";
// import { socket } from "@/lib/webSocket";
import { io } from "socket.io-client";
import { Socket } from "socket.io";
import { JOIN_QUIZ } from "@/lib/apollo/mutations/quiz-mutation";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import axios from "axios";
import { AnyIfEmpty } from "react-redux";

const JoinGame: React.FC = () => {
  // console.log(socket)
  const [joinQuiz, { data, loading, error }] = useMutation(JOIN_QUIZ);
  const [quizCode, setQuizCode] = useState("");
  const [userName, setUserName] = useState("");
  const [quizid, setQuizid] = useState("");
  const [socketid, setSocketid] = useState("");
  const [socket, setSocket] = useState<
    | Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
    | undefined
  >(undefined);

  useEffect(() => {
    const newSocket = io("https://treeviah-backend-gmdmxopiuq-uc.a.run.app", {
      transports: ["websocket"],
    });

    newSocket.on("connect", () => {
      console.log("Connected to Socket Server");
    });

    newSocket.on("onboardingStarted", (data) => {
      console.log(data);
      // joinQuizHandler();
    });

    setSocket(socket);
  }, []);

  const joinQuizHandler = async () => {
    try {
      const response = await axios.post(
        "https://treeviah-backend-gmdmxopiuq-uc.a.run.app",
        {
          query: `
          mutation JoinQuiz($input: JoinQuizInput) {
            JoinQuiz(input: $input) {
              id
              title
            }
          }
          `,
          variables: {
            input: {
              quizId: 1, // Replace with the actual quiz ID
              socketId: socket, // Replace with the user's socket ID
              quizCode: "UT27D", // Replace with the actual quiz code
              username: "username", // Replace with the user's username
            },
          },
          // console.log("Player has joined:", data)
        }
        );
        console.log("Player has joined:", data.joinQuiz.message);
    } catch (err) {
      console.error("Error joining quiz:", error);
    }
  };

  // const joinQuizHandler = () => {
  //   joinQuiz({
  //     variables: {
  //       input: {
  //         code: quizCode,
  //         username: userName,
  //       },
  //     },
  //   });
  // };

  // joinQuiz({
  //   variables: {
  //     input: {
  //       quizid: quizid,
  //       socketid: socketid,
  //       code: quizCode,
  //       username: userName,
  //     },
  //   },
  // });

  return (
    // <div>
    //   <h1>Hello</h1>
    // </div>
    <JoinGameContainer>
      <JoinGameForm className="bg-white p-4 rounded-md h-[80%] w-[50%]">
        <h2 className="text-[2em] font-semibold">Join Quiz</h2>
        <TextField
          label="Enter Quiz Code"
          id="QuizCode"
          className="my-4 w-[80%]"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter NickName"
        />
        <TextField
          label="Enter Nickname"
          id="NickName"
          className="my-4 w-[80%]"
        />
        <div className="flex flex-col justify-start items-center w-[80%]">
          <h3 className="text-black self-start font-semibold">Select Avatar</h3>
          <SelectAvatar />
        </div>
        <button
          type="button"
          className="text-white bg-primary py-2 px-6 rounded-md"
        >
          Join Game
        </button>
      </JoinGameForm>
    </JoinGameContainer>
  );
};

export default JoinGame;
