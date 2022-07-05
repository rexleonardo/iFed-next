import React, { FunctionComponent } from "react";
import { SkillObject } from "./ReadUser";

interface Props {
    key: number;
    value: SkillObject;
}

const Skill: FunctionComponent<Props> = (props) => {
    return (
        <div className="expSkill text-sm text-white bg-gray-500 rounded-full px-2 m-1">{props.value.skillName + " | " + props.value.skillLevel}</div>
    )
}

export default Skill;