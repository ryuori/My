<script setup>
import { ref } from 'vue'

const title = ref('モンスター図鑑')
const message = ref('ボタンから詳細を確認することができます')
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
</script>

<template>
  <div id="app">
    <div id="title">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
    <div id="main">
      <table>
        <thead>
          <tr>
            <th width="5%">番号</th>
            <th width="10%">名前</th>
            <th width="10%">HP</th>
            <th width="10%">MP</th>
            <th width="10%">攻撃力</th>
            <th width="10%">守備力</th>
            <th width="10%">詳細</th>
          </tr>
        </thead>
      </table>
    </div>
    <div>
      <button>戻る</button><br />
      <p>名前</p>
      <img src="" alt="" />
      <p>HP</p>
      <p>MP</p>
      <p>攻撃力</p>
      <p>守備力</p>
    </div>
  </div>
</template>
