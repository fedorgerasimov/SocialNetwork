import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React from "react";

export type FormDataType = { newMessageBody: string}
const maxLength20 = maxLengthCreator(20)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength20]}
                       placeholder={"Enter your message"}
                       name={"newMessageBody"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export default reduxForm<FormDataType>({form: 'dialog-add-message-form'})(AddMessageForm)