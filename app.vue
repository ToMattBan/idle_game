<template>
  <div>
    <h1>Oi</h1>
    <ul>
      <div style="font-weight: 700">Click on a material to gather</div>
      <li
        @click="changeGahter('wood')"
        :class="{ gathering: gatheringNow == 'wood' }"
      >
        Wood - {{ materials.wood }}
      </li>
      <li
        @click="changeGahter('wealth')"
        :class="{ gathering: gatheringNow == 'wealth' }"
      >
        Wealth - {{ materials.wealth }}
      </li>
    </ul>

    <button @click="clickMine()">CLICK HERE TO MINE</button>
    <div class="bar">
      <div class="progressingBar" :style="`width: ${gatheringProgress}%`"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// types
type T_GatheringNow = "wood" | "wealth" | null;

// refs
const gatheringNow = ref<T_GatheringNow>(null);
const gatheringProgress = ref<number>(0);
const gatheringIdleSpeed = ref<number>(1);
const gatheringClickSpeed = ref<number>(10);

// variables
const materials = useMaterialsInventory().materialsInventory;

// functions
const changeGahter = (type: T_GatheringNow) => {
  gatheringNow.value = type;
};
const addWood = (amount: number) => {
  useMaterialsInventory().setWood(materials.value.wood + amount);
};
const addWealth = (amount: number) => {
  useMaterialsInventory().setWealth(materials.value.wealth + amount);
};
const addMaterial = (type: T_GatheringNow, quantity: number) => {
  switch (type) {
    case "wood":
      addWood(quantity);
      break;
    case "wealth":
      addWealth(quantity);
      break;
  }
};

const clickMine = () => {
  if (!gatheringNow.value) return alert("Chose a material first!");

  gatheringProgress.value = gatheringProgress.value + gatheringClickSpeed.value;
};
const idleMine = () => {
  if (!gatheringNow.value) return;

  gatheringProgress.value = gatheringProgress.value + gatheringIdleSpeed.value;
};

// watch/computed
watch(gatheringProgress, async (newValue, oldValue) => {
  if (newValue >= 100) {
    gatheringProgress.value = 0;

    addMaterial(gatheringNow.value, 1);
  }
});

// others
onMounted(() => {
  const idleGather = setInterval(() => {
    idleMine();
  }, 100);
});
</script>

<style lang="scss">
li {
  cursor: pointer;
}

.gathering {
  color: green;
  font-weight: 700;
}

.bar {
  height: 20px;
  width: 400px;
  border: solid 1px black;
  position: relative;

  .progressingBar {
    position: absolute;
    background-color: red;
    height: 100%;
    width: 0;
    max-width: 100%;

    transition: width 0.1s;
  }
}
</style>
