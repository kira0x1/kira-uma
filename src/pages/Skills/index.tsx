import { useEffect, useState } from "preact/hooks";
import { supabase } from "../../db";

export function Skills() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        getSkills()
    }, [])

    async function getSkills() {
        const { data } = await supabase.from("Skills").select();
        
        setSkills(data)
    }

    return (
        <div class="skills-page">
            {/* <SkillViewer /> */}
            {
                skills.map(s => {
                    <div>{s}</div>
                })
            }
        </div>
    )
}