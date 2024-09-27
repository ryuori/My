<script setup>
import { computed, onMounted, ref } from 'vue'

let id = 1
const done = ref(false)
const newMonster = ref('')
const appName = ref('Todo Application')
const monsters = ref([
  { id: id++, text: '勉強する', done: true, edit: false },
  { id: id++, text: 'ゲームする', done: false, edit: false },
  { id: id++, text: '買い物する', done: true, edit: false },
  { id: id++, text: 'SEXする', done: false, edit: false }
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
  saveMonsters()
}

// TODOリストの要素を削除する
function deleteMonster(id) {
  console.log('deleteMonster' + id)
  monsters.value = monsters.value.filter((monster) => {
    return monster.id != id
  })
  saveMonsters()
}

// TODOリストの要素を編集する
function editMonster(id) {
  console.log('編集中' + id)
  monsters.value.forEach((monster) => {
    if (monster.id === id) monster.edit = true
    else monster.edit = false
  })
  monsters.value.forEach((monster) => {
    if (monster.id !== id) {
      monster.edit = false
    }
  })
  saveMonsters()
}

// TODOリストの要素に追加する
function insertMonster() {
  console.log('追加')
  if (newMonster.value.length > 0) {
    monsters.value.push({
      id: id++,
      text: newMonster.value,
      done: false,
      edit: false
    })
    newMonster.value = ''
    saveMonsters()
  }
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

// TODOリストにlocalStorageを読込む
function loadMonsters() {
  console.log('loadMonsters')
  const json = localStorage.getItem('monsters')
  if (json != null) {
    monsters.value = JSON.parse(json)
  }
}

// localStorageにmonstersを読込む
function saveMonsters() {
  console.log('saveMonsters')
  const json = JSON.stringify(monsters.value)
  localStorage.setItem('monsters', json)
}

onMounted(loadMonsters)
</script>

<template>
  <div>
    <h1>{{ appName }}</h1>
    <button @click="switchTodo">完了/未了</button>
  </div>
  <hr />
  <div>
    <thead>
      <tr>
        <th style="width: 10%">内容</th>
        <th style="width: 10%">追加</th>
      </tr>
      <tr>
        <td><input v-model="newMonster" /></td>
        <td><button @click="insertMonster">追加</button></td>
      </tr>
    </thead>
  </div>
  <hr />
  <div>
    <div>
      <p v-if="done">完了リスト</p>
      <p v-else>未了リスト</p>
    </div>
    <table style="width: 100%" class="table table-striped table-hover">
      <thead class="table-light">
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
        <td><button @click="changeDone(monster.id)" class="btn btn-primary">変更</button></td>
        <td><button @click="deleteMonster(monster.id)" class="btn btn-danger">削除</button></td>
        <td><button @click="editMonster(monster.id)" class="btn btn-secondary">編集</button></td>
      </tr>
    </table>
  </div>
</template>
