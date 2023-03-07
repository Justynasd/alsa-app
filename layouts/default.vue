<script lang="ts" setup></script>

<template>
  <div className="container app container page-content">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<style scoped>
/* html {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

body {
  flex-grow: 1;
} */
</style>
