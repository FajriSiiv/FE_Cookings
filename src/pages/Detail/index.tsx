import React from "react";
import { useParams } from "react-router-dom";
import { allData } from "../../data/dummy";

export default function Detail() {
  const { id } = useParams();

  const filterData = allData.filter((data) => data._id === id)[0];

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-semibold">
        Detail Cooking {filterData.title}{" "}
      </h2>
      <div className="mx-auto flex flex-col gap-y-3">
        <p className="text-xl">{filterData.description}</p>
        <div className="flex flex-col">
          <h3>Steps : </h3>
          {filterData.steps.map((step: any) => (
            <p className="text-sm">{step}</p>
          ))}
        </div>
        <div className="flex flex-col">
          <h3>ingredients : </h3>

          {filterData.ingredients.map((ingredient: any) => (
            <p className="text-sm">{ingredient}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
