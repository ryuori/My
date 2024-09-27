<script setup>
import { onMounted, ref } from 'vue'
import { loadJson } from '@/components/monster-dictionary/monsterDictionary'

const title = ref('モンスター図鑑')
const message = ref('詳細ボタンから詳細を確認することができます')
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
  <div id="app" class="container">
    <div id="title" class="p-3">
      <h1>{{ title }}</h1>
      <p class="mb-3">{{ message }}</p>
    </div>
    <div v-if="Object.keys(selected).length === 0" class="mb-3">
      <table class="table table-striped table-hover">
        <thead class="table-light">
          <tr>
            <th width="1%">No</th>
            <th width="15%">名前</th>
            <th width="5%">詳細</th>
          </tr>
        </thead>
        <tr v-for="monster in monsters" :key="monster.id">
          <td>{{ monster.id }}</td>
          <td>{{ monster.name }}</td>
          <td><button @click="actionSelect(monster.id)" class="btn btn-secondary">詳細</button></td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>名前：{{ selected.name }}</p>
      <p>HP:{{ selected.hp }}</p>
      <p>MP:{{ selected.mp }}</p>
      <p>攻撃力:{{ selected.attack }}</p>
      <p>守備力:{{ selected.defense }}</p>
      <p>通常ドロップ:{{ selected.drop[0] }}</p>
      <p>レアドロップ:{{ selected.drop[1] }}</p>
      <button @click="resetSelect()" class="btn btn-secondary">戻る</button>
    </div>
  </div>
</template>
