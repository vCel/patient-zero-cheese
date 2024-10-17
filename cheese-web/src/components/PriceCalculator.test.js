/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import PriceCalculator from "./PriceCalculator.vue";
import { mount } from "@vue/test-utils";

describe("PriceCalculator", () => {
  it("should render price calculator", () => {
    const wrapper = mount(PriceCalculator);

    expect(wrapper.find("input").exists()).toBe(true);
  });
});
