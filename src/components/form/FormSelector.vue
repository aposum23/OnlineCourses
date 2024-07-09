<script setup lang="ts">
import {FORM_SELECTOR_PROPS, FormElementEnum} from "@/components/form/formSelectorTypes.ts";
import TextInput from "@/components/form/UI/TextInput.vue";
import DescriptionInput from "@/components/form/UI/DescriptionInput.vue";
import ImageInput from "@/components/form/UI/ImageInput.vue";
import VideoInput from "@/components/form/UI/VideoInput.vue";
import NumberInput from "@/components/form/UI/NumberInput.vue";

defineProps<FORM_SELECTOR_PROPS>();

const typeToInputElement = {
  [FormElementEnum.text]: TextInput,
  [FormElementEnum.description]: DescriptionInput,
  [FormElementEnum.img]: ImageInput,
  [FormElementEnum.video]: VideoInput,
  [FormElementEnum.num]: NumberInput
}
</script>

<template>
  <div class="form-selector">
    <template v-for="element in formStructure" :key="element.id">
      <component :is="typeToInputElement[element.type]" :label="element.label" :id="element.id" :max-symbol-count="element.maxSymbolCount" :minimal-value="element.minimalValue"/>
    </template>
  </div>
</template>

<style scoped>
  .form-selector {
    padding: 1rem 0;
  }
</style>