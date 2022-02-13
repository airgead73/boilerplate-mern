import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useSecureFetch = (_resource, _requestOptions) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

  // create fetch abort controller
  const controller = new AbortController();

  // create request object

  const createRequest = async (_url, _options) => {

    const { getAccessTokenSilently } = useAuth0();
    const token = await getAccessTokenSilently();
    const { signal } = controller;
    let config;

    // attach signal
    if(_options) {
      config = _options;
      config.signal = signal;
    } else {
      config = { signal: signal }
    }

    // attach headers
    config.headers = {
      Authorization: `Bearer ${token}`
    }

    const newRequest = new Request(_url, config);

    return newRequest;

  }

  // create fetch

  const fetchData = async (_request) => {
    try {

      const response = await fetch(_request);       

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
  fetchData(createRequest(_resource, _requestOptions));

  // cleanup fetch
  return () => controller.abort();

  }, [_resource]);

  return { data, isPending, error };
  
}

export default useSecureFetch;