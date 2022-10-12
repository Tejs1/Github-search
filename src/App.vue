<script>
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper">
    <h1>Github Search</h1>
    <nav>
      <RouterLink :to="{ name: 'HomeView' }"><button>Home</button> </RouterLink>
      <RouterLink :to="{ name: 'AboutView' }">
        <button>About</button>
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 1280px;
}
main {
  display: grid;
  grid-template-rows: 50px 1fr;
}
</style>
