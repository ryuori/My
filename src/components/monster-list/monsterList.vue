<script setup>
import { onMounted, ref } from 'vue'
import { loadJson } from '@/components/monster-list/monsterList'

const monsters = ref([])
const total = ref('')
const results = ref('')
const m_area = ref('')
const f_area = ref('')

onMounted(async () => {
  try {
    const data = await loadJson()
    monsters.value = data
    total.value = data.length
  } catch (error) {
    console.log('Error')
  }
})

function sortGold(num) {
  monsters.value.sort((a, b) => {
    if (a.gold.length <= 0 || b.gold.length <= 0) {
      return 0
    }
    return (Number(a.gold) - Number(b.gold)) * num
  })
}

function reset() {
  reset.value = monsters
  f_area.value = ''
}

defineExpose({ monsters })
</script>

<template>
  <div id="app">
    <h1>ドラクエDB</h1>
  </div>
  <div>
    <span>Total: {{ total }}</span>
    <p>GOLD</p>
    <button @click="sortGold(-1)">高い順</button>
    <span> or </span>
    <button @click="sortGold(1)">安い順</button>
    <span> : </span>
    <button @click="reset()">Reset</button>
    <span> : </span>
    <select name="" id="">
      <option value=""></option>
      <option value=""></option>
    </select>
  </div>
  <hr />
  <div>
    <table>
      <tr>
        <th>No</th>
        <th>モンスター名</th>
        <th>出現場所</th>
        <th>攻撃力</th>
        <th>守備力</th>
        <th>HP</th>
        <th>経験値</th>
        <th>GOLD</th>
      </tr>
      <tr v-for="monster in monsters" :key="monster.index">
        <td>{{ monster.index }}</td>
        <td>{{ monster.monster }}</td>
        <td>{{ monster.area }}</td>
        <td>{{ monster.atk }}</td>
        <td>{{ monster.def }}</td>
        <td>{{ monster.hp }}</td>
        <td>{{ monster.exp }}</td>
        <td>{{ monster.gold }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
table {
  background-color: gray;
  width: 100%;
  font-size: 0.8em;
}
th,
td {
  background-color: lightgrey;
}
</style>
