<script setup>
import { ref } from 'vue'

import MonseterDictionary from '@/components/monster-dictionary/monsterDictionary'

const title = ref('モンスター図鑑')
const message = ref('ボタンから詳細を確認することができます')
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
