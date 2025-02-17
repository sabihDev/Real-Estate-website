import React from 'react'
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProperty } from '../../utils/api';

const Property = () => {
  const {pathname} = useLocation();
  const id = pathname.split('/').slice(-1)[0];
  const {data, isError, isLoading} = useQuery(["resid",id], () => getProperty(id));
  return (
    <div className="wrapper">
        Property page
    </div>
  )
}

export default Property