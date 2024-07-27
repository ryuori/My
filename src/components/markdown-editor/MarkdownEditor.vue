<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import { ref, computed } from 'vue'

const input = ref('こんにちは')
const output = computed(() => marked(input.value))
const update = debounce((e) => {
  input.value = e.target.value
}, 100)
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"></textarea>
  </div>
  <div class="output" v-html="output"></div>
</template>
