import {  InputAdornment, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
// import { Typography, Button, Stack, IconButton } from '@mui/material'
// import { Button } from 'bootstrap'
// import SendIcon from '@mui/icons-material/Send';


function Register() {
  const[val,setVal]=useState("");
  const[email,setEmail]=useState("");
  return (
    <>
    <div>Register</div>
    
    <div style={{marginTop:20, marginLeft:150, background:'white', height:550, width:800}}>
      <InputLabel> Name:     
        <TextField
          id='name'
          label='Name'
          variant='outlined'
          onChange={(e)=>setVal(e.target.value)} 
          error={!val}
          value={val}
          helperText={
            !val? 'Required':"you entered name"
          }
          style={{marginLeft:20,marginTop:10}}
        />
        </InputLabel> 

        <InputLabel> Email:     
        <TextField
          id='email'
          label='EMail'
          variant='filled'
          onChange={(e)=>setEmail(e.target.value)} 
          error={!email}
          value={email}
          helperText={
            !email? 'Required':"you entered name"
          }
          inputProps={{
            startAdornment:<InputAdornment position='start' >@gmail.com</InputAdornment>,
          }}
          // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          // inputProps={{
          //   'aria-label': 'weight',
          // }}
          style={{marginLeft:20,marginTop:10}}
        />
        </InputLabel> 
        
    </div>

   
    </>
  )
}

export default Register