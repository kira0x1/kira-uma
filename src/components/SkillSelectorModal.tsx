import { useState, useEffect } from "preact/hooks";
import { SkillResponse, DbController } from "../db";
import LoadingSpinner from "./LoadingSpinner";
import { SkillViewer } from "./SkillViewer";
import "./SkillSelectorModal.css";

export default function SkillSelectorModal(props: {
   isVisible: boolean;
   closeModal;
   onAddSkill?;
}) {
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
      const res3 = await DbController.getSkillsByRarity(4, 10);

      const skills = [...res, ...rarityRes, ...res2, ...res3];

      if (skills) {
         setSkills(skills);
      }

      setLoading(false);
   }

   return (
      <>
         {props.isVisible && (
            <div class="skills-modal">
               {isLoading ? (
                  <LoadingSpinner />
               ) : (
                  <>
                     <div class="modal-controls">
                        <button onClick={() => props.closeModal()}>❌</button>
                     </div>

                     <SkillViewer skills={skills} onClick={props.onAddSkill} />
                  </>
               )}
            </div>
         )}
      </>
   );
}
