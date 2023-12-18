import { Box, Flex } from '@chakra-ui/react'
import { memo } from 'react'

export const Main = memo(({children}: {children: React.ReactNode}) => {
  return (
    <Box as='main' flexGrow='1'>
      <Box w='990px'>
        <Flex justifyContent='space-between' w='100%'>
          {children}
        </Flex>
      </Box>
    </Box>
  )
})
