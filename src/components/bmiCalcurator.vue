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
  <div class="container mt-5">
    <div class="title">
      <h1>BMI Calcurator</h1>
    </div>
    <div class="body">
      <p>{{ question }}</p>
      <p>身長:{{ cm }}cm</p>
      <p>体重:{{ kg }}kg</p>
      <p>BMI値:{{ bmi }}</p>
    </div>
    <hr />
    <div class="input">
      <div class="mb-3">
        <label for="heightInput" class="form-label">身長(cm)</label>
        <p><input type="text" class="form-control" v-model="cm" />cm</p>
      </div>
      <div class="mb-3">
        <label for="weighttInput" class="form-label">体重(kg)</label>
        <p><input type="text" class="form-control" v-model="kg" />kg</p>
      </div>
      <button @click="calc" class="btn btn-primary">計算</button>
    </div>
    <hr />
    <div class="result">
      <p v-if="bmi <= 0">-</p>
      <p v-if="bmi > 0 && bmi < 18.5" class="p-3 mb-2 bg-success text-white">やせ</p>
      <p v-if="bmi > 18.5 && bmi < 25" class="p-3 mb-2 bg-primary text-white">標準</p>
      <p v-if="bmi > 25" class="p-3 mb-2 bg-danger text-white">肥満</p>
    </div>
  </div>
</template>
