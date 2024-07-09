<script setup lang="ts">
// TODO: На этом шаге начинается создание курса. Здесь происходит: Дается название курса, его краткое описание, загружается изображение которое будет показываться пользователям при выборе курсов

import router from "@/router";
import {CREATE_COURSE_STEP_ONE_FORM} from "@/views/pages/createCourse/stepOne/formStructure.ts";
import FormSelector from "@/components/form/FormSelector.vue";
import Button from "@/components/UI/Button.vue";

function goToNextStep() {
  router.push('/create-course/step-two')
}
</script>

<template>
  <div class="create-course__wrapper">
    <h1>Создание нового курса</h1>
    <FormSelector class="form-selector" :form-structure="CREATE_COURSE_STEP_ONE_FORM"/>
    <Button class="button-create" label="Создать" @button:click="goToNextStep"/>
  </div>
</template>

<style scoped>
.create-course__wrapper {
  color: var(--text-color);
  font-family: NotoSansKR;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.form-selector {
  width: 40%;
}
</style>