import Styles from "../../styles/Home.module.css";
import { ProductsCard } from "./ProductsCard";
import { products } from "../../public/Products";
const MainContent = () => {
  return (
    <div>

      <h1 className=" flex w-full h-32 mt-16 align-middle justify-center text-4xl text-center">
      Products from trusted brands<br></br> Delivered worldwide
      </h1>

     {Object.keys(products).map(
      (element,idx)=>{
        return(
          <div className=" align-middle text-center ProductSection">
            
            <div className={((idx%2==0)?Styles.productSection:" ")+" flex flex-row justify-evenly "}>
              <ProductsCard id={products[element][Object.keys(products[element])[0]].productid} rating={products[element][Object.keys(products[element])[0]].rating} description={products[element][Object.keys(products[element])[0]].product_description}/>
              <ProductsCard id={products[element][Object.keys(products[element])[1]].productid} rating={products[element][Object.keys(products[element])[1]].rating} description={products[element][Object.keys(products[element])[1]].product_description} />
              <ProductsCard id={products[element][Object.keys(products[element])[2]].productid} rating={products[element][Object.keys(products[element])[2]].rating} description={products[element][Object.keys(products[element])[2]].product_description} />

            </div>

          </div>
        )
      }
     )}
      
    </div>
  );
};


export default MainContent;