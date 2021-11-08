import React from 'react'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

export default function Head() {
    const amount = useSelector(state => state.amount)
    return (
       
        <div>
           <Button color="primary" >Balance : {amount}</Button>
            
        </div>
    )
}
