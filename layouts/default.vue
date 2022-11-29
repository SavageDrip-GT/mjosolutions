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
  title: "MJO Mortgage Solutions",
});
</script>
