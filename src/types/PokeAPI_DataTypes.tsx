// Contains all the data types used by the web site

//#region PokeAPI Data Types
export type PokeAPI_InfoPage = {
  url: string;
  name: string;
};
export type PokeAPI_ResultPage = {
  count: number;
  previous: string | null;
  next: string | null;
  results: PokeAPI_InfoPage[];
};
export type PokeAPI_PokemonData = {
  abilities: PokeAPI_Pokemon_Ability[];
  base_experience: number;
  cries: PokeAPI_Pokemon_Cries;
  forms: PokeAPI_Pokemon_Form[];
  game_indices: PokeAPI_Pokemon_GameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokeAPI_Pokemon_Move[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: PokeAPI_InfoPage;
  sprites: PokeAPI_Pokemon_Sprites;
  stats: PokeAPI_Pokemon_Stat[];
  types: PokeAPI_Pokemon_Type[];
  weight: number;
};
export type PokeAPI_Pokemon_Ability = {
  ability: PokeAPI_InfoPage;
  is_hidden: boolean;
  slot: number;
};
export type PokeAPI_Pokemon_Cries = {
  latest: string | null;
  legacy: string | null;
};
export type PokeAPI_Pokemon_Form = {
  form: PokeAPI_InfoPage;
};
export type PokeAPI_Pokemon_GameIndex = {
  game_index: number;
  version: PokeAPI_InfoPage;
};
export type PokeAPI_Pokemon_VersionGroupDetail = {
  level_learned_at: number;
  move_learned_method: PokeAPI_InfoPage;
  version_group: PokeAPI_InfoPage;
};
export type PokeAPI_Pokemon_Move = {
  move: PokeAPI_InfoPage;
  version_group_details: PokeAPI_Pokemon_VersionGroupDetail[];
};
export type PokeAPI_Pokemon_Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    official_artwork: {
      front_default: string | null;
      front_shiny: string | null;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  versions: {
    generation_i: {
      red_blue: {
        back_default: string | null;
        back_gray: string | null;
        back_transparent: string | null;
        front_default: string | null;
        front_gray: string | null;
        front_transparent: string | null;
      };
      yellow: {
        back_default: string | null;
        back_gray: string | null;
        back_transparent: string | null;
        front_default: string | null;
        front_gray: string | null;
        front_transparent: string | null;
      };
    };
    generation_ii: {
      crystal: {
        back_default: string | null;
        back_shiny: string | null;
        back_shiny_transparent: string | null;
        back_transparent: string | null;
        front_default: string | null;
        front_shiny: string | null;
        front_shiny_transparent: string | null;
        front_transparent: string | null;
      };
      gold: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
        front_transparent: string | null;
      };
      silver: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
        front_transparent: string | null;
      };
    };
    generation_iii: {
      emerald: {
        front_default: string | null;
        front_shiny: string | null;
      };
      firered_leafgreen: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
      ruby_sapphire: {
        back_default: string | null;
        back_shiny: string | null;
        front_default: string | null;
        front_shiny: string | null;
      };
    };
    generation_iv: {
      diamond_pearl: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      heartgold_soulsilver: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      platinum: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    generation_v: {
      black_white: {
        animated: {
          back_default: string | null;
          back_female: string | null;
          back_shiny: string | null;
          back_shiny_female: string | null;
          front_default: string | null;
          front_female: string | null;
          front_shiny: string | null;
          front_shiny_female: string | null;
        };
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    generation_vi: {
      omegaruby_aplhasapphire: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      x_y: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    generation_vii: {
      icons: {
        front_default: string | null;
        front_female: string | null;
      };
      ultra_sun_ultra_moon: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
    };
    generation_viii: {
      icons: {
        front_default: string | null;
        front_female: string | null;
      };
    };
  };
};
export type PokeAPI_Pokemon_Stat = {
  base_stat: number;
  effort: number;
  stat: PokeAPI_InfoPage;
};
export type PokeAPI_Pokemon_Type = {
  slot: number;
  type: PokeAPI_InfoPage;
};

//#endregion
