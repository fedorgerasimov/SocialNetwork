import React from "react";
import s from './Dialogs.module.css'

type DialogsType  ={

}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Jameson</div>
                <div className={s.dialog}>Bob</div>
                <div className={s.dialog}>Jane</div>
                <div className={s.dialog}>Arnold</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>What's up?</div>
                <div className={s.message}>What is your hobby?</div>
                <div className={s.message}>Hello</div>
            </div>
        </div>
    )
}