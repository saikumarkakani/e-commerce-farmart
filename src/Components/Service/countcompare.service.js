import { read } from "./context.service";



const countCompareUrl = "http://localhost:4002/getcountcompare";


//create a function
export function getcountCompare(){
    return read(countCompareUrl);
}
