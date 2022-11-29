<template>
  <NuxtLayout>
    <section id="faq" class="min-h-screen py-24 sm:py-36">
      <FadeUp class="container">
        <ContentDoc path="/faq" v-slot="{ doc }">
          <h1 class="text-center">{{ doc.header }}</h1>
          <h3>{{ doc.subhead }}</h3>
          <ContentRenderer :value="doc" class="text-center" />
        </ContentDoc>
      </FadeUp>
    </section>
  </NuxtLayout>
</template>
