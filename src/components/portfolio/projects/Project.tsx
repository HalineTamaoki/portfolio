import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard';
import SectionLayout from '../SectionLayout';
import { projects } from '../../../common/projects';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useEffect, useMemo, useRef, useState } from 'react';
import useGetCurrentBreakpoint from '../../../hooks/useGetCurrentBreakpoint';
import { useSwipeable } from 'react-swipeable';

export default function Project() {
    const { t } = useTranslation();
    const [ canScrollLeft, setCanScrollLeft] = useState<boolean>();
    const [ canScrollRight, setCanScrollRight] = useState<boolean>();
    const scrollRef = useRef<HTMLElement>(null);
    const breakPoint = useGetCurrentBreakpoint();

    const cardWidth: number = useMemo(() => {
        if(breakPoint === 'xs'){
            return scrollRef.current?.clientWidth ?? 0;
        } else if (breakPoint === 'sm' || breakPoint === 'md'){
            return ((scrollRef.current?.clientWidth ?? 0) / 2) - 10
        } {
            return ((scrollRef.current?.clientWidth ?? 0) / 3) - 10
        }
    }, [scrollRef.current?.clientWidth, breakPoint])
    

    const scroll = (direction: 'left' | 'right') => {
        const scrollWidth = ((scrollRef.current?.scrollWidth ?? 0) / projects.length) + 5;
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
    }, [cardWidth])
    
    const handlers = useSwipeable({
        onSwipedLeft: () => console.log('left'),
        onSwipedRight: () => scroll('right'),
    });
    

    return (
        <SectionLayout position={1}>
            <Typography variant='h2'>{t('projects-header')}</Typography>
            <Box 
                display={'flex'}   
                alignItems='center' 
                mt={5} 
                overflow='hidden' 
                sx={{marginInline: {xs: 3, sm: 0}}}
            >
                <Button onClick={() => scroll('left')} disabled={!canScrollLeft} sx={{display: {xs: 'none', sm: 'block'}}}>
                    <ArrowBackIos sx={{fontSize: 50}}/>
                </Button>
                <Box display={'flex'} overflow={'auto'} gap={2} borderRadius={5} {...handlers} ref={scrollRef} >
                    {projects.map(p => <ProjectCard key={p.name.en} project={p} cardWidth={cardWidth}/>)}
                </Box>
                <Button onClick={() => scroll('right')} disabled={!canScrollRight} sx={{display: {xs: 'none', sm: 'block'}}}>
                    <ArrowForwardIos sx={{fontSize: 50}}/>
                </Button>
            </Box>
        </SectionLayout>
    )
}
