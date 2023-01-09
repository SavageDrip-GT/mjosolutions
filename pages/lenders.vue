<template>
  <NuxtLayout>
    <section id="faq" class="min-h-screen py-24 sm:py-36">
      <FadeUp class="container">
        <h2 class="text-primary text-center">
          Why talk to 40 different banks when you can talk to the team at MJO
          Mortgage Solutions.
        </h2>
        <h4 class="mb-8 text-center text-white">
          Let us do the talking and find the right bank for you.
        </h4>
        <div
          class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3"
        >
          <div
            :data="lenders"
            v-for="lender of lenders"
            :key="lender.slug"
            class="flex justify-center rounded-mjo h-full p-4 bg-white border border-primary"
          >
            <img :src="lender.image" class="w-full h-auto m-auto" />
          </div>
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
