<script setup lang="ts">
import {ref} from "vue";

const searchValue = ref<string>('');
//TODO: Нужно сделать поиск по всем курсам чтобы он был красивенько в шапке
</script>

<template>
  <header class="header">
    <input class="header__search" type="text" v-model="searchValue"/>
    <div class="header__search__button">
      <i class="material-icons">search</i>
    </div>
  </header>
</template>

<style scoped>
.header{
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NotoSansKR;
}

.header__search {
  width: 30%;
  height: 1.7rem;
  padding: .2rem;
  border: 1px solid var(--additional-background);
  background: var(--main-background);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  outline: none;
  color: var(--text-color)
}

.header__search__button {
  color: var(--text-color);
  padding: .2rem;
  background: var(--additional-background);
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
}

.header__search__button:hover {
  color: var(--text-color-hover);
}
</style>