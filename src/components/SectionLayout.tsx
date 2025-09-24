import { ReactNode } from 'react'
import { sections } from '../common/utils'
import { Box, SxProps } from '@mui/material'

export default function SectionLayout({children, position, sx}: {children: ReactNode, position: number, sx?: SxProps}) {
    return (
        <Box component={'section'} display='grid' sx={{pt:{xs: 10, sm: 12}, marginInline: {md: 11}, ...sx}} id={sections[position]}>
            {children}
        </Box>
    )
}
