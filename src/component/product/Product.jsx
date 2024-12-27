import React from 'react'
import useFetch from '../../assets/hooks/useFetch'
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

export default function Product() {
    const {data,isLoading,error}=useFetch('https://dummyjson.com/products?limit=6')
    console.log(data);
    if (isLoading) {
        return <Loading />;
      }
  return (
    <div className=' d-flex justify-content-between flex-wrap gap-4'>
    {error ? <div className="alert alert-danger">{error}</div> : ""}
    {data.products.map((product) => (
      <div key={product.id} className='m-2 border border-black p-2' style={{flex:'33.3%'}}> 
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="" />
        <Link to={`/detail/${product.id}`} className="m-3">Details</Link>
      </div>
    ))}
  </div>
  )
}
