<script setup>
const { cheese, priceMultiplier } = defineProps({
  cheese: Object,
  priceMultiplier: String,
});

function getTotalPrice() {
  // Returns the price of the total amount calculated from the weight
  const price = (cheese.price_per_kilo * parseFloat(priceMultiplier)).toFixed(2);
  return price === "NaN" ? "0.00" : price;
}
</script>

<template>
  <div class="card-container">
    <!-- Show cheese image -->
    <div class="card-image">
      <img :src="cheese.image" />
    </div>
    <div class="card-content">
      <div class="cheese-name">{{ cheese.name }}</div>
      <div class="cheese-colour">Colour: {{ cheese.colour }}</div>
    </div>
    <div class="card-price">
      <div class="cheese-price">
        <div class="cheese-price-label">Price / kg</div>
        <div class="cheese-price-value">$ {{ cheese.price_per_kilo }}</div>
      </div>
      <div class="cheese-total">
        <div class="cheese-price-label">Total</div>
        <div class="cheese-price-value">$ {{ getTotalPrice() }}</div>
      </div>
    </div>
  </div>
</template>
