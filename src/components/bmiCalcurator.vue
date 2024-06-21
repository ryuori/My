<script setup>
import { ref } from 'vue'

const question = ref('身長と体重を入力してください')
const cm = ref()
const kg = ref()
let bmi = ref(0)

function calc() {
  bmi.value = kg.value / (cm.value * 0.01) ** 2
}
</script>

<template>
  <div class="title">
    <h1>BMI Calcurator</h1>
  </div>
  <div class="body">
    <p>{{ question }}</p>
    <p>計算式:{{ kg }}/({{ cm }}*0.01)^2</p>
    <p>BMI値:{{ bmi }}</p>
  </div>
  <hr />
  <div class="input">
    <p><input type="text" v-model="cm" />cm</p>
    <p><input type="text" v-model="kg" />kg</p>
    <button @click="calc">計算</button>
  </div>
  <hr />
</template>
