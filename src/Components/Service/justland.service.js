import { read } from "./context.service";


const ProductUrl = "http://localhost:4002/getjustLand";


//create a function
export function getjustLand(){
    return read(ProductUrl);
}
