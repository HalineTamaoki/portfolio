import { Box, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard';
import SectionLayout from '../SectionLayout';
import { projects } from '../../../common/projects';
import { useContext, useEffect, useState } from 'react';
import useGetCurrentBreakpoint from '../../../hooks/useGetCurrentBreakpoint';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import NavigationButton from './NavigationButton';
import { ThemeContext } from '../../../context/ThemeContext';

export default function Project() {
    const { t } = useTranslation();
    const [ slidesPerView, setSlidesPerView] = useState<number>(3);
    const breakPoint = useGetCurrentBreakpoint();
    const theme = useTheme();
    const { activeTheme } = useContext(ThemeContext); 

    useEffect(() => {
        if (breakPoint === 'xs') {
            setSlidesPerView(1);
        } else if (breakPoint === 'sm' || breakPoint === 'md') {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    }, [breakPoint]);   
    
    return (
        <SectionLayout position={1}>
            <Typography variant='h2'>{t('projects-header')}</Typography>
            <Box 
                mt={5} 
                overflow='hidden' 
                sx={{marginInline: {xs: 3, sm: 0}}}
            >
                <Box
                    display={'flex'}   
                    alignItems='center'                     
                >
                    <NavigationButton direction='prev'/>
                    <Swiper modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: breakPoint === 'lg' || breakPoint === 'xl'
                        }}
                        >
                        {projects.map(p => <SwiperSlide  style={{ height: '100%' }} >
                            <ProjectCard key={p.name.en} project={p}/>
                        </SwiperSlide>)}
                    </Swiper>
                    <NavigationButton direction='next'/>
                </Box>
                <Box 
                    className='swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal'
                    sx={activeTheme === 'dark' ? {
                        "&.swiper-pagination > .swiper-pagination-bullet": {
                            bgcolor: theme.palette.secondary.light,
                        }
                    } : {}} 
                />

                {/* <Button onClick={() => scroll('left')} disabled={!canScrollLeft} sx={{display: {xs: 'none', sm: 'block'}}}>
                    <ArrowBackIos sx={{fontSize: 50}}/>
                </Button>
                <Box display={'flex'} overflow={'auto'} gap={2} borderRadius={5} {...handlers} ref={scrollRef} >
                </Box>
                <Button onClick={() => scroll('right')} disabled={!canScrollRight} sx={{display: {xs: 'none', sm: 'block'}}}>
                    <ArrowForwardIos sx={{fontSize: 50}}/>
                </Button> */}
            </Box>
        </SectionLayout>
    )
}
