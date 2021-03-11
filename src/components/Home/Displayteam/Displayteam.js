import React from 'react';
import './Displayteam.css';
import { Link } from 'react-router-dom';

const DisplayTeam = (props) => {
    const { idTeam, strTeam, strTeamBadge, strLeague2 } = props.team;
    
    return (
        <div className="main">
            <div className='team-logo'><img src={strTeamBadge} alt=""/></div>
            <h2>{strTeam}</h2>
            <h5>{strLeague2}</h5>
            <p>Soprts type : football</p>
            <Link to={`/team/${idTeam}`}>
                <button className='team-btn'>Explore</button>
            </Link>
        </div>
    );
};


export default DisplayTeam;