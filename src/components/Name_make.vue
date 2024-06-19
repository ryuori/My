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
  <div id="app">
    <p class="n-title">{{ titleName }}</p>
    <p class="n-body">{{ resName }}</p>
    <p class="n-name">{{ name }}</p>
    <p class="n-desu">です！！</p>
    <button @click="changeCharacter">あだ名を決める</button>
  </div>
</template>
