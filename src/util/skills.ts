import skillMetas from '../data/skill_meta.json'

interface SkillMeta {
    baseCost: number,
    groupId: number,
    iconId: number,
    order: number
}
const Utils = {
    getSkillIcon(id: number) {
        const skillFound: SkillMeta = skillMetas[id];
        if (!skillFound) {
            console.warn(`Skill Not Found: ${id}`)
            return;
        }

        return `src/assets/icons/skills/${skillFound.iconId}.png`
    }
}

export default Utils;