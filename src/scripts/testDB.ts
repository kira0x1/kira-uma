import db from '../db'

function getSkillFromDB() {
    const res = db.getSkillById("101151")
    console.log(res)
}

getSkillFromDB();