const TOKEN = import.meta.env.VITE_TOKEN;
import { Octokit } from "octokit";
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: TOKEN,
});

export default {
  async getData() {
    return await octokit.request("GET /users/{username}/repos", {
      username: "tejsi",
    });
  },
  //   getEvent(id) {
  //     return apiClient.get("/events/" + id);
  //   },
};
