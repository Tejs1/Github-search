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
    return { followersData: [] };
  },
  created() {
    Octokit.getUserFollowers(this.login)
      .then((response) => {
        this.followersData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    size() {
      return "&s=50";
    },
    followersId() {
      return this.followersData.map((follower) => follower.login);
    },
  },
};
</script>
<template>
  <div class="wrapper-followers">
    <img
      v-if="followersData"
      v-for="follower in followersData"
      :key="follower.id"
      :src="follower.avatar_url + size"
      :alt="follower.login"
      height="55"
      width="55"
    />
  </div>
</template>

<style scoped>
.wrapper-followers {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 1rem;
}
.wrapper-followers img {
  padding: 5px;
}
</style>
