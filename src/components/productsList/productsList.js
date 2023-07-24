import ProductDisplay from "./productDisplay";

const ProductsList = ({DummyData})=>{
    return(
       <div>
       {DummyData.map((DummyData)=>(
        <ProductDisplay
        key={DummyData.id}
        name={DummyData.name}
        image={DummyData.image}
        description={DummyData.description}
         />
       ))}
       </div>
    )
}
export default ProductsList;