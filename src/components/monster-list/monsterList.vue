<script setup lang="ts">
import MonsterList from '@/components/monster-list/monsterList'
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
      <tr>
        <th>1</th>
        <th>スライム</th>
        <th>ラダトーム_ロトの洞窟</th>
        <th>5</th>
        <th>3</th>
        <th>10</th>
        <th>1</th>
        <th>3</th>
      </tr>
    </table>
  </div>
</template>
