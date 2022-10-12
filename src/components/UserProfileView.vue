<script>
import Octokit from "../services/Octokit";

export default {
  name: "UserProfileView",
  props: {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  // created() {
  //   Octokit.getData().then((res) => console.log(res.data));
  // },
};
</script>
<template>
  <div>{{ name }}</div>
</template>

<style lang="scss" scoped></style>
