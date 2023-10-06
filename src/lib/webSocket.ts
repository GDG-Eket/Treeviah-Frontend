import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000');

socket.on ('socket', () => {
    const socketId = socket.id;

    console.log('Socket_Id', socketId);

});

export {socket};