import axios from "axios";
import { BASE_URL } from "../status/Url";
import { Ioptions } from "../status/options";

const axiosGet = (options: Ioptions) => {
  axios({
    method: "GET",
    url: `${BASE_URL}${options.url}`,
  })
    .then((res) => {
      options.success(res);
    })
    .catch((err) => {
      options.error(err);
    });
};

export { axiosGet };
