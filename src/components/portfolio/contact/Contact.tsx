import { Box, Link, Typography } from "@mui/material";
import SectionLayout from "../SectionLayout";
import { useTranslation } from "react-i18next";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import ContactForm from "./ContactForm";

const contactInfo = [
    {
        url: 'mailTo:haline.tamaoki@gmail.com',
        name: 'haline.tamaoki@gmail.com',
        icon: <Email aria-hidden={true}/>
    },
    {
        url: 'https://github.com/HalineTamaoki',
        name: 'HalineTamaoki',
        icon: <GitHub aria-hidden={true}/>
    },
    {
        url: 'https://www.linkedin.com/in/haline-tamaoki-a7851811b/',
        name: 'Haline Tamaoki',
        icon: <LinkedIn aria-hidden={true}/>
    }
]

export default function Contact() {
    const { t } = useTranslation();
    return (
        <SectionLayout position={2} sx={{mb: 4}}>
            <Typography variant='h2' sx={{marginInline: {xs: 2}}}>{t('contact-header')}</Typography>
            <Box id="contact-wrapper" display='grid' gridTemplateColumns={'40% 60%'} paddingInline={2}>
                <Box id="contact-main" display='flex' flexDirection='column' gap={3} pt={7}>
                    {contactInfo.map(info => (
                        <Link 
                            id={info.name} 
                            href={info.url} 
                            target="_blank" 
                            key={info.name} 
                            sx={{display: 'flex', flexDirection: 'row', gap: 1, textDecoration: 'none', color: 'inherit'}}
                        >
                            {info.icon}
                            <Typography>{info.name}</Typography>
                        </Link>
                    ))}
                </Box>
                <ContactForm />
            </Box>
        </SectionLayout>
    )
}
