<script>
import Octokit from "../services/Octokit";
import UserRepoList from "../components/UserRepoList.vue";
import UserFollowersMutual from "../components/UserFollowersMutual.vue";

export default {
  name: "UserProfileView",
  components: { UserRepoList, UserFollowersMutual },
  props: {
    username: {
      type: String,
      default: "yyx990803",
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem(this.username)),
    };
  },
  computed: {
    avatar() {
      return this.userData.avatar_url + "&s=150";
    },
  },
  watch: {
    username(newValue) {
      this.getUserDetails(newValue);
    },
  },
  created() {
    this.getUserDetails(this.username);
  },
  methods: {
    getUserDetails(username) {
      this.userData = null;
      const storedData = JSON.parse(localStorage.getItem(username));
      if (storedData) this.userData = storedData;
      else {
        Octokit.getUserDetails(username)
          .then((response) => {
            this.userData = response.data;
            localStorage.setItem(
              response.data.login,
              JSON.stringify(response.data)
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<template>
  <main v-if="userData" class="user-profile">
    <div class="user">
      <img :src="avatar" :alt="userData.login" />
      <div class="user-info">
        <h2>{{ userData.name }}</h2>
        <div>Followers: {{ userData.followers }}</div>
        <div>Following: {{ userData.following }}</div>
        <div>
          <a :href="userData.html_url">{{ userData.login }} </a>
        </div>
        <div>
          <a :href="userData.blog">{{ userData.blog }}</a>
        </div>
      </div>
      <UserFollowersMutual :login="userData.login" />
    </div>
    <UserRepoList :login="userData.login" />
  </main>
</template>

<style lang="css" scoped>
.user-profile {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 200px 1fr;
}
.user {
  display: grid;
  grid-template-columns: 150px 200px 1fr;
  justify-content: center;
  text-align: left;
  width: 100%;
  padding: 0 2rem;
  align-items: center;
}
.user-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
}
.user img {
  height: 150px;
  width: 150px;
}
</style>
