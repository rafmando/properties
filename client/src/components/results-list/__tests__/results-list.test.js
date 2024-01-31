import React from "react";
import { render, screen } from "@testing-library/react";
import { mockSearchedProperties } from "../../../mocks/mocks";
import { ResultsList } from "../results-list";

describe("the ResultsListComponent", () => {
  it("renders properties when given a search value", async () => {
    render(
      <ResultsList
        properties={mockSearchedProperties}
        search={"1 bedroom house"}
      />
    );
    expect(screen.getAllByText("Name: 1 bedroom house")[0]).toBeInTheDocument();
  });

  it("renders no properties when given jibarish", async () => {
    render(
      <ResultsList properties={mockSearchedProperties} search={"skksksj"} />
    );
    expect(screen.queryByText("Name: 1 bedroom house")).not.toBeInTheDocument();
  });
});
