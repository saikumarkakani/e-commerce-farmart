import { Button } from "react-bootstrap";

export function DeletePopup(props){
    return(
     <div>
        <div>Do You Want delete Item</div>
        <Button className="btn btn-danger mt-5 ms-2" onClick={()=> props.deleteWishListItem()}>Yes</Button>
        <Button className="btn btn-success mt-5 ms-3"> No </Button>
     </div>
    );
}
