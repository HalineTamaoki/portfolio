import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard';
import SectionLayout from '../SectionLayout';
import { projects } from '../../../common/projects';

export default function Project() {
    const { t } = useTranslation();
// https://medium.com/@ltomblock/crafting-a-professional-looking-carousel-with-react-and-mui-746a86af0ab0

    return (
        <SectionLayout position={2}>
            <Typography variant='h2'>{t('projects-header')}</Typography>
            <Box flexDirection={'row'} display={'flex'}>
                {projects.map(p => <ProjectCard key={p.name.en} project={p}/>)}
            </Box>
        </SectionLayout>
    )
}
