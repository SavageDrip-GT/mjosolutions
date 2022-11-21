<template>
  <div>
    <HeadDef />
    <Header />
    <slot />
    <FooterHouse />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: "About Us - Fred St.",
});
</script>
