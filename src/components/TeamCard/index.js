import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-container">
        <div className="card">
          <img src={teamImageUrl} alt={name} className="image" />
          <p className="name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
