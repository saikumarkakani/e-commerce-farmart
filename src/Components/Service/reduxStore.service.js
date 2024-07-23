import { createStore } from "redux";


const reducer = (state,action)=>{
    switch(action.type){
        case "login":
            return{
                ...state, user : action.data
            }
            case "products":
                return{
                    ...state, products: action.data
                }
                
    }

}

const store  = createStore(reducer);

export default store;
