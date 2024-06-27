<script setup>
import { ref, computed } from 'vue'
const title = ref('今日の星座ランキング!!')
const best3 = computed(() => horos.value.slice(0, 6))
const worst3 = computed(() => horos.value.slice(-6))
const horos = ref([
  { name: 'ふたご座', path: '../../public/images/futago.jpg', rank: 0 },
  { name: 'いて座', path: '../../public/images/ite.jpg', rank: 0 },
  { name: 'かに座', path: '../../public/images/kani.jpg', rank: 0 },
  { name: 'みずがめ座', path: '../../public/images/mizugame.jpg', rank: 0 },
  { name: 'おひつじ座', path: '../../public/images/ohitsuji.jpg', rank: 0 },
  { name: 'おとめ座', path: '../../public/images/otome.jpg', rank: 0 },
  { name: 'おうし座', path: '../../public/images/oushi.jpg', rank: 0 },
  { name: 'さそり座', path: '../../public/images/sasori.jpg', rank: 0 },
  { name: 'しし座', path: '../../public/images/shishi.jpg', rank: 0 },
  { name: 'てんびん座', path: '../../public/images/tenbin.jpg', rank: 0 },
  { name: 'うお座', path: '../../public/images/uo.jpg', rank: 0 },
  { name: 'やぎ座', path: '../../public/images/yagi.jpg', rank: 0 }
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
  <div class="p-3 text-center">
    <div id="header" class="mb-3">
      <h1>星座ランキング</h1>
    </div>
    <div id="main">
      <p>{{ title }}</p>
    </div>
    <div id="best">
      <h4 class="mb-3 bg-success">ベスト３</h4>
      <div class="mb-3">
        <ul>
          <li v-for="horo in best3" :key="horo.name">
            <img :src="horo.path" alt="" width="100" />
            <p>{{ horo.name }}:{{ horo.rank }}位</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="worst">
      <h4 class="mb-3 bg-danger">ワースト３</h4>
      <div class="mb-3">
        <ul>
          <li v-for="horo in worst3" :key="horo.name">
            <img :src="horo.path" alt="" width="100" />
            <p>{{ horo.name }}:{{ horo.rank }}位</p>
          </li>
        </ul>
      </div>
    </div>
    <button @click="shuffle" class="btn btn-primary">占う</button>
  </div>
</template>

<style scoped>
li {
  display: block;
}
</style>
