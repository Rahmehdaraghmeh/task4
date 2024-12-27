import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function Detailscatog() {
    const {slug}=useParams();
    const {data,isLoading,error}=useFetch(`https://dummyjson.com/products/category/${slug}`);
console.log(data);

    if (isLoading) {
      return <Loading/>
    }
  return (
    <div className='d-flex justify-content-between flex-wrap  gap-2'>
    {error ? <div className="alert alert-danger">{error}</div> : ""}
    {data.products.map((product) => (
      <div key={product.id} style={{flex:'33.3%'}} className='border border-black p-2'>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="" />
        <Link to={`/detail/${product.id}`} className="m-3">Details</Link>
      </div>
    ))}
  </div>
  )
}
