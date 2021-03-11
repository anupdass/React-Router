import React, { useState, useEffect, Fragment } from 'react';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Banner from '../Banner/Banner';
import maleImg from '../../img/male.png';
import femaleImg from '../../img/female.png'
import './Details.css'
const Details = () => {
    const {id} = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data.teams[0])
            })
    })


    return (
        <Fragment>
            {details && <div>
                <Banner bg={details.strStadiumThumb} data={details.strTeamBadge} imgStatus={true} />
                <div className="container">
                    <div className='top-section'>
                        <div className='details'>
                            <h1>{details.strTeam}</h1>
                            <p>Founded: {details.intFormedYear}</p>
                            <p>Country: {details.strCountry}</p>
                            <p>Sport Type: Football</p>
                            <p>Gender: {details.strGender}</p>
                        </div>
                        <div className='detailsMedia'>
                            <img className="mediaImg"  src={details.strGender === "male" ? maleImg : femaleImg} alt=""/>
                        </div>
                    </div>
                    <p>{details.strDescriptionEN}</p>
                    <div className="Social">
                        <div className="Social__icons">
                            <a className="Social__link" target="_blank" rel='noreferrer' href={`https://${details.strFacebook}`}>
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="Social__link" target="_blank" rel='noreferrer' href={`https://${details.strTwitter}`}>
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="Social__link" target="_blank" rel='noreferrer' href={`https://${details.strInstagram}`}>
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>}
        </Fragment>
    );
};

export default Details;