import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const useSecureFetch = (resource, requestConfig) => {
  

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();  

  useEffect(() => { 

  // create fetch abort controller
  const controller = new AbortController();
  const { signal } = controller;
  let config;

  // function to execute fetch
  const fetchData = async () => {
    try {

      const token = await getAccessTokenSilently();

        // add signal to request config
      // if(requestConfig) {
      //   config = requestConfig;
      //   config.signal = signal;
      // } else {
      //   config = { signal: signal }
      // }

      // config.headers = {
      //   Authorization: `Bearer ${token}`
      // }
      
      // create request object
      //const newRequest = new Request(resource, config);
      console.log(token)

      const response = await fetch(resource, {
        signal: signal,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });       

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

export default useSecureFetch;