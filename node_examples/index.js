
// let http = require("http");

// http.createServer((req,res)=>{
//     res.write("hi ra .....");
//     res.end();

// }).listen(4001);


//inport express
let express = require("express");
//import db_con file
let db_con = require("./db_con");
//import cors
let cors = require("cors");
//import express-formidable
let formidable = require("express-formidable");


//create a object
let app = express();
//use cors
app.use(cors());
//use express-formidable
app.use(formidable());


//for connection
app.listen(4002);





//create a get api for user details
app.get("/getuserDetails", async (req, res) => {
    let data = await db_con.getuserDetailsData();
    res.write(JSON.stringify(data));
    res.end();
})
//create a post api for save users Details
app.post("/userDetails", async (req, res) => {
    let data = await db_con.saveuserDetails(req.fields.Name, req.fields.Email, req.fields.PhoneNumber, req.fields.Password, req.fields.userType);
    res.redirect("http://localhost:3000/Login");
    res.end();
})

//create post api for wishlist
app.post("/addWishList", async (req, res) => {
    let { productid } = req.fields;
    await db_con.addWishListData(productid);
    res.redirect("http://localhost:3000/wishlist");
    res.end();

});
//getwishlistData
app.get("/getWishList", async (req, res) => {
    let data = await db_con.getWishListData();
    res.write(JSON.stringify(data));
    res.end();
});

//addcart post api
app.post("/addcart", async (req, res) => {
    let { productid } = req.fields;
    await db_con.addCart(productid);
    res.redirect("http://localhost:3000/cart");
    res.end();
});

//addcart get api
app.get("/getcompare", async (req, res) => {
    let data = await db_con.getComparetData();
    res.write(JSON.stringify(data));
    res.end();
});

//addcart post api
app.post("/addCompare", async (req, res) => {
    let { productid } = req.fields;
    await db_con.addCompareData(productid);
    res.redirect("http://localhost:3000/compare");
    res.end();
});

//addcart get api
app.get("/getaddCart", async (req, res) => {
    let data = await db_con.addcartData();
    res.write(JSON.stringify(data));
    res.end();
});






//for delete whishlist data 
app.post("/deleteWishlistItem", async (req, res) => {
    let data = await db_con.DeletewishlistData(req.fields.id);
    res.end();
})
//delete Addcart Item post api
app.post("/deleteAddcartItem", async (req, res) => {
    let data = await db_con.DeleteAddcartData(req.fields.id);
    res.end();
})
//delete Compare Item post api
app.post("/deleteCompareItem", async (req, res) => {
    let data = await db_con.DeleteCompareData(req.fields.id);
    res.end();
})






//create a justland get api
app.get("/getJustland", async (req, res) => {
    let data = await db_con.getjustLandData();
    res.write(JSON.stringify(data));
    res.end();
})

//create Save api for product details
app.post("/savejustLand", async (req, res) => {
    let { productName, productdetails, newprice, oldprice, offer, Quantity, productImage } = req.fields;
    await db_con.saveJustLandProducts(productName, productdetails, newprice, oldprice, offer,Quantity, productImage );
    res.redirect('http://localhost:3000');
    res.end();
})

//create a get api for Top Savers
app.get("/getproducts", async (req, res) => {
    let data = await db_con.getProductsData();
    res.write(JSON.stringify(data));
    res.end();
})
//create Save api for Top Savers
app.post("/saveTopsavers", async (req, res) => {
    let {productName, productdetails, newprice, oldprice, offer,Quantity, productImage} = req.fields;
    await db_con.saveTopsaversProducts(productName, productdetails, newprice, oldprice, offer,Quantity, productImage);
    res.redirect('http://localhost:3000');
    res.end();
})

//create get api for addcart count
app.get("/getcount", async(req,res)=>{
    let data = await db_con.countAddcartData();
    res.write(JSON.stringify(data));
    res.end();

})
//create get api for addcart count
app.get("/getcountwishlist", async(req,res)=>{
    let data = await db_con.countWishlistData();
    res.write(JSON.stringify(data));
    res.end();

})//create get api for addcart count
app.get("/getcountcompare", async(req,res)=>{
    let data = await db_con.countCompareData();
    res.write(JSON.stringify(data));
    res.end();

})

//for searching product item using post api
app.post("/searchProduct", async(req,res)=>{
    let data = await db_con.searchingProductItem(req.fields.productName);
    res.write(JSON.stringify(data));
    res.end();

})


