const userState = {}

export const user = (state = userState , action) =>{
    switch(action.type){
        case 'STORE_USER_DATA':
            console.log(action);
                return action.data
            case 'CLEAR_USER_DATA':
                return {};
            default: 
                return state;
    }
}