import { SkillResponse } from "../../db"
import Utils from "../../util/skills"
import "./Style.css"

export const classnames = Object.freeze(['', 'skill-white', 'skill-gold', 'skill-unique', 'skill-unique', 'skill-unique', 'skill-pink']);

export function SkillButton(props: { skill: SkillResponse }) {
    const { skill } = props;
    const cname = classnames[skill.rarity];
    console.log(`${skill.name},  ${skill.rarity}: ${cname}`)

    return <button class={`skill-button ${classnames[skill.rarity]}`}>
        <img class="skill-icon" src={Utils.getSkillIcon(skill.icon_id)} />
        <span class="skill-name">{skill.name}</span>
    </button>
}