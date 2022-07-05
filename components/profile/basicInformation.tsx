import React, { FunctionComponent } from "react";
import Button from "./Button";

interface Props {
    key: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string;
}

const BasicInformation: FunctionComponent<Props> = (props) => {

    const [hideFirstName, setHideFirstName] = React.useState(false);
    const [hideLastName, setHideLastName] = React.useState(false);
    const [hideEmail, setHideEmail] = React.useState(false);
    const [hideContact, setHideContact] = React.useState(false);
    const [hideEdit, setHideEdit] = React.useState(false);

    const editClick = () => {
        setHideFirstName(true);
        setHideLastName(true);
        setHideEmail(true);
        setHideContact(true);
        setHideEdit(true);

    }
    const handleFirstName = () => {
        return (
            hideFirstName ? <input className="updateFirstName px-1 border border-slate-500 border-solid rounded-sm" type="text" placeholder={props.firstName} />
                : <div>{props.firstName}</div>
        )
    }
    const handleLastName = () => {
        return (
            hideLastName ? <input className="updateLastName px-1 border border-slate-500 border-solid rounded-sm" type="text" placeholder={props.lastName} />
                : <div>{props.lastName}</div>
        )
    }
    const handleEmail = () => {
        return (
            hideEmail ? <input className="updateEmail px-1 border border-slate-500 border-solid rounded-sm" type="text" placeholder={props.email} />
                : <div>{props.email}</div>
        )
    }
    const handleContact = () => {
        return (
            hideContact ? <input className="updateContactNo px-1 border border-slate-500 border-solid rounded-sm" type="text" placeholder={props.contactNo} />
                : <div>{props.contactNo}</div>
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
    return (
        <>
            <div className="basicInfoLabel bg-black text-xl font-bold text-center text-white py-2 mx-4 md:mx-auto md:w-6/12 rounded-lg mb-4">
                <div className="label text relative">
                    Basic Information
                    {handleButton()}
                </div>
            </div>
            <div className="basicInfo flex flex-col bg-white text-center text-black p-2 mx-4 md:mx-auto md:w-6/12 rounded-lg mb-4">
                <div className="basicInfoText grid grid-cols-2">
                    <div className="flex-auto">
                        <div className="bscInfLabel text-base font-bold">First Name</div>
                        <div className="bscInfFirstName text-sm">{handleFirstName()}</div>
                    </div>
                    <div className="flex-auto">
                        <div className="bscInfLabel text-base font-bold">Last Name</div>
                        <div className="bscInfFirstName text-sm">{handleLastName()}</div>
                    </div>
                    <div className="flex-auto">
                        <div className="bscInfLabel text-base font-bold">Email Adress</div>
                        <div className="bscInfFirstName text-sm">{handleEmail()}</div>
                    </div>
                    <div className="flex-auto">
                        <div className="bscInfLabel text-base font-bold">Contact Number</div>
                        <div className="bscInfFirstName text-sm">{handleContact()}</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BasicInformation;