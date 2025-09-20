import { client, DbController } from "../db";

function getSkillFromDB() {
   const res = DbController.getSkillById("101151");
   console.log(res);
}

getSkillFromDB();
