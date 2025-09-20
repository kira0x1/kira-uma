import { useState } from "preact/hooks";
import "./HorseStats.css";
import { SkillResponse } from "../db";
import SkillSelectorModal from "./SkillSelectorModal";

export function HorseStats() {
   const [horseSkills, setHorseSkills] = useState<Array<SkillResponse>>([]);
   const [skillMenuOn, setSkillMenuOn] = useState(false);

   function addSkill(skill) {
      setHorseSkills([skill, ...horseSkills]);
   }

   function removeSkill(skill: SkillResponse) {
      const updatedSkills = horseSkills.filter(
         (s) => s.skill_id !== skill.skill_id,
      );

      setHorseSkills(updatedSkills);
   }

   function showAddSkillMenu() {
      setSkillMenuOn(true);
   }

   return (
      <>
         <SkillSelectorModal
            isVisible={skillMenuOn}
            closeModal={() => setSkillMenuOn(false)}
         />

         <div class="horse-stats">
            <div class="horse-bio">
               <div class="horse-portrait">
                  <img src="/src/assets/icons/chara/chr_icon_1006.png" />
               </div>
               <div class="horse-name">Goldship</div>
            </div>

            <div class="stats-container">
               <Stat title={"Speed"} value={22} />
               <Stat title={"Stamina"} />
               <Stat title={"Power"} />
               <Stat title={"Guts"} />
               <Stat title={"Wit"} />
            </div>

            <div class="skills-container">
               <div class="skills-banner">Skills</div>
               <div class="skill-controls">
                  <button onClick={showAddSkillMenu}>+</button>
               </div>
               <div class="skills-grid">
                  {/* <SkillButton skill={skills[0]} />
                    <SkillButton skill={skills[1]} />
                    <SkillButton skill={skills[2]} /> */}
               </div>
            </div>
         </div>
      </>
   );
}

function Stat(props) {
   return (
      <div class="stat">
         <div class="stat-header">{props.title}</div>
         <input
            class="stat-value"
            type="number"
            min="1"
            max="1200"
            value={props.value ?? 0}
         />
      </div>
   );
}
