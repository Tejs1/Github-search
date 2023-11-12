<script>
import Octokit from "../services/Octokit";

export default {
  name: "UserFollowersMutual",
  props: {
    login: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      followersData: [],
    };
  },
  computed: {
    size() {
      return "&s=50";
    },
  },
  created() {
    console.log("this.login");
    Octokit.getUserFollowers(this.login)
      .then((response) => {
        this.followersData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<template>
  <div v-if="followersData" class="wrapper-followers">
    <RouterLink
      v-for="follower in followersData"
      :key="follower.id"
      :to="{
        name: 'UserProfileView',
        params: { username: follower.login },
      }"
      class="avatar-div"
    >
      <img
        :src="follower.avatar_url + size"
        :alt="follower.login"
        height="55"
        width="55"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.wrapper-followers {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
}
.wrapper-followers img {
  padding: 5px;
}
</style>
