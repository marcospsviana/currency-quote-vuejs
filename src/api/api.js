import axios from "axios"

const url = axios.create(
    {
        baseURL: "https://currency-backend-flask.fly.dev/"
    }
);

export default url;