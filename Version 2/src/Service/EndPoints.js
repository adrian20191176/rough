import axios from "axios";

const port = "http://localhost:1005/scaard";

export const callAppLink = (apiLink) => {
  try {
    return axios.get(port + "/app/" + apiLink);
  } catch (error) {
    console.log("Api error Ocur");
  }
};

export const callResultLink = () => {
  try {
    return axios.get(port + "/results/");
  } catch (error) {
    console.log("Unable to get results");
  }
};
