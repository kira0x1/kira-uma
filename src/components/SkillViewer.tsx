import "./SkillViewer.css"
import { useEffect, useState } from "preact/hooks";
import LoadingSpinner from "./LoadingSpinner";
import { DbController, SkillResponse } from "../db";

export function SkillViewer() {
    const [skills, setSkills] = useState<SkillResponse[]>([])
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getSkills()
    }, [])

    async function getSkills() {
        setLoading(true);

        const res = await DbController.getSkills(10);

        if (res) {
            setSkills(res)
        }

        setLoading(false)
    }

    function SkillsDisplay() {
        return <div class="skill-viewer">
            {
                skills.map(m => {
                    return (
                        <div class={"skill-display"}>
                            <div class={"display-id"}>
                                {m.skill_id}
                            </div>
                            <div class="skill-name">
                                {m.name}
                            </div>
                        </div>
                    )
                })
            }
        </div >
    }

    return isLoading ? <LoadingSpinner /> : <SkillsDisplay />
}