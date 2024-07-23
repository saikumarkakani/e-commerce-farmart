import { read } from "./context.service";



const countCartUrl = "http://localhost:4002/getcount";


//create a function
export function getcountCart(){
    return read(countCartUrl);
}
