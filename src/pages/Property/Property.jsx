import React from 'react'
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProperty } from '../../utils/api';
import { PuffLoader } from 'react-spinners';
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai';
import { FaShower } from 'react-icons/fa';
import { MdLocationOn, MdMeetingRoom, MdMyLocation } from 'react-icons/md';
import './Property.css';

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').slice(-1)[0];
  const { data, isError, isLoading } = useQuery(["resid", id], () => getProperty(id));

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="paddings flexCenter">
          <PuffLoader />
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="wrapper paddings">
        <h1>Something went wrong</h1>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">

        <div className="like">
          <AiFillHeart size={24} color='white' />
        </div>

        <img src={data?.image} alt="Home image" />

        <div className="flexCenter property-details">

          <div className="flexColStart left">

            <div className="flexStart head">
              <span className='primaryText'>{data?.title}</span>
              <span className='orangeText' style={{ fontSize: '1.5rem' }}>${data?.price}</span>
            </div>

            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaShower size={20}  color='#1F3E72'/>
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              <div className="flexStart facility">
                <AiTwotoneCar size={20}  color='#1F3E72'/>
                <span>{data?.facilities?.parking} Parkings</span>
              </div>
              <div className="flexStart facility">
                <MdMeetingRoom size={20}  color='#1F3E72'/>
                <span>{data?.facilities?.bedrooms} Bedrooms</span>
              </div>
            </div>

            {/* description */}
            <div className="secondaryText" style={{textAlign:'justify'}}>
              {data?.description}
            </div>

            {/* address */}
            <div className="flexStart" style={{gap:"1rem"}}>
              <MdLocationOn size={25}/>
              <span className="secondaryText">
                {
                  data?.address + ', '
                }
                {
                  data?.city + ', '
                }
                {
                  data?.country + ', '
                }
              </span>
            </div>

            <button className="button">
              Book your visit
            </button>

          </div>

          <div className="right">
            this is right
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property