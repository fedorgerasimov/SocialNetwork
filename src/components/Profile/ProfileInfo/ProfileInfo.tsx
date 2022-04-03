import React from "react";
import s from './ProfileInfo.module.css'


export const  ProfileInfo =(props: any) =>{
    return (
        <div>
            <div>
                <img src="https://anjalisk96.files.wordpress.com/2017/09/top-social-networking-sites.jpg?w=693&zoom=2" alt="social-network"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

