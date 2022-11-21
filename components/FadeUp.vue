<template>
  <div
    x-data
    class="opacity-0 duration-1000"
    x-intersect.threshold.1="$el.classList.add('opacity-100')"
  >
    <slot />
  </div>
</template>
