<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink> <br />
  <RouterLink to="/name">Name</RouterLink> <br />
  <RouterLink to="/bmi">BMI</RouterLink> <br />
  <RouterLink to="/ranking">Horo</RouterLink> <br />
  <RouterLink to="monster">Monster</RouterLink> <br />
  <RouterLink to="/todo">ToDo</RouterLink> <br />
  <RouterLink to="/list">List</RouterLink>
  <RouterView />
</template>

