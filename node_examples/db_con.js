//import mysql2
let mysql = require('mysql2');


//create a connection
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sai@1234',
    database: 'farmart'
});

//create a function to start connection
function startConnection() {
    con.connect((err) => {
        if (err) throw err;
        console.log("connected")
    })
}

//for farmart get products 
async function getProducts() {
    startConnection();
    let data = await con.promise().query("select *from products");
    return data[0];
}



//for farmart get user details
async function getuserDetails() {
    startConnection();
    let data = await con.promise().query("select *from userdetails");
    return data[0];
}


//for Save farmart userdetails
async function userDetails(Name, Email, PhoneNumber, Password, userType) {
    startConnection();
    let data = await con.promise().query(` insert into userdetails(Name,Email,PhoneNumber,Password,userType) values("${Name}","${Email}",${PhoneNumber},${Password},"${userType}")`);
    return data[0];
}


//create a post api for wishlist
async function addWishList(productid) {
    // start connection
    startConnection();
    let data = await con.promise().query(`insert into wishlist(productid) values(${productid})`);
    return data[0];

}
//getWishlist get
async function getWishList() {
    startConnection();
    let data = await con.promise().query("select * from products as p join wishlist as w on p.id = w.productid union all select *from justland as j join wishlist as w on j.id = w.productid");
    return data[0];
}


//create a post api for addcart
async function addcart(productid) {
    startConnection();
    let data = await con.promise().query(`insert into addcart(productid) values(${productid})`);
    return data[0];
}

//create addcart get api 
async function getaddCart() {
    startConnection();
    let data = await con.promise().query(" select * from products as p join addcart as a on p.id = a.productid union all  select *from justland as j join addcart as a on j.id = a.productid ");
    return data[0];

}


//create a post api for wishlist
async function addCompare(productid) {
    // start connection
    startConnection();
    let data = await con.promise().query(`insert into compare(productid) values('${productid}');`);
    return data[0];

}
//getWishlist get
async function getCompare() {
    startConnection();
    let data = await con.promise().query("select * from products as p join compare as c on p.id = c.productid union all select *from justland as j join compare as c on j.id = c.productid");
    return data[0];
}

//wishlist delete item post api
async function DeletewishlistItem(id) {
    startConnection();
    let data = await con.promise().query(`delete from wishlist where id = ${id}`);
    return data[0];
}
//addcart delete post api
async function DeleteAddcartItem(id) {
    startConnection();
    let data = await con.promise().query(` delete from addcart where id =${id}`);
    return data[0];
}
//Compare delete item post api
async function DeleteCompareItem(id) {
    startConnection();
    let data = await con.promise().query(`delete from compare  where id = ${id}`);
    return data[0];
}


//for farmart get justLand
async function getjustLandProducts() {
    startConnection();
    let data = await con.promise().query("select *from justland");
    return data[0];
}

//Save Products details in products with image
async function SavejustLand(productName, productdetails, newprice, oldprice, offer, Quantity, productImage) {
    startConnection();
    let data = await con.promise().query(` insert into justland(productName, productdetails, newprice, oldprice, offer,Quantity, productImage) values('${productName}', '${productdetails}', ${newprice}, ${oldprice}, ${offer},${Quantity} ,'${productImage}')`);
    return data[0];
}


//Save Products details in Top Savers with image
async function SaveTopsavers(productName, productdetails, newprice, oldprice, offer, Quantity, productImage) {
    startConnection();
    let data = await con.promise().query(`insert into products(productName, productdetails, newprice, oldprice, offer,Quantity, productImage) values('${productName}', '${productdetails}',${newprice}, ${oldprice}, ${offer} , ${Quantity},'${productImage}')`);
    return data[0];
}

//for addcart count get api
async function countAddcart() {
    startConnection();
    let data = await con.promise().query("select count(id) as count from addcart;");
    return data[0];
}
//for wishlist count get api
async function countWishlist() {
    startConnection();
    let data = await con.promise().query("select count(id) as count from wishlist;");
    return data[0];
}
//for Compare count get api
async function countCompare() {
    startConnection();
    let data = await con.promise().query("select count(id) as count from compare;");
    return data[0];
}

//for search Products item in Top Savers
async function searchProduct(productName) {
    startConnection();
    let data = await con.promise().query(`select * from products where productName like '%${productName}%'`);
    return data[0];
}





module.exports = {
    //for farmart getproducts
    getProductsData: async () => getProducts(),
    //for save Top Savers
    saveTopsaversProducts: async (productName, productdetails, newprice, oldprice, offer, Quantity, productImage) => SaveTopsavers(productName, productdetails, newprice, oldprice, offer, Quantity, productImage),




    //for farmart getjustLand Products
    getjustLandData: async () => getjustLandProducts(),
    //for save Just Land 
    saveJustLandProducts: async (productName, productdetails, newprice, oldprice, offer, Quantity, productImage) => SavejustLand(productName, productdetails, newprice, oldprice, offer, Quantity, productImage),


    //for get user details
    getuserDetailsData: async () => getuserDetails(),
    //for formart Save User Details
    saveuserDetails: async (Name, Email, PhoneNumber, Password, userType) => userDetails(Name, Email, PhoneNumber, Password, userType),

    //for save wishlist data
    addWishListData: async (productid) => addWishList(productid),
    //for get wishlist data
    getWishListData: async () => getWishList(),

    //for save addcart
    addCart: async (productid) => addcart(productid),
    //for get addcart
    addcartData: async () => getaddCart(),

    //for save addcart
    addCompareData: async (productid) => addCompare(productid),
    //for get addcart
    getComparetData: async () => getCompare(),

    //delete wishlist item
    DeletewishlistData: async (id) => DeletewishlistItem(id),
    //delete Addcart item
    DeleteAddcartData: async (id) => DeleteAddcartItem(id),
    //delete Compare item
    DeleteCompareData: async (id) => DeleteCompareItem(id),

    //count addcart
    countAddcartData: async () => countAddcart(),
    //count wishlist
    countWishlistData: async () => countWishlist(),
    //count compare
    countCompareData: async () => countCompare(),

    //for searching Products item Top savers
    searchingProductItem: async (productName) => searchProduct(productName),
}