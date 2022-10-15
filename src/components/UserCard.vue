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
      // userData: JSON.parse(sessionStorage.getItem(this.searchItemProp.login)),
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
    // fetch("https://dog.ceo/api/breeds/image/raandom")
    //   .then((response) => {
    //     console.log(response);
    //     this.userData = response.data;
    //     sessionStorage.setItem(
    //       response.data.login,
    //       JSON.stringify(response.data)
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     console.log(this.searchItemProp);
    //     window.localStorage.setItem(
    //       this.searchItemProp.login,
    //       JSON.stringify(this.searchItemProp)
    //     );
    //     console.log("wriiiter");
    //   });
    //  "this.searchItemProp.login",
    // "JSON.stringify(this.searchItemProp)"
    // Octokit.getUserDetails(this.searchItemProp.login)
    //   .then((response) => {
    //     this.userData = response.data;
    //     sessionStorage.setItem(
    //       response.data.login,
    //       JSON.stringify(response.data)
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
        <a :href="user.blog" target="_blank">blog</a>
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
  height: 50px;
  width: 50px;
}
</style>
<!-- 
  login: "Tejs1",
  id: 67797070,
  node_id: "MDQ6VXNlcjY3Nzk3MDcw",
  avatar_url: "https://avatars.githubusercontent.com/u/67797070?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Tejs1",
  html_url: "https://github.com/Tejs1",
  followers_url: "https://api.github.com/users/Tejs1/followers",
  following_url: "https://api.github.com/users/Tejs1/following{/other_user}",
  gists_url: "https://api.github.com/users/Tejs1/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Tejs1/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Tejs1/subscriptions",
  organizations_url: "https://api.github.com/users/Tejs1/orgs",
  repos_url: "https://api.github.com/users/Tejs1/repos",
  events_url: "https://api.github.com/users/Tejs1/events{/privacy}",
  received_events_url: "https://api.github.com/users/Tejs1/received_events",
  type: "User",
  site_admin: false,
  score: 1.0,
 -->

<!-- {
  "login": "Tejs1",
  "id": 67797070,
  "node_id": "MDQ6VXNlcjY3Nzk3MDcw",
  "avatar_url": "https://avatars.githubusercontent.com/u/67797070?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Tejs1",
  "html_url": "https://github.com/Tejs1",
  "followers_url": "https://api.github.com/users/Tejs1/followers",
  "following_url": "https://api.github.com/users/Tejs1/following{/other_user}",
  "gists_url": "https://api.github.com/users/Tejs1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Tejs1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Tejs1/subscriptions",
  "organizations_url": "https://api.github.com/users/Tejs1/orgs",
  "repos_url": "https://api.github.com/users/Tejs1/repos",
  "events_url": "https://api.github.com/users/Tejs1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Tejs1/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Tejas Thorat",
  "company": null,
  "blog": "https://www.tejs.me/",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": "tejsrelax",
  "public_repos": 74,
  "public_gists": 1,
  "followers": 19,
  "following": 99,
  "created_at": "2020-07-03T15:29:02Z",
  "updated_at": "2022-10-08T12:09:48Z"
} -->
