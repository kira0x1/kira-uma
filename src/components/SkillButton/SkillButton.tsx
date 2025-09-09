import "./Style.css"

export function SkillButton(props) {
    return <button class="skill-button  white-skill">
        <img class="skill-icon" />
        <span class="skill-name">{props.skillName}</span>
    </button>
}