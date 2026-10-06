import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/Product'
import './categoryPage.css'
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading'
import PageTransition from '../../components/PageTransition'

function CategoryPage() {

    const { category } = useParams()

    const [categoryProducts , setRelatedProducts] =useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setRelatedProducts(data);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [category]);

    console.log(categoryProducts);

  return (

    <PageTransition key={category}>
<div className="category_products">
        {loading ? (
        <SlideProductLoading key={category} />
        ) : (
        <div className="container">

            <div className="top_slide">
                <h2>{category} : {categoryProducts.limit}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat odit, totam, voluptatum neque mollitia fugit delectus ipsum dolore repellat deserunt at animi, asperiores laborum facere qui voluptates cumque unde.</p>
            </div>


            <div className="products">
                {categoryProducts.products.map((item, index) => (
                    <Product item={item} key={index} />
                ))}
            </div>
        </div>
        )}
    </div>
    </PageTransition>
    
  )
}

export default CategoryPage
