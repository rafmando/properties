import { test, expect } from "@playwright/experimental-ct-react";
import { mockFilteredProperties } from "../../../mocks/mocks";
import MultiFilterResults from "../multi-filter-results";

test.use({ viewport: { width: 1000, height: 500 } });

test("that the MultiFilter results render correctly ", async ({ mount }) => {
  const component = await mount(
    <MultiFilterResults filteredProperties={mockFilteredProperties} />
  );
  await expect(component).toContainText("3 bedroom house");
  await expect(component).toContainText("67 Medow Way");
  await expect(component).toContainText("London");
  await expect(component).toContainText("SW16 9JF");
  await expect(component).toContainText("£400000");
});
