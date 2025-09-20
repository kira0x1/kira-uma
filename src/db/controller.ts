import { client } from "./client";
import { SkillAltDB, SkillDB, SkillResponse } from "./types";

export class DbController {
   static AddAlternative(alt: SkillAltDB) {
      return client.from("SkillAlternatives").insert({ ...alt });
   }

   static async AddSkill(skill: SkillDB) {
      const { error } = await client.from("Skills").insert({ ...skill });
      console.log("");
      console.error(error);
      console.log("");
   }

   static async getSkills(limit?: number): Promise<Array<SkillResponse>> {
      const { data, error } = await client
         .from("Skills")
         .select(`*, SkillAlternatives (skill_id, *)`)
         .limit(limit);

      if (error) {
         return;
      } else {
         return data;
      }
   }

   //TODO: change rarity to enum
   static async getSkillsByRarity(
      rarity: number,
      limit?: number,
   ): Promise<Array<SkillResponse>> {
      const { data, error } = await client
         .from("Skills")
         .select(`*, SkillAlternatives (skill_id, *)`)
         .limit(limit)
         .eq("rarity", rarity);

      if (error) {
         return;
      } else {
         return data;
      }
   }

   static getSkillById(id: string) {}

   static clearSkills() {}
}
