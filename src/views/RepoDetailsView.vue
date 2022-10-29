<script>
import Octokit from "../services/Octokit";

export default {
  name: "RepoDetailsView",
  props: {
    reponame: {
      type: String,
      default: "yyx990803",
    },
    username: {
      type: String,
      default: "yyx990803",
    },
  },
  data() {
    return {
      filesInfo: null,
    };
  },
  created() {
    Octokit.getRepoContents(this.username, this.reponame).then(
      (resp) => (this.filesInfo = resp.data)
    );
  },
};
</script>

<template>
  <main>
    <h2>{{ reponame }}</h2>
    <ul>
      <li v-for="file in filesInfo" :key="file.sha">
        <a :href="file.git_url">
          {{ file.name }}
        </a>
      </li>
    </ul>
  </main>
</template>

<style lang="css" scoped>
main {
  flex-direction: column;
  justify-content: center;
}
</style>
