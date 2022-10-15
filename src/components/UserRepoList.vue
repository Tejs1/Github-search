<script>
import UserRepo from "../components/UserRepo.vue";
export default {
  name: "UserRepoList",
  components: {
    UserRepo,
  },
};
</script>
<template>
  <div class="repo-container">
    <UserRepo />
    <UserRepo />
    <UserRepo />
    <UserRepo />
    <UserRepo />
    <UserRepo />
  </div>
</template>

<style lang="css" scoped>
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
