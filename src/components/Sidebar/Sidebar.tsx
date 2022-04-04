import React from "react";
import {SidebarPageType} from "../../redux/state";
import {SidebarItem} from "./SidebarItem";

type SidebarProps = {
    stateData: SidebarPageType
}

export const Sidebar = (props: SidebarProps) => {

    const sidebarElements = props.stateData.friendsPage.map(el => <SidebarItem id={el.id} name={el.name} hobby={el.hobby}/>)
    console.log(sidebarElements)
    return (
        <div>
            {sidebarElements}
        </div>
    )
}