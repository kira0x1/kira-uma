export type SkillMeta = {
   baseCost: number;
   groupId: number;
   iconId: number;
   order: number;
};

export interface SkillEffect {
   modifier: number;
   target: number;
   type: number;
}

export interface SkillAlt {
   baseDuration: number;
   condition: string;
   effects: SkillEffect[];
   precondition: string;
}

export interface SkillData {
   alternatives: SkillAlt[];
   rarity: number;
}
