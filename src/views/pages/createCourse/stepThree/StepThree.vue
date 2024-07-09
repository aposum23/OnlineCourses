<script setup lang="ts">
// TODO: На этом шаге создания урока происходит добавление тегов для того чтобы в будующем реализовать рекомендации курсов и поиск по тегам, а так же добавляется разная служебная информация по типу: ограничений для просмотра, стоимость курса и т.п.
import {CREATE_COURSE_STEP_THREE_FORM} from "@/views/pages/createCourse/stepThree/formStructure.ts";import Button from "@/components/UI/Button.vue";
import FormSelector from "@/components/form/FormSelector.vue";
import router from "@/router";

function goToStep(step: string): void {
  router.push(`${step}`)
}
</script>

<template>
  <div class="step-three">
    <h1>Добавление служебной информации о курсе</h1>
    <FormSelector :form-structure="CREATE_COURSE_STEP_THREE_FORM" class="form-selector" />
    <div class="steps-control">
      <Button class="button-back" label="Назад" @button:click="goToStep('/create-course/step-two')"/>
      <Button class="button-create" label="Завершить" @button:click="goToStep('/')"/>
    </div>
  </div>
</template>

<style scoped>
.step-three {
  color: var(--text-color);
  font-family: NotoSansKR;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 4rem;
}

.form-selector {
  width: 40%;
  margin-top: 1rem;
}

.steps-control {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100%;
}
</style>