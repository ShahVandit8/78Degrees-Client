import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainComp from './FoodOrder-Components/Index'
import { TableValidate } from '../services/api.js'

function FoodOrder() {

    const { id } = useParams();
    const navigate = useNavigate();

    const validateTable = async () => {
      const result = await TableValidate(id);

      if(result.data.length > 0) {
        return null;
      }
      else{
        navigate('/tablenotfound')
      }
    }
    
    useEffect(() => {
      validateTable();
    })

  return (
    <div style={{backgroundColor: 'white'}}>
      <MainComp />
      <hr />
      {/* <h2 style={{marginTop: 48, backgroundColor: 'pink'}}>Table Number: {id} </h2> */}
    </div>
  )
}

export default FoodOrder
