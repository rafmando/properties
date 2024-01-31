import { test, expect } from "@playwright/experimental-ct-react";
import { mockProperties } from "../../../mocks/mocks";
import { ResultsList } from "../results-list";

test.use({ viewport: { width: 1000, height: 500 } });

test("that the ResultsList results render correctly when given a search value ", async ({
  mount,
}) => {
  const component = await mount(
    <ResultsList properties={mockProperties} search={"1 bedroom"} />
  );
  await expect(component).toContainText("1 bedroom house");
  await expect(component).toContainText("21 Alfum Road");
  await expect(component).toContainText("London");
  await expect(component).toContainText("E1 FRT");

  await expect(component).not.toContainText("3 bedroom house");
  await expect(component).not.toContainText("67 Medow Way");
  await expect(component).not.toContainText("SW16 9JF");
});

test("that the ResultsList results render correctly when given no search value ", async ({
  mount,
}) => {
  const component = await mount(
    <ResultsList properties={mockProperties} search={""} />
  );
  await expect(component).toContainText("1 bedroom house");
  await expect(component).toContainText("21 Alfum Road");
  await expect(component).toContainText("London");
  await expect(component).toContainText("E1 FRT");

  await expect(component).toContainText("3 bedroom house");
  await expect(component).toContainText("67 Medow Way");
  await expect(component).toContainText("SW16 9JF");
});

test("that the ResultsList results render no properties when given a gibarish value ", async ({
  mount,
}) => {
  const component = await mount(
    <ResultsList properties={mockProperties} search={"djhdjhdj"} />
  );
  await expect(component).not.toContainText("1 bedroom house");
  await expect(component).not.toContainText("21 Alfum Road");
  await expect(component).not.toContainText("London");
  await expect(component).not.toContainText("E1 FRT");

  await expect(component).not.toContainText("3 bedroom house");
  await expect(component).not.toContainText("67 Medow Way");
  await expect(component).not.toContainText("SW16 9JF");
});
