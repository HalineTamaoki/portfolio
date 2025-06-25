import { Alert, Box, Link, Typography, useTheme } from "@mui/material";
import SectionLayout from "../SectionLayout";
import { useTranslation } from "react-i18next";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";

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

export function Contact() {
    const { t } = useTranslation();
    const [ emailStatus, setEmailStatus] = useState<'success' | 'error'>();
    const theme = useTheme();

    useEffect(() => {
      setTimeout(() => setEmailStatus(undefined), 3000);
    }, [emailStatus])
    
    return (
        <SectionLayout position={2} sx={{mb: 4}}>
            <Typography variant='h2' sx={{marginInline: {xs: 2}}}>{t('contact-header')}</Typography>
            <Box 
                id="contact-wrapper" 
                display='grid' 
                paddingInline={2} 
                sx={{
                    gridTemplateColumns: {xs: 'auto', sm: '40% 60%'}
                }}
            >
                <Box 
                    id="contact-main" 
                    display='flex' 
                    flexDirection='column'
                    sx={{
                        gap: {xs: 0.5, sm: 3},
                        pt: { xs: 2, sm: 7 },
                        pb: { xs: 2, sm: 0 },
                    }}
                >
                    {contactInfo.map(info => (
                        <Link 
                            id={info.name} 
                            href={info.url} 
                            target="_blank" 
                            key={info.name} 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'row', 
                                gap: 1, 
                                textDecoration: 'none', 
                                color: 'inherit',
                                width: 'fit-content',
                            }}
                        >
                            {info.icon}
                            <Typography>{info.name}</Typography>
                        </Link>
                    ))}
                </Box>
                <ContactForm setEmailStatus={setEmailStatus}/>
            </Box>
            {emailStatus && <Alert 
                severity={emailStatus} 
                sx={{
                    position: 'fixed', 
                    top: 10, 
                    zIndex: 1101, 
                    justifySelf: 'center', 
                    color: theme.palette.text.primary,
                    width: {xs: '90%', sm: 'auto'}
                }}
            >{emailStatus === 'success' ? t('message-sent') : t('error-sending-email')}</Alert>}
            
        </SectionLayout>
    )
}
