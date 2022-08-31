import React from 'react';
import styles from './users.module.css'
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type UsersType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {  // pagesCount поменял на 10
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p ? styles.selectedPage : undefined}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : require('../assets/img/ava.jpg')}
                                 alt="" className={styles.userPhoto}/>
                             </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    usersAPI.unFollowUsers(el.id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.unFollow(el.id)
                                        }
                                    })
                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    usersAPI.followUsers(el.id).then(data => {
                                        if (data.resultCode == 0) {
                                            props.follow(el.id)
                                        }
                                    })
                                }}>Follow</button>
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
}