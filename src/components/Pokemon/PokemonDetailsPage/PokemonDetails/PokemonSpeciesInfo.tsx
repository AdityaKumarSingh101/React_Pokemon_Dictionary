import { useEffect, useState } from "react";
import { PokemonDetailsCardStyle } from "../../../../helpers/styles";
import { PokeAPI_Pokemon_SpeciesPage } from "../../../../types/PokeAPI_DataTypes";
import axios from "axios";

export default function PokemonSpeciesInfo({ InfoURL }: { InfoURL: string }) {
  const [speciesInfo, setSpeciesInfo] = useState<PokeAPI_Pokemon_SpeciesPage>();

  const fetchSpeciesInfo = async () => {
    await axios.get(InfoURL).then((res) => {
      setSpeciesInfo(res.data as PokeAPI_Pokemon_SpeciesPage);
    });
  };

  useEffect(() => {
    fetchSpeciesInfo();
  }, []);

  return (
    <div className={PokemonDetailsCardStyle}>
      <div className="text-center font-bold text-xl">SPECIES INFO</div>
      <hr />
      <div className="flex flex-row mt-3 font-bold gap-4">
        {/* Happiness, Capture Rate, Hatch Counter, Gender Rate, Growth Rate */}
        <div className="flex flex-col">
          {/* Happiness */}
          <li>Happiness : {speciesInfo?.base_happiness}</li>
          {/* Capture Rate */}
          <li>Capture Rate : {speciesInfo?.capture_rate}</li>
          {/* Hatch Counter */}
          <li>Hatch Counter : {speciesInfo?.hatch_counter}</li>
          {/* Gender Rate */}
          <li>Gender Rate : {speciesInfo?.gender_rate}</li>
          {/* Growth Rate */}
          <li>
            Growth Rate :{" "}
            {`${speciesInfo?.growth_rate.name
              .charAt(0)
              .toUpperCase()}${speciesInfo?.growth_rate.name.slice(1)}`}
          </li>
        </div>
        {/* Baby, Legendary, Mythical, Form Switchable, Color */}
        <div className="flex flex-col">
          {/* Baby */}
          <li>Baby : {speciesInfo?.is_baby ? "Yes" : "No"}</li>
          {/* Legendary */}
          <li>Legendary : {speciesInfo?.is_legendary ? "Yes" : "No"}</li>
          {/* Mythical */}
          <li>Mythical : {speciesInfo?.is_mythical ? "Yes" : " No"}</li>
          {/* Form Switchable */}
          <li>Form Switch : {speciesInfo?.forms_switchable ? "Yes" : " No"}</li>
          {/* Color */}
          <li>
            Color:{" "}
            {speciesInfo?.color.name.charAt(0).toUpperCase() +
              "" +
              speciesInfo?.color.name.slice(1)}
          </li>
        </div>
        {/* Genus, Generation, Shape, Egg Groups, Habitat */}
        <div className="flex flex-col">
          {/* Genus */}
          <li>Genus : {speciesInfo?.genera[7].genus}</li>
          {/* Generation */}
          <li>
            Generation :{" "}
            {speciesInfo?.generation.name.slice(0, 3).toUpperCase() +
              " " +
              speciesInfo?.generation.name.slice(11).toUpperCase()}
          </li>
          {/* Shape */}
          <li>
            Shape :{" "}
            {`${speciesInfo?.shape.name
              .charAt(0)
              .toUpperCase()}${speciesInfo?.shape.name.slice(1)}`}
          </li>
          {/* Egg Groups */}
          <li>
            Egg Groups :{" "}
            {speciesInfo?.egg_groups.map((group) => {
              return (
                <span key={group.name}>
                  {group.name.charAt(0).toUpperCase()}
                  {group.name.slice(1)}
                  {". "}
                </span>
              );
            })}
          </li>
          {/* Habitat */}
          <li>
            Habitat :{" "}
            {speciesInfo?.habitat.name.charAt(0).toUpperCase() +
              "" +
              speciesInfo?.habitat.name.slice(1)}
          </li>
        </div>
      </div>
    </div>
  );
}
