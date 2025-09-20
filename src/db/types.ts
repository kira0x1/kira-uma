export interface SkillDB {
   skill_id: string;
   name: string;
   base_cost: number;
   group_id: number;
   icon_id: number;
   skill_order: number;
   rarity: number;
}

export interface SkillAltDB {
   skill_id: string;
   base_duration: number;
   condition: string;
   effects: string;
   precondition: string;
}

export type SkillResponse = {
   skill_id: string;
   name: string;
   base_cost: number;
   group_id: number;
   icon_id: number;
   skill_order: number;
   rarity: number;
   SkillAlternatives: SkillAltDB[];
};

export const IconIdPrefix = Object.freeze({
   "1001": ["1001"],
   "1002": ["1002", "2018"],
   "1003": ["1003"],
   "1004": ["1004"],
   "1005": ["1005"],
   "1006": ["1006"],
   "2002": ["2002", "2011"],
   "2001": ["2001", "2010", "2014", "2015", "2016", "2019", "2021"],
   "2004": ["2004", "2012", "2017", "2020"],
   "2005": ["2005", "2013"],
   "2006": ["2006"],
   "2009": ["2009"],
   "3001": ["3001"],
   "3002": ["3002"],
   "3004": ["3004"],
   "3005": ["3005"],
   "3007": ["3007"],
   "4001": ["4001"],
});

export const groups_filters = Object.freeze({
   rarity: ["white", "gold", "pink", "unique", "inherit"],
   icontype: [
      "1001",
      "1002",
      "1003",
      "1004",
      "1005",
      "1006",
      "4001",
      "2002",
      "2001",
      "2004",
      "2005",
      "2006",
      "2009",
      "3001",
      "3002",
      "3004",
      "3005",
      "3007",
   ],
   strategy: ["nige", "senkou", "sasi", "oikomi"],
   distance: ["short", "mile", "medium", "long"],
   surface: ["turf", "dirt"],
   location: [
      "phase0",
      "phase1",
      "phase2",
      "phase3",
      "finalcorner",
      "finalstraight",
   ],
});
