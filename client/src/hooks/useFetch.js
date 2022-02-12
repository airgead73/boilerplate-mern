import { useState, useEffect } from 'react';

const useFetch = (resource, requestConfig) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

  // create fetch abort controller
  const controller = new AbortController();
  const { signal } = controller;
  let config;

  // add signal to request config
  if(requestConfig) {
    config = requestConfig;
    config.signal = signal;
  } else {
    config = { signal: signal }
  }
  
  // create request object
  const newRequest = new Request(resource, config);

  // function to execute fetch
  const fetchData = async () => {
    try {

      const response = await fetch(newRequest);       

      if(!response.ok) {
          throw Error('Could not get data for resource requested.')
      }

      const json = await response.json();

      setIsPending(false);
      setData(json);
      setError(null);        
  
    } catch(error) {

      console.log(error)

      if(error.name =='AbortError') {
        console.log('fetch aborted');
      } else {
        setIsPending(false);
        setError(error.message);
      }
  
    } 
  }   
    
  // call fetchData
  fetchData();

  // cleanup fetch
  return () => controller.abort();

  }, [resource]);

  return { data, isPending, error };
  
}

export default useFetch;