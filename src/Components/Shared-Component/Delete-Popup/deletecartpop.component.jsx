import { Button } from "react-bootstrap";




export function DeleteAddcart(props){
    return(
        <div>
            <div>Do you want delete Item</div>
            <Button className="btn btn-danger mt-5 ms-2" onClick={()=>props.deleteAddCartId()}>Yes</Button>
            <Button  className="btn btn-success mt-5 ms-2">No</Button>
        </div>

    );
}