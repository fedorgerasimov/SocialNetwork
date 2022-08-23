import React from 'react';
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages =[]
        for (let i = 1; i <10 ; i++) {  // pagesCount поменял на 10
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : undefined}
                        onClick={(e)=>{this.onPageChanged(p)}}
                        >{p}</span>
                    })}
                </div>
                {this.props.users.map(el => <div key={el.id}>
                    <span>
                        <div>

                            <img src={el.photos.small != null ? el.photos.small : require('../assets/img/ava.jpg')}
                                 alt="" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(el.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(el.id)
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
}

export default Users