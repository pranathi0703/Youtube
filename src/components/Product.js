import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    const [products,setProducts]=useState([{}])
    useEffect(()=>{
       axios.get('https://dummyjson.com/products')
       .then(res=>setProducts(res.data.products))
    },0)
    console.log(products)
    return(
       <>
       {
        products.map((element,index)=>{
            return(
                <div class="card float-start" style={{width:250}} >
     <img src={element.thumbnail} class="card-img-top  height=150 " alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
     <div class="card-body">
    <Link href="#" class="card-link">Card link</Link>
    <Link href="#" class="card-link">Another link</Link>
  </div>
</div>
            )
        })
       }
       
       </>
    )
}