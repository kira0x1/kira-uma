export interface SkillDB {
    skill_id: string,
    name: string,
    base_cost: number,
    group_id: number,
    icon_id: number,
    skill_order: number,
    rarity: number
}

export interface SkillAltDB {
    skill_id: string,
    base_duration: number,
    condition: string,
    effects: string,
    precondition: string,
}

export type SkillResponse = {
    skill_id: string,
    name: string,
    base_cost: number,
    group_id: number,
    icon_id: number,
    skill_order: number,
    rarity: number,
    SkillAlternatives: SkillAltDB[]
}