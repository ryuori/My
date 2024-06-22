<script setup>
import { ref } from 'vue'

const titleName = ref('ニックネームメイカー')
const resName = ref('あなたのあだ名は？？？？')
const name = ref('')
const yourName = ref(['スライム', 'スライムベス', 'メタルスライム', 'メタルキング', '竜王'])

function changeCharacter() {
  const randomIndex = Math.floor(Math.random() * yourName.value.length)
  name.value = yourName.value[randomIndex]
}
</script>

<template>
  <div>
    <p class="n-title">{{ titleName }}</p>
    <p class="n-line1">{{ resName }}</p>
    <p class="n-line2">{{ name }}</p>
    <p class="n-line3">です！！</p>
  </div>
  <button @click="changeCharacter" class="btn btn-primary">あだ名を決める</button>
</template>

<style scoped>
.n-title {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 30px 0px;
  background-color: silver;
  font-size: 2em;
  text-align: center;
}
.n-line1 {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 120px 0px 10px 0px;
  background-color: lightgrey;
  font-size: 2em;
  text-align: center;
}
.n-line2 {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  background-color: lightgrey;
  font-size: 6em;
  text-align: center;
  color: crimson;
}
.n-line3 {
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  background-color: lightgrey;
  font-size: 2em;
  text-align: center;
}
</style>
