<script>
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
  created() {
    // console.log(this.name);
  },
};
</script>
<template>
  <div>{{ name }}</div>
</template>

<style lang="scss" scoped></style>
