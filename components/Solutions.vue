<template>
  <h2 class="text-center">We provide lending solutions for:</h2>
  <div class="card-grid-mjo">
    <template
      :data="solutions"
      v-for="solution of solutions"
      :key="solution.slug"
    >
      <div
        bgImage
        :style="{ backgroundImage: 'url(' + solution.image + ')' }"
        class="px-2 py-1 bg-cover bg-center aspect-video flex rounded-mjo"
      >
        <h4>{{ solution.title }}</h4>
      </div>
    </template>
  </div>
</template>

<script setup>
const { data: solutions } = await useAsyncData("solutions", () =>
  queryContent("/solcards").sort({ date: -1 }).find()
);
</script>
