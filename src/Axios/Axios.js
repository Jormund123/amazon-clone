import axios from "axios";

const instance = axios.create({
    baseUrl: "...", //cloud functions URL
});

export default instance;
