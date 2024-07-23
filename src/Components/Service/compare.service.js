import { read } from "./context.service";



const wishlistURL ="http://localhost:4002/getcompare";

export function getcompareData(){
    return read(wishlistURL);
}
