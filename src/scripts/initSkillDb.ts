import { SkillData, SkillMeta } from '../types/index';

import skillDatas from '../data/skill_data.json';
import skillNames from '../data/skillnames.json';
import skillMetas from '../data/skill_meta.json';

import DbController, { SkillAltDB, SkillDB } from '../db';

const skillNameKeys = Object.keys(skillNames);

export const STRINGS_en = Object.freeze({
    'skillfilters': Object.freeze({
        'search': 'Search by skill name or conditions',
        'white': 'White skills',
        'gold': 'Gold skills',
        'pink': 'Evolved skills',
        'unique': 'Unique skills',
        'inherit': 'Inherited uniques',
        'nige': 'Runner',
        'senkou': 'Leader',
        'sasi': 'Betweener',
        'oikomi': 'Chaser',
        'short': 'Short',
        'mile': 'Mile',
        'medium': 'Medium',
        'long': 'Long',
        'turf': 'Turf',
        'dirt': 'Dirt',
        'phase0': 'Opening leg',
        'phase1': 'Middle leg',
        'phase2': 'Final leg',
        'phase3': 'Last spurt',
        'finalcorner': 'Final corner',
        'finalstraight': 'Final straight'
    }),
    'skilleffecttypes': Object.freeze({
        '1': 'Speed up',
        '2': 'Stamina up',
        '3': 'Power up',
        '4': 'Guts up',
        '5': 'Wisdom up',
        '9': 'Recovery',
        '21': 'Current speed',
        '22': 'Current speed with natural deceleration',
        '27': 'Target speed',
        '28': 'Lane movement speed',
        '31': 'Acceleration',
        '37': 'Activate random gold skill',
        '42': 'Increase skill duration'
    }),
    'skilldetails': Object.freeze({
        'accel': '{{n}}m/s²',
        'basinn': '{{n}} bashin',
        'conditions': 'Conditions:',
        'distance_type': Object.freeze(['', 'Short', 'Mile', 'Medium', 'Long']),
        'baseduration': 'Base duration:',
        'effectiveduration': 'Effective duration ({{distance}}m):',
        'durationincrease': '{{n}}×',
        'effects': 'Effects:',
        'grade': Object.freeze({ 100: 'G1', 200: 'G2', 300: 'G3', 400: 'OP', 700: 'Pre-OP', 800: 'Maiden', 900: 'Debut', 999: 'Daily races' }),
        'ground_condition': Object.freeze(['', 'Good', 'Yielding', 'Soft', 'Heavy']),
        'ground_type': Object.freeze(['', 'Turf', 'Dirt']),
        'id': 'ID: ',
        'meters': '{{n}}m',
        'motivation': Object.freeze(['', 'Terrible', 'Bad', 'Normal', 'Good', 'Perfect']),
        'order_rate': 'CM: {{cm}}, LOH: {{loh}}',
        'preconditions': 'Preconditions:',
        'rotation': Object.freeze(['', 'Clockwise', 'Counterclockwise']),
        'running_style': Object.freeze(['', 'Runner', 'Leader', 'Betweener', 'Chaser']),
        'season': Object.freeze(['', 'Early spring', 'Summer', 'Autumn', 'Winter', 'Late spring']),
        'seconds': '{{n}}s',
        'slope': Object.freeze(['Flat', 'Uphill', 'Downhill']),
        'speed': '{{n}}m/s',
        'time': Object.freeze(['', 'Morning', 'Mid day', 'Evening', 'Night']),
        'weather': Object.freeze(['', 'Sunny', 'Cloudy', 'Rainy', 'Snowy'])
    })
});

function addSkillAltsToDb() {
    for (const k of skillNameKeys) {
        const data: SkillData = skillDatas[k];

        if (!data) continue;

        for (const alt of data.alternatives) {
            const dbAlt: SkillAltDB = {
                baseDuration: alt.baseDuration,
                condition: alt.condition,
                effects: JSON.stringify(alt.effects),
                precondition: alt.precondition,
                skillId: k
            }

            console.log(dbAlt)

            DbController.AddAlternative(dbAlt);
        }

    }
}

function addSkillsToDb() {
    for (const k of skillNameKeys) {
        const meta: SkillMeta = skillMetas[k];
        const name: string[] = skillNames[k];
        const data: SkillData = skillDatas[k];

        if (!name || !meta || !data) continue;


        const sb: SkillDB = {
            baseCost: meta.baseCost,
            groupId: meta.groupId,
            iconId: meta.iconId,
            skillId: k,
            name: name[1],
            rarity: data.rarity,
            skillOrder: meta.order
        }

        // console.log(sb)
        DbController.AddSkill(sb);


        for (const alt of data.alternatives) {
            const dbAlt: SkillAltDB = {
                baseDuration: alt.baseDuration,
                condition: alt.condition,
                effects: JSON.stringify(alt.effects),
                precondition: alt.precondition,
                skillId: k
            }

            // console.log(dbAlt)
            DbController.AddAlternative(dbAlt);
        }

    }
}
