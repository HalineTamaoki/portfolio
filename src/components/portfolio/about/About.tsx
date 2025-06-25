import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AboutCards, { AboutCardItem } from "./AboutCards";
import { Brush, CheckBox, Code, Storage, ThumbsUpDown } from "@mui/icons-material";
import myPhoto from './../../../assets/mypicture.png';
import SectionLayout from "../SectionLayout";

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

export function About() {
    const { t } = useTranslation();

    return (
        <SectionLayout position={0} sx={{placeItems: 'center', marginInline: 0}}>
            <Box 
                id="about-photo"
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
            <Stack width='90%' justifyContent='space-around' rowGap={2} sx={{flexDirection: {md: 'row'}, mt: {xs: 2, md: 3}}} id='about-cards'>
                <AboutCards title="about-frontend" items={frontendItems}/>
                <AboutCards title="about-backend" items={backendItems}/>
                <AboutCards title="about-qa" items={qaItems}/>
            </Stack>
        </SectionLayout>
    )
}
