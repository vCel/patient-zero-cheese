/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import CheeseCard from "./CheeseCard.vue";
import { mount } from "@vue/test-utils";

describe("CheeseCard", () => {
  it("should render cheese card", () => {
    const wrapper = mount(CheeseCard, {
      props: {
        cheese: {
          id: 1,
          name: "name",
          colour: "Yellow",
          description: "description",
          price_per_kilo: 1.99,
          image: "image.png",
        },
      },
      priceMultiplier: "1",
    });

    expect(wrapper.text()).toContain("name");
    expect(wrapper.text()).toContain("$ 1.99");
    expect(wrapper.text()).toContain("Yellow");
    expect(wrapper.find("img").exists()).toBe(true);
  });
});