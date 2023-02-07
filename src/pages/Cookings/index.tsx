import React from "react";
import { Link } from "react-router-dom";
import { allData } from "../../data/dummy";

export default function Cookings() {
  const CardCook = ({ data }: any) => {
    return (
      <div className="flex justify-start w-1/3">
        <div className="w-[90%] flex justify-center flex-col gap-y-2 border-2 rounded-md p-3">
          <h2>Recipe : {data.title}</h2>
          <p>Desc : {data.description}</p>
          <p>Author : {data.author}</p>
          <div className="flex justify-between">
            <Link
              to={"/cooking/" + data._id}
              className=" text-white bg-sky-600 px-2 py-1 rounded-[3px] text-sm"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap  w-full justify-start pt-3">
        {allData.map((cooking) => (
          <CardCook data={cooking} />
        ))}
      </div>
    </div>
  );
}
