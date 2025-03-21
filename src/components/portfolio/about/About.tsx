import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutCards, { AboutCardItem } from "./AboutCards";
import { Brush, CheckBox, Code, Storage, ThumbsUpDown } from "@mui/icons-material";
import { sections } from "../../../common/utils";

const frontendItems: AboutCardItem[] = [
    {labelId: "about-frontend1", icon: <Code /> }, 
    {labelId: "about-frontend2", icon: <Brush /> }
];

const backendItems: AboutCardItem[] = [
    {labelId: "about-backend1", icon: <Code /> }, 
    {labelId: "about-backend2", icon: <Storage /> }
];

const qaItems: AboutCardItem[] = [
    {labelId: "about-qa1", icon: <CheckBox /> }, 
    {labelId: "about-qa2", icon: <ThumbsUpDown /> }
];

export default function About() {
    const { t } = useTranslation();

    return (
        <Box component={'section'} display='grid' sx={{placeItems: 'center'}} mt={15} id={sections[0]}>
            <img />
            <Stack textAlign={'center'} sx={{maxWidth: {md: '70%'}}}>
                <Typography variant="h1" mb={4}>Haline Tamaoki</Typography>
                <Typography variant="subtitle1">{t('about-subtitle')}</Typography>
                <Typography sx={{lineHeight: 2}}>{t('about-text')}</Typography>
            </Stack>
            <Stack mt={6} width='90%' justifyContent='space-around' sx={{direction: {md: 'row'}}}>
                <AboutCards title="about-frontend" items={frontendItems}/>
                <AboutCards title="about-backend" items={backendItems}/>
                <AboutCards title="about-qa" items={qaItems}/>
            </Stack>
        </Box>
    )
}
