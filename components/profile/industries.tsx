import React, { FunctionComponent } from "react";

interface Props {
    key: number;
    value: string;
}

const Industry: FunctionComponent<Props> = (props) => {
    return (
        <div className="expIndustry text-sm text-white bg-gray-500 rounded-full px-2 m-1">{props.value}</div>
    )
}

export default Industry;