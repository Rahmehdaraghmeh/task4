import React from 'react'
import useFetch from '../../assets/hooks/useFetch'
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';
export default function Catogare() {
  const {data,isLoading,error}=useFetch('https://dummyjson.com/products/categories')
  console.log(data);
  if (isLoading) {
      return <Loading />;
    }
  return (
    <div className='d-flex  justify-content-around flex-wrap bg-dark' >
          {error ? <div className="alert alert-danger">{error}</div> : ""}
          {
            data.map((catoge)=>
        

<div className="card m-5" style={{flex: '200px'}}>

  <div className="card-body">
    <h5 className="card-title">{catoge.slug}</h5>
    <p className="card-text">{catoge.name}</p>
    <Link  className="btn btn-primary mb-0 ms-0"  to={`/detailcat/${catoge.slug}`} >Details</Link>
  </div>
</div>


            )
          }
    </div>
  )
}
