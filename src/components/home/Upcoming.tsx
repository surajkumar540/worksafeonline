import React from "react";
import Button from "../common/Button";
import { Get } from "@/api/generalApi";
import ProductSwiper from "./ProductSwiper";
import UpcomingClient from "./UpconingClient";

const Upcoming = async ({
  products,
  slidesPerViewDesktop,
}: {
  products: any;
  slidesPerViewDesktop: number;
}) => {
  let newArrivals = [],
    bestSellers = [];
  const [newArrivalsResponse, bestSellersResponse] = await Promise.allSettled([
    Get(`api/NewArrivals?app=Worksafe`),
    Get(`api/BestSellers?app=Worksafe`),
  ]);
  if (newArrivalsResponse.status === "fulfilled")
    newArrivals = newArrivalsResponse?.value?.product;
  if (bestSellersResponse.status === "fulfilled")
    bestSellers = bestSellersResponse?.value?.product;
  return (
    <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 pt-4 md:pt-6 pb-20">
      <UpcomingClient
        newArrivals={newArrivals}
        bestSellers={bestSellers}
        slidesPerViewDesktop={slidesPerViewDesktop}
      />
    </div>
  );
};

export default Upcoming;
