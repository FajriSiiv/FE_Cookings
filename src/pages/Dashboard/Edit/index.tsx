import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../../data/dummy";

export default function EditCooking() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [ingredients, setIngredients] = useState([{ value: "" }]);

  const handleSubmitCreate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, inputs);
    console.log("Submit Create");
  };

  const handleInputChange = (e: any, index: any) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };

  const handleIngredientChange = (e: any, index: any) => {
    const newIngredients = [...ingredients];
    newIngredients[index].value = e.target.value;
    setIngredients(newIngredients);
  };

  const handleRemoveInput = (index: any) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleRemoveIngredient = (index: any) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const addInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  const addIngregdient = () => {
    setIngredients([...ingredients, { value: "" }]);
  };

  useEffect(() => {
    const cook = data.cooking.filter((data) => id === data._id)[0];

    setDesc(cook.description);
    setIngredients((prevIngredients) => [...prevIngredients]);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold text-center">
        Create Cooking Recipe
      </h1>
      <form
        onSubmit={handleSubmitCreate}
        className="flex flex-col gap-y-3 w-1/2 mx-auto mt-10"
      >
        <div className="flex flex-col gap-y-1 ">
          <label className="text-xl font-semibold">Title Recipe</label>
          <input
            type="text"
            className="p-2 border-2 rounded-md"
            placeholder="Chicken Nugget"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label className="text-xl font-semibold">Description</label>
          <textarea
            className="p-2 border-2 rounded-md"
            placeholder="Chicken Nugget"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label className="text-xl font-semibold">Steps</label>
          {inputs.map((input, i) => (
            <div key={i} className="flex gap-x-2 mt-2">
              <input
                type="text"
                value={input.value}
                onChange={(e) => handleInputChange(e, i)}
                className="p-2 border-2 rounded-md w-full"
                placeholder="Add some sugar"
              />
              <button
                type="button"
                onClick={() => handleRemoveInput(i)}
                className="bg-rose-400 text-white text-2xl font-bold px-3 rounded-md"
                disabled={inputs.length === 1}
              >
                -
              </button>
            </div>
          ))}
          <button
            onClick={addInput}
            type="button"
            className="bg-sky-400 text-white text-2xl font-bold px-3 rounded-md mt-2 w-fit mx-auto"
          >
            +
          </button>
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label className="text-xl font-semibold">Ingredients</label>
          {ingredients.map((ingredient, i) => (
            <div key={i} className="flex gap-x-2 mt-2">
              <input
                type="text"
                value={ingredient.value}
                onChange={(e) => handleIngredientChange(e, i)}
                className="p-2 border-2 rounded-md w-full"
                placeholder="Add some sugar"
              />
              <button
                type="button"
                onClick={() => handleRemoveIngredient(i)}
                className="bg-rose-400 text-white text-2xl font-bold px-3 rounded-md"
                disabled={ingredients.length === 1}
              >
                -
              </button>
            </div>
          ))}
          <button
            onClick={addIngregdient}
            type="button"
            className="bg-sky-400 text-white text-2xl font-bold px-3 rounded-md mt-2 w-fit mx-auto"
          >
            +
          </button>
        </div>
        <button
          type="submit"
          className="flex text-white bg-emerald-500 py-2 justify-center text-lg rounded-md"
        >
          Create Cooking
        </button>
      </form>
    </div>
  );
}
