import { Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, useTheme } from "@mui/material";
import { Project } from "../../../types/Project";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

export default function ProjectCard({project: {imageSrc, name, tags, description, demoSrc}}: 
    {project: Project},
) {
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
            <CardMedia component={"img"} image={imageSrc} aria-hidden={true} height={200}/>
            <CardContent sx={{color: theme.palette.common.black}}>
                <Typography variant='subtitle1'>{name[language]}</Typography>
                <Stack direction="row">{tags.map(tag => <Chip key={tag.toString()}
                    label={tag.toString()} 
                    sx={{color: theme.palette.common.black}}
                />)}</Stack>
                <Stack gap={2}>
                    {description[language].split('\n').map(des => <Typography key={des}>{des}</Typography>)}
                </Stack>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
                {demoSrc && <Button size="small" variant="contained" 
                    sx={{borderRadius: 5, bgcolor: theme.palette.secondary.light, color: theme.palette.common.black, textTransform: 'none'}}
                >
                    {t('projects-watch-demo')}
                </Button>}
            </CardActions>
        </Card>
    )
}
