<script setup>
import { ref } from 'vue'

let id = 0
const monsters = ref([
  { id: id++, text: '竜王', done: false },
  { id: id++, text: '魔王シドー', done: false },
  { id: id++, text: '大魔王ゾーマ', done: false },
  { id: id++, text: 'デスピサロ', done: false }
])
const newMonster = ref('')

function addMonster() {
  monsters.value.push({ id: id++, text: newMonster.value, done: false })
  newMonster.value = ''
}
function removeMonster(monster) {
  monster.done = !monster.done
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
      <tr v-for="monster in monsters" :key="monster.id">
        <td>
          {{ monster.text }}
          <button @click="removeMonster(monster)">完了</button>
        </td>
      </tr>
    </div>
    <hr />
    <button>討伐リスト</button>
    <div>
      <p></p>
      <tr v-for="monster in monsters" :key="monster.id">
        <td v-if="monster.done">{{ monster.text }}</td>
      </tr>
    </div>
  </div>
</template>
