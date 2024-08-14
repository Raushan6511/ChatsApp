import io from 'socket.io-client';

// Update with your backend URL
// url android emulator
// const socket = io('http://10.0.2.2:5000/api/messages');

// url for android real devices
const socket = io('http://192.168.29.77:5000/api/messages');

export default socket;
