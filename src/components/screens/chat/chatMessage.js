import React from 'react'
import { Avatar, Grid } from '@mui/material'

const ChatMessage = ({ message, user }) => (
  <div
    style={{
      padding: 5,
      margin: 10,
      border: user.uid === message.uid ? '2px solid #9c27b0' : '2px dashed red',
      marginLeft: user.uid === message.uid ? 'auto' : '10px',
      width: 'fit-content',
    }}>
    <Grid container>
      <Avatar src={message.photoURL} />
      <div>{message.displayName}</div>
    </Grid>
    <div>{message.text}</div>
  </div>
)

export default ChatMessage
