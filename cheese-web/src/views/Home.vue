<script setup>
import { ref, onMounted } from 'vue';
import { getCheeseList } from "../../api/get_cheese";

import CheeseCard from '../components/CheeseCard.vue';
import PriceCalculator from '../components/PriceCalculator.vue';

const cheeseList = ref([]);
const priceMultiplier = ref("1");

// Fetch cheese list on mount
onMounted(async () => {
  try {
    console.log("Fetching cheese list");
    cheeseList.value = await getCheeseList();
  }
  catch {
    console.error("Failed to fetch cheese list");
  }
});
</script>

<template>
  <div class="wrapper">
    <header class="app-header">
      <div class="app-heading">PZ Cheeseria</div>
      <div class="cheese-calculator">
        <PriceCalculator v-model="priceMultiplier" />
      </div>
    </header>
    <main class="app-main">
      <div class="cheese-content">
        <div v-for="(cheese, index) in cheeseList.cheeses" :key="index">
          <CheeseCard :cheese="cheese" :priceMultiplier="priceMultiplier" />
        </div>
      </div>
    </main>
  </div>
</template>