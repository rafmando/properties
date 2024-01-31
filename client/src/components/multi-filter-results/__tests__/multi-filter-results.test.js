import React from "react";
import { render, screen } from "@testing-library/react";
import { mockFilteredProperties } from "../../../mocks/mocks";
import MultiFilterResults from "../multi-filter-results";

describe("the MultiFilterResultsComponent", () => {
  it("renders correct properties when given filter values", async () => {
    render(<MultiFilterResults filteredProperties={mockFilteredProperties} />);
    expect(screen.getByText(`Name: 3 bedroom house`)).toBeInTheDocument();
    expect(screen.getByText(`Address: 67 Medow Way`)).toBeInTheDocument();
    expect(screen.getAllByText(`Location: London`)[0]).toBeInTheDocument();
    expect(screen.getByText(`Postcode: SW16 9JF`)).toBeInTheDocument();
  });
  it("diplays no properties available when array is empty", () => {
    render(<MultiFilterResults filteredProperties={[]} />);
    expect(screen.getByText("No properties available")).toBeInTheDocument();
  });
});
