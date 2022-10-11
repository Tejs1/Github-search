<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="wrapper">
    <h1>Github Search</h1>
    <nav>
      <RouterLink to="/"><button>Home</button> </RouterLink>
      <RouterLink to="/about"> <button>About</button> </RouterLink>
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
  width: 100vw;
}
</style>
