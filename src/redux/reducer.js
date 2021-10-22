const defaultState = {
    login: "developer21",
    password: "123456",
    logged: false
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CORRECT_LOGIN_AND_PASSWORD":
            return {...state, logged: true}
        case "NOT_CORRECT_LOGIN_AND_PASSWORD":
            return {...state, logged: false}
        default:
            return state
    }
}