import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/api";
import { data } from "../../data/dummy";

export default function Dashboard() {
  const navigate = useNavigate();

  const TableUsed = ({ title, label }: any) => {
    return (
      <div className="flex items-center text-xl font-semibold">
        <label className="">{label}</label>
        <h2>{title}</h2>
      </div>
    );
  };

  const Card = ({ data }: any) => {
    return (
      <div className="w-1/3 border-2 p-5 rounded-md">
        <div className="w-[90%] mx-auto flex flex-col gap-y-3">
          <h3>Recipe : {data.title}</h3>
          <p>Desc : {data.description}</p>
          <div className="flex flex-col">
            <h3>Steps : </h3>

            {data.steps.map((step: any) => (
              <p className="text-sm">{step}</p>
            ))}
          </div>
          <div className="flex flex-col">
            <h3>ingredients : </h3>

            {data.ingredients.map((ingredient: any) => (
              <p className="text-sm">{ingredient}</p>
            ))}
          </div>
          <div className="flex justify-between">
            <Link
              to={"/cooking/" + data._id}
              className="py-2 px-4 bg-orange-400 text-white rounded-md w-fit"
            >
              Detail
            </Link>
            <button className="bg-rose-400 text-white py-2 px-4 rounded-md w-fit">
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="py-5">
        <div className="flex justify-between items-center">
          <TableUsed title="Muhammad Fajri" label="Hello," />

          <Link
            to={"/create"}
            className="py-2 px-5 bg-emerald-400 rounded-md text-white"
          >
            Create Cooking
          </Link>
        </div>

        <h2 className="text-3xl font-semibold uppercase text-center pt-10">
          Cookings
        </h2>
        <div className="flex flex-wrap  w-full justify-start pt-3 gap-5 ">
          {data.cooking.map((dataDummy: any) => (
            <Card data={dataDummy} />
          ))}
        </div>
      </div>
    </div>
  );
}
