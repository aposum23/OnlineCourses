<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  id: string
  label: string,
  minimalValue?: number
}>();

const inputValue = ref<string>();
</script>

<template>
  <div class="text-input">
    <p>{{label}}</p>
    <input type="number" v-model="inputValue" :min="minimalValue"/>
  </div>
</template>

<style scoped>
  p {
    margin: .5rem;
  }

  input {
    background: var(--additional-background);
    border-radius: 6px;
    padding: .3rem;
    color: var(--text-color);
    width: 100%;
  }

  input:focus {
    outline: var(--text-color-selected) solid 1px;
  }
</style>