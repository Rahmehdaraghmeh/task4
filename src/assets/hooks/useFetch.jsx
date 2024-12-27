import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
  
    const getData = async () => {
      // const response = await fetch('https://dummyjson.com/products');
      // const data=await response.json();
      try {
        const { data } = await axios.get(url);
        setData(data);
        setError(null);
        // console.log(error);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    useEffect(() => {
      getData();
    }, []);
return {data, isLoading,error };
}
