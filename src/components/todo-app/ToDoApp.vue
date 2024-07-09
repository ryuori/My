<script setup>
import { computed, ref } from 'vue'

let id = 1
const done = ref(true)
const appName = ref('Todo Application')
const monsters = ref([
  { id: id++, text: '勉強する', done: true, edit: false },
  { id: id++, text: 'ゲームする', done: false, edit: false },
  { id: id++, text: '買い物する', done: true, edit: false },
  { id: id++, text: '仕事', done: false, edit: false }
])

// 完了/未了ボタンの切り替え処理
function switchTodo() {
  console.log('switchTodos')
  done.value = !done.value
}

// TODOリストの要素を変更する
function changeDone(id) {
  console.log('changeDoneStatus' + id)
  monsters.value.forEach((monster) => {
    if (monster.id == id) monster.done = !monster.done
  })
}

// TODOリストの要素を削除する
function deleteMonster(id) {
  console.log('deleteMonster' + id)
  monsters.value = monsters.value.filter((monster) => {
    return monster.id != id
  })
}

// TODOリストの要素を編集する
function editMonster(id) {
  console.log('編集中' + id)
  monsters.value.forEach((monster) => {
    if (monster.id === id) monster.edit = true
    else monster.edit = false
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
          <th style="width: 40%">内容</th>
          <th style="width: 10%">変更</th>
          <th style="width: 10%">削除</th>
          <th style="width: 10%">編集</th>
        </tr>
      </thead>
      <tr v-for="monster in getMonsters" :key="monster.id">
        <td>{{ monster.id }}</td>
        <td>{{ monster.done ? '完了' : '未了' }}</td>
        <td>
          <span v-if="!monster.edit">{{ monster.text }}</span>
          <input v-else v-model="monster.text" />
        </td>
        <td><button @click="changeDone(monster.id)">変更</button></td>
        <td><button @click="deleteMonster(monster.id)">削除</button></td>
        <td><button @click="editMonster(monster.id)">編集</button></td>
      </tr>
    </table>
  </div>
</template>
