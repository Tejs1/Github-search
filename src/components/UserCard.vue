<!-- <script setup> -->
<script>
import Octokit from "../services/Octokit";

export default {
  name: "UserCard",
  props: {
    searchItemProp: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userData: null,
    };
  },
  computed: {
    user() {
      return {
        avatar_url: this.searchItemProp.avatar_url + "&s=50",
        login: this.searchItemProp.login,
        type: this.searchItemProp.type,
        name: this.userData ? this.userData.name : "",
        followers: this.userData ? this.userData.followers : 0,
        following: this.userData ? this.userData.following : 0,
        description: this.userData ? this.userData.bio : "",
        mail: this.userData ? this.userData.email : "",
        blog: this.userData ? this.userData.blog : "",
      };
    },
  },

  created() {
    Octokit.getUserDetails(this.searchItemProp.login)
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
  },
};
</script>

<template>
  <li class="user-div">
    <RouterLink
      :to="{
        name: 'UserProfileView',
        params: { username: user.login },
      }"
      class="avatar-div"
    >
      <img :src="user.avatar_url" alt="avatar_url"
    /></RouterLink>

    <div class="user-data">
      <div class="user-name">
        <div v-if="user.name">{{ user.name }}</div>
        <RouterLink
          :to="{
            name: 'UserProfileView',
            params: { username: user.login },
          }"
        >
          <div>@{{ user.login }}</div></RouterLink
        >
      </div>
      <div>
        <div>Followers :{{ user.followers }}</div>
        <div>Following :{{ user.following }}</div>
      </div>
      <div>
        <span>abx@emailcom</span>
        <br />
        <a v-if="user.blog" :href="user.blog" target="_blank">blog</a>
      </div>
    </div>
  </li>
</template>

<style scoped>
li {
  flex-direction: column;
  display: flex;
  justify-content: center;
}
img {
  height: 52px;
  width: 52px;
}
</style>
