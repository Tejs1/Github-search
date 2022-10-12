<script>
import Octokit from "../services/Octokit";

export default {
  name: "UserProfileView",
  props: {
    username: {
      type: String,
      default: "yyx990803",
    },
  },
  data() {
    return {
      userData: JSON.parse(sessionStorage.getItem(this.username)),
    };
  },
  created() {
    // Octokit.getUserRepo().then((res) => console.log(res.data));
  },
  computed: {
    name() {
      return this.userData;
    },
  },
};
</script>
<template>
  <main class="user-profile">
    <div class="user">
      <img :src="userData.avatar_url" :alt="userData.login" />
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
    </div>
    <div class="repo-container">
      <div class="repo">wsfww</div>
      <div class="repo">wffffff</div>
      <div class="repo">wwwwwwwwwwwwwww</div>
      <div class="repo">awwwwww wdf ww</div>
      <div class="repo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        cupiditate suscipit reiciendis voluptates. Temporibus dolorem ex
        exercitationem quisquam, quam reprehenderit qui cupiditate quaerat alias
        id optio nobis nemo. Quasi, voluptate?
      </div>
      <div class="repo"></div>
    </div>
  </main>
</template>

<style lang="css" scoped>
.user-profile {
  display: grid;
  grid-template-rows: 150px 1fr;
  width: 100%;
  height: 100%;
}
.user {
  display: flex;
  justify-content: center;
  text-align: left;
}
.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1rem;
}
.repo-container {
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.repo {
  height: 221px;
  outline: 1px solid red;
  padding: 1rem;
}
</style>
