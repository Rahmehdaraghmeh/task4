import React from 'react'
import Loading from '../loading/Loading';
import useFetch from '../../assets/hooks/useFetch';

export default function Quotes() {
   const {data,isLoading,error}=useFetch('https://dummyjson.com/quotes')
    console.log(data);
    if (isLoading) {
        return <Loading/>;
      }
  return (
    <div className='d-flex justify-content-between bg-info flex-wrap' >
    {error ? <div className="alert alert-danger">{error}</div> : ""}
    {data.quotes.map((qou) => (
      <div key={qou.id} className='m-2 bg-light' style={{flex:'33.33%'}}>
        <h2 className='fw-bold'>{qou.author}</h2>
        <p className='m-3'>{qou.quote}</p>
      </div>
    ))}
  </div>
  )
}
