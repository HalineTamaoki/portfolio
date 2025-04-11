import { Box, Button } from '@mui/material'
import useGetCurrentBreakpoint from '../../../hooks/useGetCurrentBreakpoint';

export default function NavigationButton({direction}: {direction: 'prev' | 'next'}) {
  const breakPoint = useGetCurrentBreakpoint();
  
  return (
    <Box>
        <Button 
            style={{ backgroundColor: 'transparent'}} 
            className={`swiper-button-${direction}`} 
            sx={{
                top: '50%',
                display: breakPoint === 'xs' ? 'none' : 'block',
            }} 
            disableRipple
        />
    </Box>
  )
}
