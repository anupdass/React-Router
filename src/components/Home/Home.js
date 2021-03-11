import React, { useEffect, useState, Fragment } from 'react';
import Banner from '../Banner/Banner';
import bannerImg from '../../img/Banner.png'
import DisplayTeam from './Displayteam/Displayteam';
import './Home.css'

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, []);

    return (
        <Fragment>
            <Banner bg={bannerImg} data="Sport Minia" imgStatus={false} />
            <div className="homeflex">
                {team.map(team => <DisplayTeam team = {team}></DisplayTeam>)}
            </div>
        </Fragment>
    );
};

export default Home;