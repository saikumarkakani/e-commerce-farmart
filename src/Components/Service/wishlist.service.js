import { read } from "./context.service";


const wishlistURL ="http://localhost:4002/getWishList";

export function getWishlistData(){
    return read(wishlistURL);
}
