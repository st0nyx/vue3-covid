import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://disease.sh/v3/covid-19/all"
  // withCredentials: false,
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json"
  // }
});

export default {
  getCountries() {
    return apiClient();
  }
};
