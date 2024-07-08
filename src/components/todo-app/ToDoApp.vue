<script setup>
import { computed, ref } from 'vue'

let id = 1
const done = ref(true)
const appName = ref('Todo Application')
const monsters = ref([
  { id: id++, text: '勉強する', done: true },
  { id: id++, text: 'ゲームする', done: false },
  { id: id++, text: '買い物する', done: true },
  { id: id++, text: 'SEXする', done: false }
])

// 完了/未了ボタンの切り替え処理
function switchTodo() {
  console.log('switchTodos')
  done.value = !done.value
}

function changeDone(id) {
  console.log('changeDoneStatus' + id)
  monsters.value.forEach((monster) => {
    if (monster.id == id) monster.done = !monster.done
  })
}

// 完了/未了に応じてフィルタリングして並び替えるcomputedプロパティ
const getMonsters = computed(() => {
  const arr = monsters.value.filter((monster) => {
    return done.value === monster.done
  })
  arr.sort((a, b) => {
    return a.id - b.id
  })
  return arr
})
</script>

<template>
  <div>
    <h1>{{ appName }}</h1>
    <button @click="switchTodo">完了/未了</button>
  </div>
  <hr />
  <div>
    <div>
      <p v-if="done">完了リスト</p>
      <p v-else>未了リスト</p>
    </div>
    <table style="width: 100%">
      <thead>
        <tr>
          <th style="width: 10%">番号</th>
          <th style="width: 10%">状態</th>
          <th style="width: 60%">内容</th>
          <th style="width: 20%">変更</th>
        </tr>
      </thead>
      <tr v-for="monster in getMonsters" :key="monster.id">
        <td>{{ monster.id }}</td>
        <td v-if="monster.done">完了</td>
        <td v-else>未了</td>
        <td>{{ monster.text }}</td>
        <td><button @click="changeDone(monster.id)">変更</button></td>
      </tr>
    </table>
  </div>
</template>
