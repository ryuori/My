<script setup>
import { ref } from 'vue'

let id = 0
const monsters = ref([
  { id: id++, text: '竜王', done: false },
  { id: id++, text: '魔王シドー', done: true },
  { id: id++, text: '大魔王ゾーマ', done: false },
  { id: id++, text: 'デスピサロ', done: true }
])
const newMonster = ref('')

function addMonster() {
  monsters.value.push({ id: id++, text: newMonster.value })
  newMonster.value = ''
}
function removeMonster(monster) {
  monsters.value = monsters.value.filter(function (t) {
    return t !== monster
  })
}
</script>

<template>
  <div>
    <div>
      <h1>ToDo</h1>
    </div>
    <div>
      <input type="text" v-model="newMonster" />
      <button @click="addMonster">追加</button>
      <ul v-for="monster in monsters" :key="monster.id">
        <li>
          {{ monster.text }}
          <button @click="removeMonster(monster)">削除</button>
        </li>
      </ul>
    </div>
  </div>
</template>
