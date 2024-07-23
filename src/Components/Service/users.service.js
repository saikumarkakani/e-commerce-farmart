import { read } from "./context.service";



const userUrl = "http://localhost:4002/getuserDetails";


//create a function
export function getuserDetails(){
    return read(userUrl);
}

