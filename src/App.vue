<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>適当な勉強</h1>
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/bike">Bike</RouterLink> |
  <RouterLink to="/name">Name</RouterLink> | <RouterLink to="/bmi">BMI</RouterLink> |
  <RouterLink to="/ranking">Horo</RouterLink> | <RouterLink to="monster">Monster</RouterLink> |
  <RouterLink to="/todo">ToDo</RouterLink> | <RouterLink to="/list">List</RouterLink>
  <RouterView />
</template>

