import { read } from "./context.service";

const addCartURL = "http://localhost:4002/getaddCart";

//for addcart get api
export function getaddCartData(){
    return read(addCartURL);
}
