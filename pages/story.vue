<template>
  <main>
    <div class="chat_frame">
      <section class="chat">
        <StoryBubbles character="char">
          Nem parece que já fazem três anos desde que saímos de
          {{ names.kingdom }}
        </StoryBubbles>

        <StoryBubbles character="old_man">
          O tempo passa mais rápido quando se está ocupado, não é mesmo?
        </StoryBubbles>

        <StoryBubbles character="old_man">
          E você esteve bem ocupado recentemente {{ names.char }}.
        </StoryBubbles>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const names = useNames();
</script>

<style lang="scss" scoped>
main {
  background-color: var(--grayDark);
  height: 100vh;
  display: flex;
}

.chat_frame {
  background-color: var(--grayLight);
  border-radius: var(--borderRadius);
  height: calc(90vh - var(--small));
  aspect-ratio: 4/5;
  min-height: 500px;
  margin: auto;
  padding: var(--small);
  position: relative;

  .chat {
    position: absolute;
    bottom: var(--small);
    width: calc(100% - (var(--small) * 2));
  }
}
</style>
