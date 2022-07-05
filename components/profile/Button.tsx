import React, { FunctionComponent } from "react";
import Image from "next/image";

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    img: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button className="editButton visible active:bg-gray-300 rounded-full w-1/6 invert absolute right-0 top-0" onClick={props.handleClick}>
            <Image
                src={props.img}
                alt={"edit.png"}
                width="15"
                height="15"
            />
        </button>
    )
}
export default Button;