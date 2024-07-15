<script setup>
import { onMounted, ref } from 'vue'
import { loadJson } from '@/components/monster-list/monsterList'

const monsters = ref([])

onMounted(async () => {
  try {
    const data = await loadJson()
    monsters.value = data
  } catch (error) {
    console.log('Error')
  }
})

defineExpose({ monsters })
</script>

<template>
  <div id="app">
    <h1>ドラクエDB</h1>
    <p>Total: {{ total }}</p>
  </div>
  <hr />
  <div>
    <table style="width: 100%">
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
        <th>{{ monster.index }}</th>
        <th>{{ monster.monster }}</th>
        <th>{{ monster.area }}</th>
        <th>{{ monster.atk }}</th>
        <th>{{ monster.def }}</th>
        <th>{{ monster.hp }}</th>
        <th>{{ monster.exp }}</th>
        <th>{{ monster.gold }}</th>
      </tr>
    </table>
  </div>
</template>
