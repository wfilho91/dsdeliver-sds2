import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props={
    products:Product[],
}

function formatPrice(price:number){
    const formatter = Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'

    })
    return formatter.format(price);
}

function ProductsList({products}:Props){
    
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
            {products.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))}
            </div>

        </div>
    )
}

export default ProductsList;