<script setup>
import { RouterLink } from "vue-router";
import { ref, onBeforeMount } from "vue";
import { getCheeseList } from "../../api/get_cheese";

import CheeseCard from "../components/CheeseCard.vue";
import PriceCalculator from "../components/PriceCalculator.vue";

const cheeseList = ref([]);
const priceMultiplier = ref("1");

// Fetch cheese list before mount
onBeforeMount(async () => {
  try {
    console.log("Fetching cheese list");
    cheeseList.value = await getCheeseList();
  } catch {
    console.error("Failed to fetch cheese list");
  }
});
</script>

<template>
  <div class="wrapper">
    <header class="app-header">
      <div class="app-heading">PZ Cheeseria</div>
      <div class="cheese-calculator">
        <div class="price-calculator-label">Weight (kg)</div>
        <PriceCalculator v-model="priceMultiplier" />
      </div>
    </header>
    <main class="app-main">
      <div class="cheese-content">
        <!-- Generates a list of cheese cards -->
        <div v-for="(cheese, index) in cheeseList.cheeses" :key="index">
          <RouterLink style="text-decoration: none;" :to="{ path: '/cheese/' + cheese.id }">
            <CheeseCard :cheese="cheese" :priceMultiplier="priceMultiplier" />
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>
