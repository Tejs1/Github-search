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
  max-width: 1280px;
  width: 100vw;
}
main {
  display: grid;
  grid-template-rows: 50px 1fr;
  max-width: 1280px;
  width: 100vw;
}
</style>
