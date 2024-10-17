<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getCheeseList } from "../../api/get_cheese";

const route = useRoute();

const cheese = ref({});

async function getCheese() {
  const { cheeses } = await getCheeseList();
  console.log(
    cheeses.find((cheese) => cheese.id === parseInt(route.params.id))
  );
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
  <div class="wrapper">
    <header class="app-header">
      <div class="app-heading">PZ Cheeseria</div>
      <div class="app-home-button">
        <RouterLink to="/">Home</RouterLink>
      </div>
    </header>
    <main class="app-main">
      <div class="cheese-heading">
        <h1>{{ cheese.name }}</h1>
      </div>
      <section class="cheese-details">
        <div class="cheese-image">
          <img :src="cheese.image" />
        </div>
        <div class="cheese-details-content">
          <div class="cheese-details-text">
            <div class="cheese-details-heading">
              <div>Details</div>
            </div>
            <ul>
              <li>Colour: {{ cheese.colour }}</li>
            </ul>
          </div>
          <div class="cheese-price">${{ cheese.price_per_kilo }} per kg</div>
        </div>
      </section>
    </main>
  </div>
</template>
