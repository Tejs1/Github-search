<script>
import UserRepoList from "../components/UserRepoList.vue";

export default {
  name: "UserProfileView",
  components: { UserRepoList },
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
};
</script>
<template>
  <main class="user-profile">
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
    </div>
    <UserRepoList :login="userData.login" />
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
</style>
