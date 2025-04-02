import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard';
import SectionLayout from '../SectionLayout';
import { projects } from '../../../common/projects';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

export const cardWidth = 400;

export default function Project() {
    const { t } = useTranslation();
    const [ canScrollLeft, setCanScrollLeft] = useState<boolean>();
    const [ canScrollRight, setCanScrollRight] = useState<boolean>();
    const scrollRef = useRef<HTMLElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const scrollWidth = cardWidth + 30;
        scrollRef.current?.scrollBy({ left: direction === 'left' ? -scrollWidth : scrollWidth, behavior: "smooth" });
    };

    const updateScrollButtons = () => {
        if(scrollRef.current){
            setCanScrollLeft(scrollRef.current.scrollLeft > 0);
            setCanScrollRight(scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
        }
    }
    
    useEffect(() => {
        updateScrollButtons();
        scrollRef.current?.addEventListener('scroll', updateScrollButtons);
    }, [])
    

    return (
        <SectionLayout position={2}>
            <Typography variant='h2'>{t('projects-header')}</Typography>
            <Box display={'flex'} alignItems='center' mt={5} overflow='hidden'>
                <Button onClick={() => scroll('left')} disabled={!canScrollLeft}>
                    <ArrowBackIos sx={{fontSize: 50}}/>
                </Button>
                <Box display={'flex'} overflow={'auto'} gap={2} borderRadius={5} ref={scrollRef}>
                    {projects.map(p => <ProjectCard key={p.name.en} project={p}/>)}
                </Box>
                <Button onClick={() => scroll('right')} disabled={!canScrollRight}>
                    <ArrowForwardIos sx={{fontSize: 50}}/>
                </Button>
            </Box>
        </SectionLayout>
    )
}
