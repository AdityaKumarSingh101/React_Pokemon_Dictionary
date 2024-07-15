import {
  PokeAPI_Pokemon_Form,
  PokeAPI_Pokemon_FormPage,
} from "../../../../types/PokeAPI_DataTypes";
import { ToPascalCase } from "../../../../helpers/functions";
import axios from "axios";
import { useState } from "react";

export const PokemonForms = ({ forms }: { forms: [] }) => {
  const [formImages, setFormImages] = useState<string[]>([]);

  return (
    <div className="m-auto border-black bg-black text-white rounded-md p-5 transition-all hover:scale-125 hover:cursor-default duration-5000 ease-in-out">
      <div className="flex flex-col">
        <h3 className="text-center text-xl">
          <b>Forms</b>
          <hr />
          <br />
        </h3>
        <div className="flex flex-col">
          {forms.map((form: PokeAPI_Pokemon_Form, index: number) => {
            axios.get(form.form.url).then((res) => {
              const formData: PokeAPI_Pokemon_FormPage = res.data;
              setFormImages([
                ...formImages,
                (formImages[index] = formData.sprites.front_default),
              ]);
            });
            return (
              <div className="flex flex-col" key={form.form.name}>
                <div>
                  <img src={formImages[index]} />
                </div>
                <div>{ToPascalCase(form?.form.name)}</div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
