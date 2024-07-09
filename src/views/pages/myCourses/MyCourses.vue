<script setup lang="ts">
import { ref } from 'vue';
import CourseCard from "@/components/card/CourseCard.vue";
import {myCoursesExpStruct} from "@/structures/experementalStructures.ts";
import HeaderSearchComponent from "@/components/headers/HeaderSearchComponent.vue";

const courseList = ref(myCoursesExpStruct)
</script>

<template>
  <div class="my-courses">
    <HeaderSearchComponent/>
    <div class="courses">
      <template v-for="course in courseList">
        <CourseCard v-bind="course" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.my-courses {
  width: 100%;
}

.courses {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-content: start;
  padding-bottom: 2rem;
}
</style>