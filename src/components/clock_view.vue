<script setup>
import { onMounted, ref } from 'vue'

const clock = ref('00:00:00')
const title = ref('現在時刻')

function tick() {
  const date = new Date()
  let h = String(date.getHours()).padStart(2, 0)
  let m = String(date.getMinutes()).padStart(2, 0)
  let s = String(date.getSeconds()).padStart(2, 0)

  clock.value = h + ':' + m + ':' + s
}
onMounted(() => {
  tick()
  setInterval(tick, 1000)
})
</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="time">{{ clock }}</h2>
  </div>
</template>

<style scoped>
.title {
  width: 100%;
  margin: 0px;
  text-align: center;
  font-size: 15px;
}
.time {
  width: 100%;
  margin: 0px;
  text-align: center;
  font-size: 15px;
}
</style>
