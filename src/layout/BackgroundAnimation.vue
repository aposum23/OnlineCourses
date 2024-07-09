<script setup lang="ts">

</script>

<template>
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" class="background-animation">
    <!--Сжимающиеся--------------------------------------------------------------------------------------------------------------------------- -->
    <circle class="circle" cx="100" cy="125" r="50">
      <animate
          attributeName="r"
          values="50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="100;300;400;100"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="125;300;50;125"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="100" cy="125" r="50">
      <animate
          attributeName="r"
          values="75;50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="100;300;400;100"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="125;300;50;125"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="100" cy="125" r="50">
      <animate
          attributeName="r"
          values="100;75;50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="100;300;400;100"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="125;300;50;125"
          dur="30s"
          repeatCount="indefinite" />
    </circle>

    <circle class="circle" cx="300" cy="300" r="50">
      <animate
          attributeName="r"
          values="50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="300;400;100;300"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="300;50;125;300"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="300" cy="300" r="50">
      <animate
          attributeName="r"
          values="75;50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="300;400;100;300"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="300;50;125;300"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="300" cy="300" r="50">
      <animate
          attributeName="r"
          values="100;75;50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="300;400;100;300"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="300;50;125;300"
          dur="30s"
          repeatCount="indefinite" />
    </circle>

    <circle class="circle" cx="400" cy="50" r="50">
      <animate
          attributeName="r"
          values="50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="400;100;300;400"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="50;125;300;50"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="400" cy="50" r="50">
      <animate
          attributeName="r"
          values="75;50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="400;100;300;400"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="50;125;300;50"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="400" cy="50" r="50">
      <animate
          attributeName="r"
          values="100;75;50;25;0"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="400;100;300;400"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="50;125;300;50"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <!--Разжимающиеся------------------------------------------------------------------------------------------------------------------------------- -->
    <circle class="circle" cx="100" cy="125" r="50">
      <animate
          attributeName="r"
          values="0;25;50"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="100;300;400;100"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="125;300;50;125"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="100" cy="125" r="50">
      <animate
          attributeName="r"
          values="0;25;50;75"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="100;300;400;100"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="125;300;50;125"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="100" cy="125" r="50">
      <animate
          attributeName="r"
          values="0;25;50;75;100"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="100;300;400;100"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="125;300;50;125"
          dur="30s"
          repeatCount="indefinite" />
    </circle>

    <circle class="circle" cx="300" cy="300" r="50">
      <animate
          attributeName="r"
          values="0;25;50"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="300;400;100;300"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="300;50;125;300"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="300" cy="300" r="50">
      <animate
          attributeName="r"
          values="0;25;50;75"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="300;400;100;300"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="300;50;125;300"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="300" cy="300" r="50">
      <animate
          attributeName="r"
          values="0;25;50;75;100"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="300;400;100;300"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="300;50;125;300"
          dur="30s"
          repeatCount="indefinite" />
    </circle>

    <circle class="circle" cx="400" cy="50" r="50">
      <animate
          attributeName="r"
          values="0;25;50"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="400;100;300;400"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="50;125;300;50"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="400" cy="50" r="50">
      <animate
          attributeName="r"
          values="0;25;50;75"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="400;100;300;400"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="50;125;300;50"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
    <circle class="circle" cx="400" cy="50" r="50">
      <animate
          attributeName="r"
          values="0;25;50;75;100"
          dur="10s"
          repeatCount="indefinite" />
      <animate
          attributeName="cx"
          values="400;100;300;400"
          dur="30s"
          repeatCount="indefinite" />
      <animate
          attributeName="cy"
          values="50;125;300;50"
          dur="30s"
          repeatCount="indefinite" />
    </circle>
  </svg>
</template>

<style scoped>
.background-animation {
  z-index: 1;
  position: fixed;
  opacity: .3;
  left: 15rem;
  top: 0;
}

.circle {
  stroke: var(--additional-background);
  stroke-width: .5;
  fill: none;
}
</style>