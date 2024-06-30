<script setup>
import { onMounted, ref } from 'vue'
import { loadJson } from '@/components/monster-dictionary/monsterDictionary'

const title = ref('モンスター図鑑')
const message = ref('ボタンから詳細を確認することができます')
// モンスターのデータを取得
const monsters = ref([])
const selected = ref({})

onMounted(async () => {
  try {
    const data = await loadJson()
    monsters.value = data
  } catch (error) {
    console.log('Error')
  }
})

function actionSelect(id) {
  console.log('selected')
  selected.value = monsters.value.find((monster) => monster.id == id)
}

function resetSelect() {
  selected.value = {}
  console.log('reset')
}

defineExpose({ monsters, selected })
</script>

<template>
  <div id="app">
    <div id="title">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
    <div v-if="Object.keys(selected).length === 0">
      <table>
        <thead>
          <tr>
            <th width="5%">No</th>
            <th width="10%">名前</th>
            <th width="10%">HP</th>
            <th width="10%">MP</th>
            <th width="10%">攻撃力</th>
            <th width="10%">守備力</th>
            <th width="10%">詳細</th>
          </tr>
        </thead>
        <tr v-for="monster in monsters" :key="monster.id">
          <td>{{ monster.id }}</td>
          <td>{{ monster.name }}</td>
          <td>{{ monster.hp }}</td>
          <td>{{ monster.mp }}</td>
          <td>{{ monster.attack }}</td>
          <td>{{ monster.defense }}</td>
          <td><button @click="actionSelect(monster.id)">詳細</button></td>
        </tr>
      </table>
    </div>
    <div v-else>
      名前：{{ selected.name }}<br />
      HP:{{ selected.hp }}<br />
      MP:{{ selected.mp }}<br />
      攻撃力:{{ selected.attack }}<br />
      守備力:{{ selected.defense }}<br />
      <button @click="resetSelect()">戻る</button>
    </div>
  </div>
</template>
