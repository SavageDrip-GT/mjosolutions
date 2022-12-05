<template>
  <NuxtLayout>
    <section id="faq" class="min-h-screen py-24 sm:py-36">
      <FadeUp class="container">
        <ContentDoc path="/faq" v-slot="{ doc }">
          <h1 class="text-left mb-6">{{ doc.header }}</h1>
          <div class="columns-1 md:columns-2 gap-6">
            <ContentRenderer :value="doc" class="text-left" />
          </div>
        </ContentDoc>
      </FadeUp>
    </section>
  </NuxtLayout>
</template>
