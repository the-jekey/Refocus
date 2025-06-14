import React from 'react'
import Product from './Product'

const Products = () => {
       var products = [
              { title: "jekey", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloribus minima atque quia eum expedita nam odit voluptatum nemo voluptates reprehenderit in quaerat omnis, mollitia nulla eligendi at! Doloribus, voluptas.", live: true, case: false, }
       ]

       return (
              <div className=''>
                     <Product />
              </div>
       )
}

export default Products
