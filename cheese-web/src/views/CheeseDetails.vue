<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { getCheeseList } from "../../api/get_cheese";

const route = useRoute();

const cheese = ref({});

async function getCheese() {
  const { cheeses } = await getCheeseList();
  console.log(cheeses.find((cheese) => cheese.id === parseInt(route.params.id)));
  return cheeses.find((cheese) => cheese.id === parseInt(route.params.id));
}

// Fetch cheese list on mount
onBeforeMount(async () => {
  try {
    cheese.value = await getCheese();
  } catch {
    console.error("Failed to fetch cheese list");
  }
});
</script>

<template>
  {{ cheese.name }}
</template>
