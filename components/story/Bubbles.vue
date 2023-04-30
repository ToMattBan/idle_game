<template>
  <article class="message" :class="{ startRight: character == 'char' }">
    <div class="char_picture">
      <img :src="`/chars/${character}.jpeg`" />
    </div>

    <span class="bubble">
      <slot />
    </span>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  character: String,
});
</script>

<style scoped lang="scss">
.message {
  margin: var(--small) 0;
  display: flex;

  &.startRight {
    flex-direction: row-reverse;

    .char_picture {
      margin-right: 0;
      margin-left: var(--small);
    }

    .bubble {
      border-radius: var(--borderRadius) var(--borderRadius) 0
        var(--borderRadius);
    }
  }

  .char_picture {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: var(--small);

    img {
      width: 100%;
    }
  }

  .bubble {
    display: inline-block;
    padding: var(--small);
    background-color: var(--blueDark);
    color: var(--pureWhite);
    border-radius: var(--borderRadius) var(--borderRadius) var(--borderRadius) 0;
  }
}
</style>
