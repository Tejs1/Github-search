const TOKEN = import.meta.env.VITE_TOKEN;
import { Octokit } from "octokit";
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: TOKEN,
});
export default {
  getUserRepo(username) {
    return octokit.request("GET /users/{username}/repos", {
      username: username,
    });
  },
  getRepoLang(username, repoName) {
    return octokit.request("GET /repos/{owner}/{repo}/languages", {
      owner: username,
      repo: repoName,
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
