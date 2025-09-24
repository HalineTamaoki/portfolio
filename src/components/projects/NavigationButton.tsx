import { Box, Button } from '@mui/material'
import useGetCurrentBreakpoint from '../../hooks/useGetCurrentBreakpoint';

export function NavigationButton({direction, id}: {direction: 'prev' | 'next', id: string}) {
  const breakPoint = useGetCurrentBreakpoint();
  
  return (
    <Box>
        <Button 
            id={id}
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
