import useFetch from '../hooks/useFetch';
import { SERVER_URL } from '../constants';

function Dashboard() {

  const { data: goals, error, isPending } = useFetch(SERVER_URL);

  return (
    <div>
      <h2>dashboard</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>goals loading...</div> }
      {/* <div className="figure-container">
      { products && products.map((product) => (
        <Figure key={product.id} item={product}/>
      ))}
      </div> */}
      { goals && goals.map((goal) => {
        <p key={goal.id}>{goal.text}</p>
      }) }

    </div>
  )

}

export default Dashboard;
