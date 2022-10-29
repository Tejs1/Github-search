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
  getRepoContents(username, repoName, path) {
    return octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: username,
      repo: repoName,
      path: path,
    });
  },
  getUserSearchResults(value) {
    return octokit.request("GET /search/users", {
      q: value,
      // per_page: 100,
    });
  },
  getUserDetails(username) {
    return octokit.request("GET /users/{username}", {
      username: username,
    });
  },
  getUserFollowers(username) {
    return octokit.request("GET /users/{username}/followers", {
      username: username,
    });
  },
};
