<script setup lang="ts">
import {computed, ref} from "vue";

defineProps<{
  id: string
  label: string
  maxSymbolCount
}>();

const inputValue = ref<string>();
const textLength = computed(() => inputValue.value?.length || 0)
</script>

<template>
  <div class="description-input">
    <p>{{label}}</p>
    <textarea type="text" multiple v-model="inputValue"/>
    <p class="symbol-counter" v-if="maxSymbolCount" :style="textLength> maxSymbolCount && 'color: var(--text-color-hover)'">{{`${textLength}/${maxSymbolCount}`}}</p>
  </div>
</template>

<style scoped>
  p {
    margin: .5rem;
  }

  textarea {
    background: var(--additional-background);
    border-radius: 6px;
    padding: .3rem;
    color: var(--text-color);
    width: 100%;
    height: 10rem;
    resize: none;
  }

  textarea:focus {
    outline: var(--text-color-selected) solid 1px;
  }

  .symbol-counter {
    text-align: end;
  }
</style>