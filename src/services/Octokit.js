const TOKEN = import.meta.env.VITE_TOKEN;
import { Octokit } from "octokit";
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: TOKEN,
});
export default {
  getUserRepo() {
    return octokit.request("GET /users/{username}/repos", {
      username: "tejsi",
    });
  },
  getUserSearchResults(value) {
    return octokit.request("GET /search/users", {
      q: value,
    });
  },
  getUserDetails(username) {
    return octokit.request("GET /users/{username}", {
      username: username,
    });
  },
};
