import React from 'react';
import Loader from '@components/common/Loader';
import { Container, Grid } from '@mui/material';
import ChatInput from './chatInput';
import useChat from '@hooks/useChat';
import ChatMessage from './chatMessage';

const Chat = () => {
  const { user, message, loading, sendMessage } = useChat();

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 50 }}
        justifyContent={'center'}
        alignItems={'center'}>
        <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }}>
          {message.map((message, index) => (
            <ChatMessage key={index} message={message} user={user} />
          ))}
        </div>
        <ChatInput onSendMessage={sendMessage} />
      </Grid>
    </Container>
  );
};

export default Chat;
