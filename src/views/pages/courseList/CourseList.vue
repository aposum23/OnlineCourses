<script setup lang="ts">
import { ref } from 'vue';
import CourseCard from "@/components/card/CourseCard.vue";
import {courseListExpStruct} from "@/structures/experementalStructures.ts";
import HeaderSearchComponent from "@/components/headers/HeaderSearchComponent.vue";

const courseList = ref(courseListExpStruct)
</script>

<template>
  <div class="course-list">
    <HeaderSearchComponent/>
    <div class="courses">
      <template v-for="course in courseList">
        <CourseCard v-bind="course" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.course-list {
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