import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Posts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfileProps = {
}

function Profile(props: ProfileProps ) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                    />
        </div>
    )
}

export default Profile;