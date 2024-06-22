<script setup>
import { ref } from 'vue'

const title = ref('今日の星座ランキング!!')
const best3 = ref('ベスト３')
const worst3 = ref('ワースト３')
</script>

<template>
  <div>
    <div id="header">
      <h1>Horoscope Ranking</h1>
    </div>
    <div id="main">
      <p>{{ title }}</p>
    </div>
    <div id="best">
      <h4>{{ best3 }}</h4>
    </div>
    <div id="worst">
      <h4>{{ worst3 }}</h4>
    </div>
    <button>シャッフル</button>
  </div>
</template>
