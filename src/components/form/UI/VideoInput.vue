<script setup lang="ts">
import {ref, watch} from "vue";

defineProps<{
  id: string
  label: string
}>();

const inputVideoUrl = ref<string>();
const videoSrc = ref<string>();

watch(
    () => inputVideoUrl.value,
    () => updateVideoSrc()
)

function updateVideoSrc():void {
  const match = inputVideoUrl.value.match(/[-\w]{25,}/);
  videoSrc.value = `https://drive.google.com/file/d/${match[0]}/preview?autoplay=1`;
}
// TODO: Нужно исправить ошибку CSP которая не дает воспроизводить видео при добавлении ссылки
</script>

<template>
  <div class="image-input">
    <p>{{label}}</p>
    <input class="url-input" type="text" v-model="inputVideoUrl"/>
    <div class="video-preview">
      <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width="560" height="315" :src="videoSrc"></iframe>
    </div>
  </div>
</template>

<style scoped>
  .url-input {
    width: 100%;
    background: var(--additional-background);
    color: var(--text-color);
    margin-bottom: .5rem;
  }

  .url-input:focus {
    outline: var(--text-color-selected) solid 1px;
  }

  .video-preview {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .preview {
    width: 70%;
    aspect-ratio: 16/9;
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