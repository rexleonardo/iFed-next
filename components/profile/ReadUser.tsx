import React from "react";
import Image from "next/image";
import BasicInformation from "./basicInformation";
import Experience from "./experience";

export type SkillObject = {
    skillName: string;
    skillLevel: SkillLevel
}
type ProfileStatus = "active" | "inactive" | "new"
type ProfileGroup = "Digital Analytics" | "FED" | "Mobile" | "SFCC" | "Sitecore" | "UI/UX"
type SkillLevel = "Beginner" | "Intermediate" | "Expert"

interface Profile {
    id: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    resourceGroup: ProfileGroup;
    contactNo: string;
    email: string;
    status: ProfileStatus;
    image: string;
    level: string;
    skills: SkillObject[];
    industries: string[];
}

let currentUser: Profile = {
    id: 123,
    firstName: "George",
    lastName: "Costanza",
    email: "gcostanza@deloitte.com",
    contactNo: "0917-123-4567",
    resourceGroup: "Digital Analytics",
    status: "active",
    image: "/assets/images/profile/George-costanza.jpg",
    //to be fetched
    level: "Analyst",
    skills: [{ skillName: "Angular", skillLevel: "Beginner" }, { skillName: "ReactJS", skillLevel: "Beginner" }, { skillName: "HTML5", skillLevel: "Intermediate" }],
    industries: ["Architecture", "Sports", "Real Estate", "Marine Biology"]
}

const UserProfile = () => {
    return (
        <>
            <div className="profileBanner py-10 bg-black bg-no-repeat bg-cover bg-blend-screen flex flex-col md:flex-row md:py-5" style={{
                backgroundImage: "url(/assets/images/profile/profile-bg.png)",
            }}>
                <div className="profileImage h-23 w-32 max-w-[250px] md:h-auto mx-auto md:order-last md:basis-1/4 md:my-auto md:py-5 md:mr-24 lg:mr-32">
                    <Image
                        className="rounded-full"
                        src={currentUser.image}
                        alt={currentUser.firstName + currentUser.lastName + ".png"}
                        width={100}
                        height={100}
                        layout="responsive"
                    />
                </div>
                <div className="profileNameContainer flex flex-col md:flex-row md:ml-24 md:py-5 md:basis-3/4 lg:ml-32">
                    <div className="profileName text-5xl font-bold text-center text-white md:flex md:text-7xl"><span className="md:self-center">{currentUser.firstName}</span></div>
                    <div className="profileName text-2xl font-bold text-center text-white translate-y-[10%] md:flex md:ml-3 md:text-3xl"><span className="shadow-black md:self-center">{currentUser.lastName}</span></div>
                </div>
            </div>
            <div className="profileInformation py-5 bg-slate-300 flex flex-col grow">
                <BasicInformation
                    key={currentUser.id + 10}
                    firstName={currentUser.firstName}
                    lastName={currentUser.lastName}
                    email={currentUser.email}
                    contactNo={currentUser.contactNo}
                />
                <Experience
                    key={currentUser.id - 10}
                    level={currentUser.level}
                    skills={currentUser.skills}
                    industries={currentUser.industries}
                />
            </div>
        </>
    )
}



export default UserProfile;