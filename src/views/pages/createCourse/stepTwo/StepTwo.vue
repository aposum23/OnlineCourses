<script setup lang="ts">
// TODO: На этом шаге происходит добавление страниц курсов - одна страница: видео урок, текст видеоурока, название урока
import {ref} from "vue";
import {CREATE_COURSE_STEP_TWO_FORM} from "@/views/pages/createCourse/stepTwo/formStructure.ts";
import Button from "@/components/UI/Button.vue";
import FormSelector from "@/components/form/FormSelector.vue";
import router from "@/router";

type CoursePage = {
  id: number;
  data: {[K:string]: any};
}

const coursePagesList = ref<CoursePage[]>([
  {
    id: 0,
    data: {}
  }
]);

function addNewPageInList(): void {
  coursePagesList.value.push({
    id: coursePagesList.value.length,
    data: {}
  })
}

function goToStep(step: string): void {
  router.push(`/create-course/${step}`)
}
</script>

<template>
  <div class="step-two">
    <h1>Добавление страниц уроков курса</h1>
    <template v-for="page in coursePagesList" :key="page.id">
      <div class="form-selector-wrapper">
        <FormSelector :form-structure="CREATE_COURSE_STEP_TWO_FORM" class="form-selector" />
        <p>Страница {{page.id + 1}}</p>
      </div>
    </template>
    <Button label="Добавить страницу" icon-name="add" class="add-page" @button:click="addNewPageInList"/>
    <div class="steps-control">
      <Button class="button-back" label="Назад" @button:click="goToStep('step-one')"/>
      <Button class="button-create" label="Далее" @button:click="goToStep('step-three')"/>
    </div>
  </div>
</template>

<style scoped>
.step-two {
  color: var(--text-color);
  font-family: NotoSansKR;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 4rem;
}

@keyframes slide-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.form-selector-wrapper {
  width: 40%;
  animation: slide-left 0.2s ease-in;
}

.form-selector {
  outline: var(--additional-background) solid 1px;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
}

.add-page {
  margin: 2rem 0;
}

.steps-control {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100%;
}
</style>