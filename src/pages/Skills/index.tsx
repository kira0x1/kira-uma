import { useState, useEffect } from "preact/hooks";
import { SkillViewer } from "../../components/SkillViewer";
import { SkillResponse, DbController } from "../../db";
import LoadingSpinner from "../../components/LoadingSpinner";

export function Skills() {
    const [skills, setSkills] = useState<SkillResponse[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getSkills();
    }, []);

    async function getSkills() {
        setLoading(true);

        const res = await DbController.getSkills(10);

        if (res) {
            setSkills(res);
        }

        setLoading(false);
    }

    return (
        <div class="skills-page">
            {isLoading ? <LoadingSpinner /> : <SkillViewer skills={skills} />}
        </div>
    );
}
