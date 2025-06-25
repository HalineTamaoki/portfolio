import { AppBar, Toolbar, useTheme, Stack, Button, Typography, Switch, FormGroup, IconButton } from '@mui/material'
import { sections } from '../../../common/utils';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import MobileMenu from './MobileMenu';
import { useContext, useEffect, useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import LanguageMenu from './LanguageMenu';
import { ThemeContext } from '../../../context/ThemeContext';
import { DarkMode, LightMode, Menu } from '@mui/icons-material';
import useGetCurrentBreakpoint from '../../../hooks/useGetCurrentBreakpoint';

export function Header() {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const { setActiveTheme, activeTheme } = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [headerVisible, setheaderVisible] = useState(true);
    const breakpoint = useGetCurrentBreakpoint();

    const closeLanguageMenu = () => {
        setAnchorEl(null);
    }
    
    useEffect(() => {
        if(breakpoint === 'xs' ){
            setheaderVisible(true);
        } else {
            const handleScroll = () => {
                setheaderVisible(window.scrollY < 50);
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [breakpoint])

    const language = useMemo(() => {
        switch (i18n.language) {
            case 'es':
                return {flag: 'ES', language: 'ES'};        
            case 'ptBr':
                return {flag: 'BR', language: 'PT'};
            default:
                return {flag: 'US', language: 'EN'};
        }
    }, [i18n.language]);
    
    return (
        <header>
            <AppBar component="nav" sx={{
                backgroundColor: theme.palette.secondary.main, 
                opacity: headerVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out', 
                "&:hover": {
                    opacity: 1
                }
            }}>
                <Toolbar sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton onClick={() => setMobileOpen(true)} sx={{display: {sm: 'none'}}}>
                        <Menu sx={{fontSize: '1.5em', color: theme.palette.common.white}}/>
                    </IconButton>
                    <Stack direction='row' gap={3} m='auto' sx={{display: {xs: 'none', sm: 'flex'}}} id='sections-menu'>
                        {sections.map(section => <HashLink  to={`/#${section}`}  key={section}>
                            <Typography 
                                color={theme.palette.common.white} 
                                fontSize='1.25rem' 
                                sx={{
                                    '&:hover': {
                                        color: theme.palette.primary.main,
                                        fontWeight: 600
                                    }
                                }}
                                id={`nav-${section}`}
                            >{t(`nav-${section}`)}</Typography>
                        </HashLink>)}
                    </Stack>
                    <Stack direction='row' gap={3}>
                        <Button onClick={e => setAnchorEl(e.currentTarget)}  sx={{display: 'flex', gap: 1, color: theme.palette.common.white, fontSize: '1.25rem'}} id='language-btn'>
                            <ReactCountryFlag countryCode={language.flag} svg style={{width: '1.5em', height: '1.5em'}} />
                            {language.language}
                        </Button>
                        <IconButton
                            onClick={() => setActiveTheme(prev => prev === 'dark' ? 'light' : 'dark')}  
                            sx={{color: theme.palette.common.white, fontSize: '1.25rem', display: {xs: 'block', sm: 'none'}}}
                            aria-label={t('change-mode-button')}
                            id='theme-btn-mobile'
                        >
                            {activeTheme === 'dark' ? <DarkMode /> : <LightMode />}
                        </IconButton>
                        <FormGroup sx={{justifyContent: 'center', display: {xs: 'none', sm: 'flex'}}}>
                            <Switch 
                                id='theme-switch'
                                checked={theme.palette.mode === 'dark'} 
                                onChange={e => setActiveTheme(e.target.checked ? 'dark' : 'light')}
                                color='default'
                            />
                        </FormGroup>
                    </Stack>
                </Toolbar>
            </AppBar>
            <MobileMenu handleClose={() => setMobileOpen(false)} open={mobileOpen}/>
            {Boolean(anchorEl) && <LanguageMenu handleClose={() => closeLanguageMenu()} anchorEl={anchorEl}/>}
        </header>
    )
}
