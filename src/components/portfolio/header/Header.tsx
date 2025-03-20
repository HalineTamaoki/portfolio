import { AppBar, Toolbar, Drawer, useTheme, Stack, Button } from '@mui/material'
import { useState } from 'react'
import { sections } from '../../../common/utils';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { Language } from '@mui/icons-material';

const drawerWidth = 240;

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
    
    return (
        <header>
            <AppBar component="nav" sx={{backgroundColor: theme.palette.secondary.main}}>
                <Toolbar sx={{display: 'flex', width: '100%'}}>
                    <Stack direction='row' gap={3}>
                        {sections.map(section => <HashLink to={`/#${section}`} style={{color: theme.palette.text.primary}}>{t(`nav-${section}`)}</HashLink>)}
                    </Stack>
                    <Stack>
                        <Button component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<Language />}
                        >
                            {i18n.language}
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        <nav>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                
            </Drawer>
        </nav>
        </header>
    )
}
