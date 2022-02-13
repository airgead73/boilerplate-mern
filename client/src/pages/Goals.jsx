import useFetch from '../hooks/useFetch';
import { SERVER_URL } from '../constants';

function Goals() {

  const { data: goals, error, isPending } = useFetch(`${SERVER_URL}/api/goals`);

  console.log(SERVER_URL);

  if(goals) {
    console.log(goals)
  }

  

  return (
    <div>
      <h2>Goals</h2>
 
      
    </div>
  )

}

export default Goals;