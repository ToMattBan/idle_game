<template>
  <main>
    <div class="chat_frame">
      <section class="chat">
        <StoryBubbles
          v-for="storyPart in story"
          :character="storyPart.character"
        >
          {{ storyPart.message }}
        </StoryBubbles>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const names = useNames();

const story = [
  {
    character: "char",
    message: `Nem parece que já fazem três anos desde que saímos de ${names.kingdom}.`,
  },
  {
    character: "old_man",
    message: `O tempo passa mais rápido quando se está ocupado, não é mesmo?`,
  },
  {
    character: "old_man",
    message: `E você esteve bem ocupado recentemente ${names.char}.`,
  },
  {
    character: "char",
    message: `É, não foi fácil conseguir acabar com esses piratas imundos. Não só sabem navegar como deuses da água mas também sabem se enfiar fundo nessas florestas.`,
  },
  {
    character: "char",
    message: `Eu nunca vou perdoar eles por terem afundado o meu navio, dado de presente pelo Rei. Agora nem temos como voltar para casa.`,
  },
  {
    character: "old_man",
    message: `Vamos ter que construir um novo navio.`,
  },
  {
    character: "char",
    message: `Eu nem sei por onde começar!`,
  },
  {
    character: "old_man",
    message: `Por sorte eu fui um carpinteiro quando mais novo, vamos conseguir. Mas eu vou precisar de madeira, muita madeira. Pode buscar para mim? Tem um grande bosque aqui perto.`,
  },
];
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
  aspect-ratio: 7/8;
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
