<script setup lang="ts">
defineProps<{
  label: string;
  iconName?: string
}>();

const emit = defineEmits<{
  'button:click': []
}>()
</script>

<template>
  <div class="button" @click="() => emit('button:click')">
    <i class="material-icons button_icon" v-if="iconName">{{iconName}}</i>
    <p>{{label}}</p>
  </div>
</template>

<style scoped>
  .button {
    background: var(--additional-background);
    border-radius: 6px;
    padding: .5rem;
    cursor: pointer;
    user-select: none;
    display: flex;
  }

  .button:hover {
    color: var(--text-color-hover);
    outline: var(--text-color-hover) solid 1px;
  }

  .button:active {
    color: var(--text-color-selected);
    outline: var(--text-color-selected) solid 1px;
  }

  .button_icon {
    margin-right: .5rem;
  }

  p {
    margin: 0
  }
</style>