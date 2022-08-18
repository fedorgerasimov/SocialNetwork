import React from 'react';
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";


export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers (response.data.items)
            })
    }

    return (
        <div>
            {
                props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>

                            <img src={el.photos.small != null ? el.photos.small : require('../assets/img/ava.jpg') } alt="" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {props.unFollow(el.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(el.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.country"}</div>
                            <div>{"el.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;