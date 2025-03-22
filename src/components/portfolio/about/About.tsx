import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutCards, { AboutCardItem } from "./AboutCards";
import { Brush, CheckBox, Code, Storage, ThumbsUpDown } from "@mui/icons-material";
import { sections } from "../../../common/utils";
import myPhoto from './../../../assets/mypicture.png';

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
        <Box component={'section'} display='grid' sx={{placeItems: 'center', mt:{xs: 10, sm: 12}}} id={sections[0]}>
            <Box 
                component={'img'}
                src={myPhoto}
                aria-hidden={true}
                mb={3}
                height = {180}
                width = {180}
                borderRadius={100}
            />
            <Stack textAlign={'center'} sx={{maxWidth: {xs: '90%', md: '70%'}}}>
                <Typography variant="h1" mb={3}>Haline Tamaoki</Typography>
                <Typography variant="subtitle1" mb={0.75}>{t('about-subtitle')}</Typography>
                <Typography sx={{lineHeight: 2}}>{t('about-text')}</Typography>
            </Stack>
            <Stack width='90%' justifyContent='space-around' rowGap={2} sx={{flexDirection: {md: 'row'}, mt: {xs: 2, md: 3}}}>
                <AboutCards title="about-frontend" items={frontendItems}/>
                <AboutCards title="about-backend" items={backendItems}/>
                <AboutCards title="about-qa" items={qaItems}/>
            </Stack>
        </Box>
    )
}
