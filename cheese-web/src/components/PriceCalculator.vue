<script setup>
defineProps({
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="price-calculator">
    <div class="price-calculator-label">Weight (kg)</div>
    <div class="price-calculator-input">
      <input
        type="number"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
