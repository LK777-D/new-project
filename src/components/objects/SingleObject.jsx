"use client";
import dynamic from "next/dynamic";
import LargePlaceCard from "../../components/objects/LargePlaceCard";
import InfoBox from "../../components/objects/InfoBox";
import DetailsBox from "../../components/objects/DetailsBox";
import LocationBox from "../../components/objects/LocationBox";
import ReviewList from "../../components/review/ReviewList";
import { useState, useEffect } from "react";
const DynamicLargePlaceCard = dynamic(
  () => import("../../components/objects/LargePlaceCard"),
  {
    loading: () => <p className="fontlemon">Loading...</p>,
    ssr: false,
  }
);

const DynamicInfoBox = dynamic(
  () => import("../../components/objects/InfoBox"),
  {
    ssr: false,
  }
);

const DynamicDetailsBox = dynamic(
  () => import("../../components/objects/DetailsBox"),
  {
    ssr: false,
  }
);

const DynamicLocationBox = dynamic(
  () => import("../../components/objects/LocationBox"),
  {
    ssr: false,
  }
);

const DynamicReviewList = dynamic(
  () => import("../../components/review/ReviewList"),
  {
    ssr: false,
  }
);

const SingleObject = ({ selectedRestaurant, reviews }) => {
  const restId = selectedRestaurant.id;
  const imageValues = selectedRestaurant.imageValues;
  const score = selectedRestaurant.score;
  const creatorId = selectedRestaurant.createdBy;
  const [shouldRenderRestList, setShouldRenderRestList] = useState(false);
  useEffect(() => {
    setShouldRenderRestList(true);
  }, []);

  return (
    <main className=" bg-gray-200 border border-t">
      {shouldRenderRestList && (
        <>
          <DynamicLargePlaceCard
            selectedRestaurant={selectedRestaurant}
            name={selectedRestaurant.name}
            city={selectedRestaurant.city}
            addressLine1={selectedRestaurant.addressLine1}
            addressLine2={selectedRestaurant.addressLine2}
            imageValues={imageValues}
            restId={restId}
            score={score}
            creatorId={creatorId}
          />
          <div className="md:grid md:grid-cols-3 md:gap-5  md:px-[1.5rem] ">
            <DynamicInfoBox
              restId={restId}
              score={selectedRestaurant.score}
              description={selectedRestaurant.description}
            />
            <DynamicDetailsBox />
            <DynamicLocationBox
              addressLine1={selectedRestaurant.addressLine1}
              addressLine2={selectedRestaurant.addressLine2}
            />
          </div>
          <div className="md:px-[1.5rem]">
            <DynamicReviewList reviews={reviews} />
          </div>
        </>
      )}
    </main>
  );
};

export default SingleObject;
