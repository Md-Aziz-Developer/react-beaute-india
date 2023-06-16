const initialState = {};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,                
                user : action.user,
                token : action.token,
                check : true,         
            }
            break;
        case 'PROFILE_UPDATE':
            return {
                ...state,
                user : action.user,                
            }
            break;

        case 'LOGOUT':
            return {
                
            }
            break;
    
        default:
            return state;
            break;
    }
}

export default auth;