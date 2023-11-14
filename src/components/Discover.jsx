import React from "react";

import DISCOVER_1 from "../assets/images/discover1.png";
import DISCOVER_2 from "../assets/images/discover2.png";
import DISCOVER_3 from "../assets/images/discover3.png";
import DISCOVER_4 from "../assets/images/discover4.png";
import DISCOVER_5 from "../assets/images/discover5.png";
import DISCOVER_6 from "../assets/images/discover6.png";
import DISCOVER_7 from "../assets/images/discover7.png";
import DISCOVER_8 from "../assets/images/discover8.png";

const DiscoverCard = ({ bid, item }) => {
  return (
    <div
      className="card bg-transparent text-white"
      style={{
        width: "18rem",
      }}
    >
      <img src={DISCOVER_1} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="w-100 d-flex justify-content-between">
          {item.map((i, index) => {
            return (
              <>
                <h5 className="card-title bg-transparent ">{i.name}</h5>
                <p className="card-text">{i.value}</p>
              </>
            );
          })}
        </div>
        <hr />
        <div className="w-100 d-flex justify-content-between">
          <h5
            className="bg-transparent text-secondary  fw-normal  "
            style={{
              fontSize: "12px",
            }}
          >
            {bid}
          </h5>
          <button
            className="btn btn-outline-light"
            style={{
              width: "100px",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

const discoverItems = [
  {
    imageUrl: DISCOVER_1,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_2,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_3,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_4,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_5,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_6,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_7,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
  {
    imageUrl: DISCOVER_8,
    item: [
      {
        name: "Lorem Ipsum",
        value: "1.20 Weth",
      },
    ],
    bid: "Ends in 01.34.45",
  },
];

export function Discover() {
  return (
    <div className="w-100 d-flex justify-content-center flex-column align-items-center my-5">
      <div
        className="d-flex justify-content-between w-100 px-5"
        style={{
          height: "100px",
        }}
      >
        <h1 className="text-white">Discover</h1>
        <div>
          <button
            role="button"
            type="button"
            className="btn btn-link text-white text-decoration-none "
          >
            Category
          </button>
          <button
            role="button"
            type="button"
            className="btn btn-link text-white text-decoration-none "
          >
            Cheapest
          </button>
          <button
            role="button"
            type="button"
            className="btn btn-link text-white text-decoration-none "
          >
            Newest
          </button>
          <button
            role="button"
            type="button"
            style={{backgroundColor:"#9B51E0"}}
            className="btn btn-success text-white text-decoration-none "
          >
            Filter
          </button>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-evenly row">
        {discoverItems.map((items, index) => {
          return (
            <>
              <DiscoverCard {...items} />
            </>
          );
        })}
      </div>
      <div className="my-5">
        <button
          type="button"
          className="btn btn-outline-dark text-dark rounded-2"
          style={{
            width: "150px",
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}