import axios from "axios";

const port = "http://localhost:1005/scaard";
const api =  axios.create({
  baseURL: port,
  responseType: "json"
});

export const callAppLink = (apiLink) => {
  try {
    return api.get("apps/"+apiLink)
  } catch (error) {
    console.log("Api error Ocur");
  }
};

export const callResultLink = (apiLink) => {
  try {
    return api.get("/results/"+apiLink)
  } catch (error) {
    console.log("Unable to get results");
  }
};
