import { test, expect } from "@playwright/experimental-ct-react";
import { MultiFilter } from "../multi-filter";
import { mockFilteredProperties, mockProperties } from "../../../mocks/mocks";

test.use({ viewport: { width: 1000, height: 500 } });

test("Verify that the multiFilter renders correctly ", async ({ mount }) => {
  const component = await mount(
    <MultiFilter
      filteredProperties={mockFilteredProperties}
      properties={mockProperties}
    />
  );
  await expect(component).toContainText("Location:");
});

test("that the MultiFilter fills in values correctly ", async ({ mount }) => {
  const component = await mount(
    <MultiFilter
      filteredProperties={mockFilteredProperties}
      properties={mockProperties}
    />
  );

  await expect(component.locator("[aria-label=location]")).toHaveText("");
  await component.locator("[aria-label=location]").fill("london");

  await component.locator("[data-testid=property-type]").selectOption("House");

  await expect(component.locator("[data-testid=min-price]")).toHaveValue("0");
  await component.locator("[data-testid=min-price]").selectOption("£50000");

  await expect(component.locator("[data-testid=max-price]")).toHaveValue("0");
  await component.locator("[data-testid=max-price]").selectOption("7500000");

  await expect(component.locator("[data-testid=min-bedroom]")).toHaveValue("0");
  await component.locator("[data-testid=min-bedroom]").selectOption("1");

  await expect(component.locator("[data-testid=max-bedroom]")).toHaveValue("0");
  await component.locator("[data-testid=max-bedroom]").selectOption("10");

  await expect(component.locator("[data-testid=radius]")).toHaveText(
    "Radius: 30"
  );
  await component.locator("[data-testid=max-bedroom]").selectOption("10");

  await component.locator("[data-testid=search-button]").click();
});
