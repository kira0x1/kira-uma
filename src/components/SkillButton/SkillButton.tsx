import Utils from "../../util/skills"
import "./Style.css"

export function SkillButton(props) {
    return <button class="skill-button  white-skill">
        <img class="skill-icon" src={Utils.getSkillIcon(200352)} />
        <span class="skill-name">{props.skillName}</span>
    </button>
}