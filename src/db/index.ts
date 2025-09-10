import { createClient } from '@supabase/supabase-js';
// import Database from 'better-sqlite3'
// const db = new Database('uma.db')
// db.pragma('journal_mode = WAL');

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export interface SkillDB {
    skillId: string,
    name: string,
    baseCost: number,
    groupId: number,
    iconId: number,
    skillOrder: number,
    rarity: number
}

export interface SkillAltDB {
    skillId: string,
    baseDuration: number,
    condition: string,
    effects: string,
    precondition: string,
}


// class DbController {
//     static initDB() {
//         this.initSkillAlternativeTable();
//         this.initSkillsTable();
//         db.close();
//     }

//     static clearSkills() {
//         db.exec(`
//                 DROP TABLE SkillAlternatives;
//                 DROP TABLE Skills;
//             `)
//     }

//     static initSkillAlternativeTable() {
//         db.exec(`
//             CREATE TABLE SkillAlternatives (
//                 skillId TEXT NOT NULL,
//                 baseDuration INTEGER NOT NULL,
//                 condition TEXT NOT NULL,
//                 effects TEXT NOT NULL,
//                 precondition TEXT NOT NULL,
//                 FOREIGN KEY(skillId) REFERENCES Skills(skillId)
//             )
//             `)
//     }

//     static AddSkill = db.transaction((skill: SkillDB) => {
//         const stmt = db.prepare(`INSERT INTO Skills (skillId, name, baseCost, groupId, iconId, skillOrder, rarity) VALUES (@skillId, @name,  @baseCost, @groupId, @iconId, @skillOrder, @rarity)`);
//         stmt.run(skill);
//     });

//     static AddAlternative = db.transaction((alt: SkillAltDB) => {
//         const stmt = db.prepare(`INSERT INTO SkillAlternatives (skillId, baseDuration, condition, effects, precondition) VALUES (@skillId, @baseDuration, @condition, @effects, @precondition)`);
//         stmt.run(alt);
//     })

//     static async getSkills() {
//         const stmt = db.prepare(`
//             SELECT * FROM Skills
//             JOIN SkillAlternatives USING (skillId)
//         `)

//         stmt.expand(true);

//         const res: any = stmt.all();
//         const skillsFound = [];

//         for (const s of res) {
//             const skillData = s.Skills;
//             const alternatives = [];

//             for (const r of s) {
//                 alternatives.push(r.SkillAlternatives)
//             }

//             const skill = {
//                 ...skillData, alternatives: alternatives
//             }

//             skillsFound.push(skill);
//         }

//         return skillsFound;

//     }

//     static getSkillById(id: string) {
//         const stmt = db.prepare(`
//             SELECT * FROM Skills
//             JOIN SkillAlternatives USING (skillId)
//             WHERE Skills.skillId = ?
//             `)

//         stmt.expand(true);

//         const res: any = stmt.all(id);

//         if (res && res?.length > 0) {
//             const skillData = res[0].Skills;
//             const alternatives = [];

//             for (const r of res) {
//                 alternatives.push(r.SkillAlternatives)
//             }

//             const skill = {
//                 ...skillData, alternatives: alternatives
//             }

//             return skill;
//         }

//         return res;
//     }

//     static initSkillsTable() {
//         db.exec(
//             ` 
//             CREATE TABLE Skills (
//                 skillId TEXT PRIMARY KEY NOT NULL,
//                 name TEXT NOT NULL,
//                 baseCost INTEGER NOT NULL,
//                 groupId INTEGER NOT NULL,
//                 iconId INTEGER NOT NULL,
//                 skillOrder INTEGER NOT NULL,
//                 rarity INTEGER NOT NULL
//                 );
//                 `

//         )
//     }
// }

// export default DbController