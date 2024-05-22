import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
