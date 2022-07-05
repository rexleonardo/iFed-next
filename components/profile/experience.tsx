import React, { FunctionComponent } from "react";
import Skill from "./skills";
import { SkillObject } from "./ReadUser";
import Industry from "./industries";
import Select from "react-select";
import Button from "./Button";

interface Props {
    key: number;
    level: string;
    skills: SkillObject[];
    industries: string[];
}

const Experience: FunctionComponent<Props> = (props) => {

    const skills = [
        { value: "angular", label: "Angular" },
        { value: "html", label: "HTML" }
    ]

    const industries = [
        { value: "architecture", label: "Architecture" },
        { value: "marinebiology", label: "Marine Biology" }
    ]

    const [hideLevel, setHideLevel] = React.useState(false);
    const [hideSkills, setHideSkills] = React.useState(false);
    const [hideEdit, setHideEdit] = React.useState(false);
    const [hideIndustries, setHideIndustries] = React.useState(false);

    const editClick = () => {
        setHideLevel(true);
        setHideEdit(true);
        setHideSkills(true);
        setHideIndustries(true);
    }

    const handleLevel = () => {
        return (
            hideLevel ?
                <select className="updateLevel px-1 border border-slate-500 border-solid rounded-sm" placeholder={props.level}>
                    <option>Analyst</option>
                    <option>Consultant</option>
                    <option>Manager</option>
                    <option>Senior Manager</option>
                </select>
                :
                <div>{props.level}</div>
        )
    }
    const handleButton = () => {
        return (
            hideEdit ?
                <Button
                    handleClick={(event) => {
                        editClick();
                    }}
                    img={"/assets/images/profile/save.png"}
                />
                :
                <Button
                    handleClick={(event) => {
                        editClick();
                    }}
                    img={"/assets/images/profile/pencil.png"}
                />
        )
    }

    const handleSkills = () => {
        return (
            hideSkills ?
                <div className="mb-3">
                    <Select
                        options={skills}
                        isMulti

                    />
                </div>
                :
                <div className="flex flex-wrap mb-3">
                    {props.skills.map((skill, x) => (
                        <Skill
                            key={x}
                            value={skill}
                        />
                    ))}

                </div>
        )
    }
    const handleIndustries = () => {
        return (
            hideIndustries ?
                <div className="mb-3">
                    <Select
                        options={industries}
                        isMulti

                    />
                </div>

                :
                <div className="flex flex-wrap mb-3">
                    {props.industries.map((industry, x) => (
                        <Industry
                            key={x}
                            value={industry}
                        />
                    ))}
                </div>
        )
    }
    return (
        <>
            <div className="experienceLabel bg-black text-xl font-bold text-center text-white py-2 mx-4 md:mx-auto md:w-6/12 rounded-lg mb-4">
                <div className="label text relative">
                    Experience
                    {handleButton()}
                </div>
            </div>
            <div className="basicInfo bg-white text-center text-black p-2 mx-4 md:mx-auto md:w-6/12 rounded-lg mb-4">
                <div className="explabel text-base font-bold">Level</div>
                <div className="expLevel text-sm mb-3">{handleLevel()}</div>
                <div className="explabel text-base font-bold">Skills</div>
                {handleSkills()}
                <div className="explabel text-base font-bold">Industries</div>
                {handleIndustries()}
            </div>

        </>

    )
}

export default Experience;