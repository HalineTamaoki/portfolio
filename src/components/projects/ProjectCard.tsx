import { Button, Card, CardActions, CardContent, CardMedia, Chip, Link, Stack, Typography, useTheme } from "@mui/material";
import { Project } from "../../../types/Project";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { GitHub } from "@mui/icons-material";

export function ProjectCard({project: {imageSrc, name, tags, description, demoSrc, githubUrl}, openVideo}: {
    project: Project,     
    openVideo: (demoSrc: string) => void    
}) {
    const theme = useTheme();
    const { i18n: {language} } = useTranslation();

    return (
        <Card sx={{
            minWidth: 200, 
            bgcolor: theme.palette.common.white, 
            paddingInline: 1, 
            borderRadius: 5,
            height: '100%'
        }}>
            <CardMedia 
                component={"img"} 
                image={imageSrc} 
                aria-hidden={true}  
                sx={{mt: 1, borderRadius: 5, height: {xs: 150, sm: 180}}}
                id={`card-media-${name[language]}`}
            />
            <CardContent sx={{color: theme.palette.common.black}}>
                <Stack direction='row' gap={1}>
                    <Typography variant='subtitle1'>{name[language]}</Typography>
                    {githubUrl && <Link href={githubUrl} target='_blank' id={`card-github-link-${name[language]}`}>
                        <GitHub sx={{color: theme.palette.common.black}}/>
                    </Link>}
                </Stack>
                <Stack direction="row" mb={2} gap={1} mt={0.5}>{tags.map(tag => <Chip key={tag.toString()}
                    label={tag.toString()} 
                    size="small"
                    sx={{color: theme.palette.common.black, p: 0.8, fontSize: '0.8em'}}
                />)}</Stack>
                <Stack gap={2}>
                    {description[language].split('\n').map(des => (
                        <Typography 
                            key={des}
                            textAlign={'justify'}
                            fontSize={'0.9em'}
                        >
                            {des}
                        </Typography>
                    ))}
                </Stack>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                {demoSrc && <Button 
                    size="small" 
                    variant="contained" 
                    id={`card-open-demo-${name[language]}`}
                    sx={{
                        borderRadius: 5, 
                        bgcolor: theme.palette.secondary.light, 
                        color: theme.palette.common.black, 
                        textTransform: 'none',
                        paddingInline: 2,
                        "&:hover":{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.common.white,     
                        }
                    }}
                    onClick={() => openVideo(demoSrc)}
                >
                    {t('projects-watch-demo')}
                </Button>}
            </CardActions>
        </Card>
    )
}
