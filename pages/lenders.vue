<template>
  <NuxtLayout>
    <section id="faq" class="min-h-screen py-24 sm:py-36">
      <FadeUp class="container grid grid-cols-4 gap-6">
        <div :data="lenders" v-for="lender of lenders" :key="lender.slug">
          <img :src="lender.image" class="w-full mx-auto" />
        </div>
      </FadeUp>
    </section>
  </NuxtLayout>
</template>

<script setup>
const { data: lenders } = await useAsyncData("lenders", () =>
  queryContent("/lenders").sort({ date: -1 }).find()
);
</script>
