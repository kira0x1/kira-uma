import { useState, useEffect } from "preact/hooks";
import { SkillViewer } from "../../components/SkillViewer";
import { SkillResponse, DbController } from "../../db";
import LoadingSpinner from "../../components/LoadingSpinner";
import "./style.css";

export function Skills() {
   const [skills, setSkills] = useState<SkillResponse[]>([]);
   const [isLoading, setLoading] = useState(false);

   useEffect(() => {
      getSkills();
   }, []);

   async function getSkills() {
      setLoading(true);

      const res = await DbController.getSkillsByRarity(1, 2);
      const res2 = await DbController.getSkillsByRarity(3, 2);
      const rarityRes = await DbController.getSkillsByRarity(2, 10);
      const res3 = await DbController.getSkillsByRarity(4, 6);

      const skills = [...res, ...rarityRes, ...res2, ...res3];

      if (skills) {
         setSkills(skills);
      }

      setLoading(false);
   }

   return (
      <div class="skills-page">
         {isLoading ? <LoadingSpinner /> : <SkillViewer skills={skills} />}
      </div>
   );
}
