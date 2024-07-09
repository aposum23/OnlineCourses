<script setup lang="ts">
import SideMenu from "@/layout/SideMenu.vue";
import BackgroundAnimation from "@/layout/BackgroundAnimation.vue";
</script>

<template>
  <div class="wrapper">
    <SideMenu class="side-menu"/>
    <main class="main-content">
      <router-view v-slot="{Component, route}">
        <transition :name="route.meta.transition" mode="out-in">
          <component :is="Component" :key="route.name"/>
        </transition>
      </router-view>
    </main>
    <BackgroundAnimation/>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  position: fixed;
}

.side-menu {
  z-index: 99;
}

.main-content {
  height: 100vh;
  width: calc(100vw - 15rem);
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: scroll;
  scrollbar-width: thin;
  align-items: start;
  scrollbar-color: var(--additional-background) var(--main-background);
  z-index: 99;
}

@media(max-width: 500px) {
  .main-content {
    padding: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
