/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'

import localization from '../../assets/icon-location.svg'
import website from '../../assets/icon-website.svg'
import twitter from '../../assets/icon-twitter.svg'
import companyIcon from '../../assets/icon-company.svg'

const Description = (props) => {
  const {userState} = props;

  const {
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = userState;

  return(
    <section className='description'>
          <div className='bio h4'>
            {bio !==null ?bio :<p>Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium nihil nam dolore laboriosam ad fugit nobis</p>}
          </div>
          <section className='statistics'>
            <span className='statistics_label'>
              <h4 className='h4'>Repos</h4>
              <h1 className='h1 statistics_label-value'>{public_repos}</h1>
            </span>
            <span className='statistics_label'>
              <h4 className='h4'>Followers</h4>
              <h1 className='h1 statistics_label-value'>{followers}</h1>
            </span>
            <span className='statistics_label'>
              <h4 className='h4'>Following</h4>
              <h1 className='h1 statistics_label-value'>{following}</h1>
            </span>
          </section>
          <section className='userLocation'>
            <section className='userLocation_groupOne'>
              <span>
                <img src={localization} alt="location"/>
                <p className='h4'>{location}</p>
              </span>
              <span>
                <img src={website} alt="website"/>
                {/* <a target="_blank" rel="noreferrer" href={item.url}></a> */}
                <p className='h4'>{blog !== null ?<a target="_blank" rel="noreferrer" href={blog}>{blog}</a> : 'Not Available'}</p>
              </span>
            </section>
            <section className='userLocation_groupTwo'>
              <span>
                <img src={twitter} alt="location"/>
                <p className='h4'>{twitter_username!==null ?twitter_username :'Not Available'}</p>
              </span>
              <span>
                <img src={companyIcon} alt="location"/>
                <p className='h4'>{company!==null ?company :'Not Available'}</p>
              </span>
            </section>
          </section>
        </section>
  );
};

export default Description;