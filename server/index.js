const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/properties/all", (req, res) => {
  res.json({
    properties: [
      {
        name: "3 bedroom house",
        address: "67 Medow Way",
        location: "London",
        postcode: "SW16 9JF",
        price: 400000,
        type: "house",
        bedrooms: 3,
        radius: 2,
      },
      {
        name: "1 bedroom house",
        address: "21 Alfum Road",
        location: "London",
        postcode: "E1 FRT",
        price: 100000,
        type: "house",
        bedrooms: 1,
        radius: 15,
      },
      {
        name: "6 bedroom house",
        address: "74 Zoo Lane",
        location: "London",
        postcode: "SE15 FJ9",
        price: 1000000,
        type: "house",
        bedrooms: 6,
        radius: 20,
      },
      {
        name: "3 bedroom apartment",
        address: "32 Downcast Road",
        location: "London",
        postcode: "N16 7WV",
        price: 1500000,
        type: "apartment",
        bedrooms: 3,
        radius: 14,
      },

      {
        name: "2 bedroom apartment",
        address: "8 Stravos Way",
        location: "London",
        postcode: "SE16 9JF",
        price: 2500,
        type: "apartment",
        bedrooms: 2,
        radius: 19,
      },
      {
        name: "8 bedroom house",
        address: "18 Millbrook Road",
        location: "London",
        postcode: "E1 FPT",
        price: 5000,
        type: "house",
        bedrooms: 1,
        radius: 7,
      },
      {
        name: "1 bedroom house",
        address: "16 Albert Lane",
        location: "London",
        postcode: "SE15 9PB",
        price: 800,
        type: "house",
        radius: 24,
      },
      {
        name: "13 bedroom apartment",
        address: "1 Elliot Drive",
        location: "London",
        postcode: "W1K",
        price: 10000,
        type: "apartment",
        bedrooms: 13,
        radius: 20,
      },
      {
        name: "3 bedroom flat",
        address: "3 District Lane",
        location: "Birmingham",
        postcode: "B12 GDF",
        price: 205000,
        type: "apartment",
        bedrooms: 3,
        radius: 4,
      },
      {
        name: "1 bedroom apartment",
        address: "9 Goola Road",
        location: "Birmingham",
        postcode: "B5 YUP",
        price: 100000,
        type: "appartment",
        bedrooms: 1,
        radius: 8,
      },
      {
        name: "10 bedroom house",
        address: "2 Asena House",
        location: "Birmingham",
        postcode: "WV6",
        price: 2000000,
        type: "house",
        bedrooms: 10,
        radius: 2,
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
