import axios from "axios"

const url = axios.create(
    {
        baseURL: "https://currency-backend-flask.herokuapp.com"
    }
);

export default url;