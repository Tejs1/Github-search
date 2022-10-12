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
  <div></div>
</template>

<style lang="scss" scoped></style>
