<script setup>
import { ref } from 'vue'
const title = ref('今日の星座ランキング!!')
const best3 = ref([])
const worst3 = ref([])
const horos = ref([
  { name: 'ふたご座', path: '@/assets/images/futago.png', rank: 0 },
  { name: 'いて座', path: '@/assets/images/ite.png', rank: 0 },
  { name: 'かに座', path: '@/assets/images/kani.png', rank: 0 },
  { name: 'みずがめ座', path: '@/assets/images/mizugame.png', rank: 0 },
  { name: 'おひつじ座', path: '@/assets/images/ohitsuji.png', rank: 0 },
  { name: 'おとめ座', path: '@/assets/images/otome.png', rank: 0 },
  { name: 'おうし座', path: '@/assets/images/oushi.png', rank: 0 },
  { name: 'さそり座', path: '@/assets/images/sasori.png', rank: 0 },
  { name: 'しし座', path: '@/assets/images/shishi.png', rank: 0 },
  { name: 'てんびん座', path: '@/assets/images/tenbin.png', rank: 0 },
  { name: 'うお座', path: '@/assets/images/uo.png', rank: 0 },
  { name: 'やぎ座', path: '@/assets/images/yagi.png', rank: 0 }
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

function generateRanking() {
  shuffle()
  const top3 = horos.value.slice(0, 3)
  const bottom3 = horos.value.slice(-3)

  best3.value = top3.map((horo) => ({ ...horo }))
  worst3.value = bottom3.map((horo) => ({ ...horo }))
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
    <button @click="generateRanking">シャッフル</button>
  </div>
</template>
