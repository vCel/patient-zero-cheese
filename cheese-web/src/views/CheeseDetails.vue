<script setup>
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { getCheeseList } from "../../api/get_cheese";
import PriceCalculator from "../components/PriceCalculator.vue";

const route = useRoute();

const loading = ref(false);
const cheese = ref({});
const priceMultiplier = ref("1");

watch(() => route.params.id, fetchData, { immediate: true });

// Fetches cheese from ID
async function getCheese() {
  const { cheeses } = await getCheeseList();
  console.log(
    cheeses.find((cheese) => cheese.id === parseInt(route.params.id))
  );
  return cheeses.find((cheese) => cheese.id === parseInt(route.params.id));
}

async function fetchData() {
  loading.value = true;
  try {
    cheese.value = await getCheese();
  } catch {
    console.error("Failed to fetch cheese list");
  }
  loading.value = false;
}

function totalPrice() {
  // Returns the price of the total amount calculated from the weight
  const price = (cheese.value.price_per_kilo * parseFloat(priceMultiplier.value)).toFixed(
    2
  );
  return price === "NaN" ? "0.00" : price;
};
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
          <div v-if="cheese.name" class="cheese-details-price">
            <div class="cheese-price-value">${{ totalPrice() }} per</div>
            <div  class="cheese-price-input">
              <PriceCalculator v-model="priceMultiplier" />
              <span id="kilo">kg</span>
            </div>
          </div>
        </div>
      </section>
      <section class="cheese-description">
        <h2>Description</h2>
        <p>{{ cheese.description }}</p>
      </section>
      <section class="cheese-features">
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Colour:</strong> {{ cheese.colour }}
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
