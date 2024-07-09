<script setup lang="ts">
import {computed, onBeforeUnmount, ref} from "vue";

defineProps<{
  id: string
  label: string
}>();

const inputFile = ref<File>();
const imageUrl = ref<URL>();

function handleFileLoading(e) {
  if (e.target.files[0]) {
    imageUrl.value && URL.revokeObjectURL(imageUrl.value)
    inputFile.value = e.target.files[0];
    imageUrl.value = URL.createObjectURL(inputFile.value);
  }
  else {
    console.warn('There is no files :(');
  }
}

onBeforeUnmount(() => {
  if (inputFile.value){
    URL.revokeObjectURL(inputFile.value);
  }
})

</script>

<template>
  <div class="image-input">
    <p>{{label}}</p>
    <input type="file" accept=".png" @change="handleFileLoading"/>
    <div class="image-preview">
      <img v-if="imageUrl" :src="imageUrl" class="preview"/>
    </div>
  </div>
</template>

<style scoped>
  .image-input {
    width: 100%;
    aspect-ratio: 2/1;
  }

  .image-preview {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .preview {
    width: 70%;
    aspect-ratio: 15/19;
  }

  p {
    margin: .5rem;
  }

  input {
    border-radius: 6px;
    padding: .3rem;
    width: 100%;
  }

  textarea:focus {
    outline: var(--text-color-selected) solid 1px;
  }
</style>