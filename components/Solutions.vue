<template>
  <h2 class="text-center">We provide lending solutions for:</h2>
  <div class="card-grid-mjo">
    <template
      :data="solutions"
      v-for="solution of solutions"
      :key="solution.slug"
    >
      <div>
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + solution.image + ')' }"
          class="px-2 py-1 bg-no-repeat bg-center bg-contain aspect-video"
        />
        <h2 class="text-base mt-4 mb-0">{{ solution.header }}</h2>
      </div>
    </template>
  </div>
</template>

<script setup>
const { data: solutions } = await useAsyncData("solutions", () =>
  queryContent("/solcards").sort({ date: -1 }).find()
);
</script>
