import axios from 'axios';

export default axios.create({
    baseURL:'https://anime-backend-tq4l.onrender.com/',
    // headers: {"ngrok-skip-browser-warning": "true"}
});