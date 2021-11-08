import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreater } from './state/index'
import { bindActionCreators } from 'redux'




export default function Shop() {
    const dispatch = useDispatch()
    const {withdraw,deposit} = bindActionCreators(actionCreater, dispatch)
    return (
        <div>
              <h2>Deposit/Withdraw Money</h2>
                <Button className="btn" color="primary" variant="contained" onClick={() =>{withdraw(100)}}>-</Button>
                Update Balance
                <Button className="btn" color="primary" variant="contained" onClick={() => {deposit(100)}}>+</Button>
            
        </div>
    )
}




