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
import VideoModal from './VideoModal';

export function Project() {
    const { t } = useTranslation();
    const [ slidesPerView, setSlidesPerView] = useState<number>(3);
    const [ videoOpen, setVideoOpen] = useState<string>()
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
            <Typography variant='h2' sx={{marginInline: {xs: 2}}}>{t('projects-header')}</Typography>
            <Box 
                overflow='hidden' 
                sx={{marginInline: {xs: 1, sm: 0}, mt: {xs: 3, sm: 5}}}
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
                        {projects.map(p => <SwiperSlide key={p.name.en} style={{ height: '100%' }} >
                            <ProjectCard project={p} openVideo={setVideoOpen}/>
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
            </Box>
            {videoOpen && <VideoModal src={videoOpen} onClose={() => setVideoOpen(undefined)}/>}
        </SectionLayout>
    )
}
