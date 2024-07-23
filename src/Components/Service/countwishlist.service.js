import { read } from "./context.service";



const countwishlistUrl = "http://localhost:4002/getcountwishlist";


//create a function
export function getcountwishlist(){
    return read(countwishlistUrl);
}
