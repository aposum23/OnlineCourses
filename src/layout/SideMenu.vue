<script setup lang="ts">
import {menuElements} from "@/structures/SideMenuElements.ts";
import router from "@/router";
import {useRoute} from "vue-router";

const route = useRoute();

function changePage(routePath: string) {
  router.push(routePath);
}
</script>

<template>
  <div class="side-menu__wrapper">
    <h1 @click="() => router.push('/')">Курс.ру</h1>
    <div style="border-top: 1px solid var(--main-background)">
      <template v-for="element in menuElements" :key="element.id">
        <div class="side-menu__item-wrapper" :style="(route.path.includes(element.id) || route.name === element.id) && 'color: var(--text-color-selected)'" @click="changePage(element.routePath)">
          <i class="material-icons side-menu__icon">{{element.iconName}}</i>
          <p class="side-menu__item">{{element.label}}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.side-menu__wrapper {
  width: 15rem;
  height: 100vh;
  background: var(--additional-background);
  color: var(--text-color);
}

h1 {
  font-family: SourceCodePro;
  cursor: pointer;
  user-select: none;
  margin: 2rem;
  text-align: center;
}

.side-menu__item-wrapper {
  font-family: NotoSansKR;
  display: flex;
  align-items: center;
  padding-left: .5em;
  cursor: pointer;
}

.side-menu__item-wrapper:hover {
  color: var(--text-color-hover);
}

.side-menu__icon {
  vertical-align: middle;
  margin-right: 1em;
}
</style>