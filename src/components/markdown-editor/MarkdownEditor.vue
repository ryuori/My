<script setup lang="ts">
import { marked } from 'marked'
import { ref, computed } from 'vue'

const input = ref('')
const output = computed(() => marked(input.value))
</script>

<template>
  <div class="editor">
    <textarea class="input" v-model="input"></textarea>
  </div>
  <div class="output" v-html="output"></div>
</template>

<style>
.editor {
  width: 100%;
  display: inline-block;
  vertical-align: top;
}
.input {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid#ccc;
}
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid#ccc;
  background-color: #f9f9f9;
}
</style>
