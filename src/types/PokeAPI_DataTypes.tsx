// Contains all the data types used by the web site

//#region PokeAPI Data Types
export type PokeAPI_InfoPage = {
  url: string;
  name: string;
};
export type PokeAPI_ResultPage = {
  count: number;
  previous: string;
  next: string;
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
  latest: string;
  legacy: string;
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
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    official_artwork: {
      front_default: string;
      front_shiny: string;
    };
    showdown: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
  };
  versions: {
    generation_i: {
      red_blue: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
      };
      yellow: {
        back_default: string;
        back_gray: string;
        back_transparent: string;
        front_default: string;
        front_gray: string;
        front_transparent: string;
      };
    };
    generation_ii: {
      crystal: {
        back_default: string;
        back_shiny: string;
        back_shiny_transparent: string;
        back_transparent: string;
        front_default: string;
        front_shiny: string;
        front_shiny_transparent: string;
        front_transparent: string;
      };
      gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
      silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
    };
    generation_iii: {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      firered_leafgreen: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
      ruby_sapphire: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    generation_iv: {
      diamond_pearl: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      heartgold_soulsilver: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      platinum: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_v: {
      black_white: {
        animated: {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_vi: {
      omegaruby_aplhasapphire: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      x_y: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_vii: {
      icons: {
        front_default: string;
        front_female: string;
      };
      ultra_sun_ultra_moon: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    generation_viii: {
      icons: {
        front_default: string;
        front_female: string;
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
export type PokeAPI_Pokemon_FormPage = {
  form_name: string;
  form_names: [];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: [];
  order: number;
  pokemon: PokeAPI_InfoPage;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  types: PokeAPI_Pokemon_Type[];
  version_group: PokeAPI_InfoPage;
};

//#endregion
