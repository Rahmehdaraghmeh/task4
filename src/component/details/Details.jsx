import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../loading/Loading';

export default function Details() {
  const {id}=useParams();
  const {data,isLoading,error}=useFetch(`https://dummyjson.com/products/${id}`);

  if (isLoading) {
    return <Loading />;
  }
    return (
      <>
        {error ? <div className="alert alert-danger">{error}</div> : ""}
  <div className='container '>
    <div className="row m-4">
   <div className="card col-md-4"  >
    <img src={data.thumbnail} className="card-img-top" alt="..." />
    <div className="card-body">
      <h2 className="card-title">{data.title}</h2>
      <h3 className='badge rounded-pill text-bg-secondary fs-3'>{data.category}</h3>
    </div>
  </div>
  <div className='col-md-8'>
  <p className="card-text">{data.description}</p>
  <h3>product images</h3>
  {
  data.images.map(img=>
    
  <img src={img} className='w-25'/>
  )}
  <p><span className='fw-bold'>Tags: </span>{data.tags.join(' , ')}</p>
  <p><span className='fw-bold'> price :</span> {data.price} $</p>
  </div>
  </div>
  </div>
  </>
    ) 
  
}
