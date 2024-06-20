<script setup>
import { ref } from 'vue'

const question = ref('身長と体重を入力してください')
</script>

<template>
  <div class="title">
    <h1>BMI Calcurator</h1>
  </div>
  <div class="body">
    <p>{{ question }}</p>
    <p>計算式:</p>
    <p>BMI値:</p>
  </div>
  <hr />
  <div class="input">
    <p><input type="text" />cm</p>
    <p><input type="text" />kg</p>
    <button>計算</button>
  </div>
</template>
