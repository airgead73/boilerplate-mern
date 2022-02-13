import { Link } from 'react-router-dom';

function Dashboard() {  

  return (
    <div>
      <h2>dashboard</h2>
      <ul>
        <li><Link to="/products">products</Link></li>
        <li><Link to="/goals">goals</Link></li>
      </ul>

    </div>
  )

}

export default Dashboard;