import "./SkillViewer.css";
import { SkillResponse } from "../db";
import { SkillButton } from "./SkillButton/SkillButton";

export function SkillViewer(props: { skills: Array<SkillResponse> }) {
    function skillTextView(skill: SkillResponse) {
        return (
            <div class={"skill-display"}>
                <div class={"display-id"}>
                    {skill.skill_id}
                </div>
                <div class="skill-name">
                    {skill.name}
                </div>
            </div>
        )
    }

    return (
        <div class="skill-viewer">
            <div class="skill-grid">
                {props.skills.map((m, i) => <SkillButton skill={m} key={`${i}:${m.skill_id}`} />)}
            </div>
        </div >
    )
}