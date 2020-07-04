import axios from "axios";
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
    Authorization: "Client-ID 3zdlGHaiy2IIdh4Kp3JdExwO0ltyC-K7VU3RghouQeA",
  },
});
