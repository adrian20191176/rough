import axios from "axios";

const port = "http://localhost:1005/scaard";
const instance = axios.create({
  baseURL:'https://localhost:1005/scaard'
});
export const callAppLink = (apiLink) => {
  try {
    return instance.get(port + "/app/" + apiLink);
  } catch (error) {
    console.log("Api error Ocur");
  }
};

export const callResultLink = (apiLink) => {
  try {
    return instance.get(port + "/results/");
  } catch (error) {
    console.log("Unable to get results");
  }
};
