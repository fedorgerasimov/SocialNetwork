import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";



type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const  ProfileInfo =(props: ProfileInfoPropsType) =>{
    if (!props.profile) { // если null or undefined
        return <Preloader/>
    }
    return (
        <div>
          {/*  <div>
                <img src="https://anjalisk96.files.wordpress.com/2017/09/top-social-networking-sites.jpg?w=693&zoom=2"
                     alt="social-network"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

