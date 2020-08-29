import axios from "axios";
const url =
  process.env.NODE_ENV === "production"
    ? "https://www.jpark-portfolio.com:8000"
    : "https://www.jpark-portfolio.com:8000";

export const sendContactMessage = () => {
  return axios({
    method: "post",
    url: `${url}/message`,
    data: {
      senderName: "얼리슬로스",
      senderEmail: "",
      senderPnum: "",
      content: "서류합격",
    },
  });
};
