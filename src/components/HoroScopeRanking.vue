<script setup>
import { ref, computed } from 'vue'
const title = ref('今日の星座ランキング!!')
const best3 = computed(() => horos.value.slice(0, 3))
const worst3 = computed(() => horos.value.slice(-3))
const horos = ref([
  { name: 'ふたご座', path: '@/assets/images/futago.jpg', rank: 0 },
  { name: 'いて座', path: '@/assets/images/ite.jpg', rank: 0 },
  { name: 'かに座', path: '@/assets/images/kani.jpg', rank: 0 },
  { name: 'みずがめ座', path: '@/assets/images/mizugame.jpg', rank: 0 },
  { name: 'おひつじ座', path: '@/assets/images/ohitsuji.jpg', rank: 0 },
  { name: 'おとめ座', path: '@/assets/images/otome.jpg', rank: 0 },
  { name: 'おうし座', path: '@/assets/images/oushi.jpg', rank: 0 },
  { name: 'さそり座', path: '@/assets/images/sasori.jpg', rank: 0 },
  { name: 'しし座', path: '@/assets/images/shishi.jpg', rank: 0 },
  { name: 'てんびん座', path: '@/assets/images/tenbin.jpg', rank: 0 },
  { name: 'うお座', path: '@/assets/images/uo.jpg', rank: 0 },
  { name: 'やぎ座', path: '@/assets/images/yagi.jpg', rank: 0 }
])

function shuffle() {
  console.log('shuffled!!')
  for (let i = horos.value.length - 1; 0 <= i; i--) {
    const rdm = Math.floor(Math.random() * (i + 1))
    const tmp = horos.value[rdm]
    horos.value[rdm] = horos.value[i]
    horos.value[i] = tmp
  }
  for (let i = 0; i < horos.value.length; i++) {
    horos.value[i].rank = i + 1
  }
}
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
      <h4>ベスト３</h4>
      <div>
        <ul>
          <li v-for="horo in best3" :key="horo.name">
            <img :src="horo.path" width="90" />{{ horo.name }}:{{ horo.rank }}位
          </li>
        </ul>
      </div>
    </div>
    <div id="worst">
      <h4>ワースト３</h4>
      <ul>
        <li v-for="horo in worst3" :key="horo.name">
          <img :src="horo.path" width="90" />{{ horo.name }}:{{ horo.rank }}位
        </li>
      </ul>
    </div>
    <button @click="shuffle">シャッフル</button>
  </div>
</template>

<style scoped>
li {
  display: inline;
}
</style>
