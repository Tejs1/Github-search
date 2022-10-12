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
    console.log(this.username);
    // Octokit.getUserRepo().then((res) => console.log(res.data));
  },
};
</script>
<template>
  <div>{{ userData }}</div>
</template>

<style lang="scss" scoped></style>
