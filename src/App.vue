<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
</script>

<template>
  <h1>適当な勉強</h1>
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/bike">Bike</RouterLink> |
  <RouterLink to="/name">Name</RouterLink> | <RouterLink to="/bmi">BMI</RouterLink> |
  <RouterLink to="/ranking">Horo</RouterLink>
  <RouterView />
</template>
