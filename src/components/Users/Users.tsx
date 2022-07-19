import React from 'react';
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0)
    {
            props.setUsers ([

            {
                id: 1,
                photoUrl: 'https://cdn1.iconfinder.com/data/icons/halloween-2176/60/004_-_Ghost_Smile-512.png',
                followed: false,
                fullName: 'Jameson',
                status: 'Junior',
                location: {city: 'Wroclaw', country: 'Poland'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn1.iconfinder.com/data/icons/halloween-2174/60/039_-_Ghost_Happy-512.png',
                followed: true,
                fullName: 'Bob',
                status: 'Middle',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn1.iconfinder.com/data/icons/halloween-2175/58/098_-_Cute_Ghost-512.png',
                followed: true,
                fullName: 'Anna',
                status: 'Pre-Junior',
                location: {city: 'Tallinn', country: 'Latvia'}
            },
    ])

    }

    return (
        <div>
            {
                props.usersPage.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img src={el.photoUrl} alt="" className={styles.userPhoto}/>
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
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;