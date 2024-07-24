// Contains all the data types used by the web site

//#region PokeAPI Global Types
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
//#endregion

//#region PokeAPI Pokemon Data Types
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
  generation: PokeAPI_InfoPage;
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
export type PokeAPI_Pokemon_SpeciesPage = {
  base_happiness: number;
  capture_rate: number;
  color: PokeAPI_InfoPage;
  egg_groups: PokeAPI_InfoPage[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: PokeAPI_InfoPage;
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: PokeAPI_Pokemon_Genus[];
  generation: PokeAPI_InfoPage;
  growth_rate: PokeAPI_InfoPage;
  habitat: PokeAPI_InfoPage;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: PokeAPI_Pokemon_Name[];
  order: number;
  shape: PokeAPI_InfoPage;
};
export type PokeAPI_Pokemon_Name = {
  name: string;
  language: PokeAPI_InfoPage;
};
export type PokeAPI_Pokemon_Genus = {
  genus: string;
  language: PokeAPI_InfoPage;
};
//#endregion

//#region PokeAPI Item Data Types
export type PokeAPI_ItemData = {
  attributes: PokeAPI_InfoPage[];
  baby_trigger_for: null;
  catergory: PokeAPI_InfoPage;
  cost: number;
  effect_entries: PokeAPI_Item_Effect[];
  flavour_text_entries: PokeAPI_Item_FTE[];
  fling_effect: null;
  fling_power: number;
  game_indices: PokeAPI_Pokemon_GameIndex[];
  held_by_pokemon: PokeAPI_Item_HeldByPokemon[];
  id: number;
  machines: PokeAPI_Item_Machine[];
  name: string;
  sprites: {
    default: string;
  };
};
export type PokeAPI_Item_Effect = {
  effect: string;
  short_effect: string;
};
export type PokeAPI_Item_FTE = {
  language: PokeAPI_InfoPage;
  text: string;
  version_group: PokeAPI_InfoPage;
};
export type PokeAPI_Item_GameIndex = {
  game_index: number;
  generation: PokeAPI_InfoPage;
};
export type PokeAPI_Item_HeldByPokemon = {
  pokemon: PokeAPI_InfoPage;
  version_details: PokeAPI_Item_HeldByPokemon_Version[];
};
export type PokeAPI_Item_HeldByPokemon_Version = {
  rarity: number[];
  version: PokeAPI_InfoPage;
};
export type PokeAPI_Item_Machine = {
  machine: {
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
};
//#endregion
