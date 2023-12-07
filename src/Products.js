import Product from "./Product";
function Products()
{
    let products=[
        {id:1,name:"apple", price:"155000 Rs", url:"https://cdn1.smartprix.com/rx-iD8y25iVP-w420-h420/apple-iphone-12.jpg"},
        {id:2,name:"Oppo F17", price:"20000 Rs" ,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcTAsZaMR2xCJVMeNQ8DQhKJvstJ3kgak4Mr_zRlCz_Nz3UmBSrton02nbno_VOUVg_s&usqp=CAU"},
        {id:3,name:"laptop",price:"150000 Rs", url:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16TLP?ver=5c8b&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"}
    ]
    return(
        <div className='products'>
            {
                products.map((product)=>{
                return(
                <Product name={product.name} price={product.price} url={product.url} key={product.id}></Product>
                )
                })
            }
   
        </div>
    )
}
export default Products;