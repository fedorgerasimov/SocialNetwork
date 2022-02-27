import React from "react";

type TechnologeisList = {
    list: string
}
export const Technologeis = (props: TechnologeisList) => {
    return (<div>
            <ul>
                <li>{props.list}</li>
            </ul>
        </div>
    )
}

