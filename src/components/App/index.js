import React from 'react'
import { Box, Container } from '@material-ui/core'
import Todos from 'components/Todos'

function App() {
  return (
    <Container>
      <Box
        my={20}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
      >
        <Todos />
      </Box>
    </Container>
  );
}

export default App;
