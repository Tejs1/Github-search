<script>
import UserRepo from "../components/UserRepo.vue";
import Octokit from "../services/Octokit";
export default {
  name: "UserRepoList",
  components: {
    UserRepo,
  },
  props: {
    login: {
      type: String,
      default: "tejs",
      required: true,
    },
  },
  data() {
    return {
      userData: [],
      userRepos: [],
    };
  },
  methods: {
    getUserRepo(login) {
      Octokit.getUserRepo(login)
        .then((response) => {
          this.userRepos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getUserRepo(this.login);
  },
  watch: {
    login(newValue, oldValue) {
      console.log(newValue, oldValue);
      this.getUserRepo(newValue);
    },
  },
};
</script>
<template>
  <div v-if="userRepos" class="repo-container">
    <UserRepo v-for="repo in userRepos" :key="repo.id" :repo-data="repo" />
  </div>
</template>

<style lang="css" scoped>
.repo-container {
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
