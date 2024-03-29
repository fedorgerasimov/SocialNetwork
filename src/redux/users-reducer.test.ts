import { followSuccessAC, unFollowSuccessAC, usersReducer, UserType} from "./users-reducer";


let initialState: any//InitialStateType
let userId2: number
let userId3: number
let newStatus: boolean

beforeEach(() => {
    userId2 = 2
    userId3 = 3
    newStatus = false

    initialState = {
        users:
            [
                {
                    id: 1, followed: false, name: 'Jameson', status: 'Junior', location:
                        {city: 'Wroclaw', country: 'Poland'}
                },
                {
                    id: 2, followed: true, name: 'Bob', status: 'Middle', location:
                        {city: 'Brest', country: 'Belarus'}
                },
                {
                    id: 3, followed: true, name: 'Anna', status: 'Pre-Junior', location:
                        {city: 'Tallinn', country: 'Latvia'}
                },
            ] as Array<UserType>,
    }
})

test('correct status followed should be changed', () => {
    let endState = usersReducer(initialState,  followSuccessAC(userId2))
    expect(endState.users.length).toBe(3);
    expect(endState.users[0].followed).toBe(false)

    endState = usersReducer(initialState, unFollowSuccessAC(3))
    expect(endState.users[2].followed).toBe(false)
})


