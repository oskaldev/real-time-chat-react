import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'

const ChatInput = ({ onSendMessage }) => {
  const [ value, setValue ] = useState('')
  const sendMessage = () => {
    if (value.trim() !== '') {
      onSendMessage(value) // Убедитесь, что здесь передается корректное значение value
      setValue('')
    }
  }

  return (
    <Grid container direction='column' alignItems='flex-end' style={{ width: '80%' }}>
      <TextField
        variant='outlined'
        fullWidth
        maxRows={2}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button
        onClick={sendMessage}
        variant='outlined'
        style={{ color: 'black', marginTop: 10 }}>
        Отправить
      </Button>
    </Grid>
  )
}

export default ChatInput
