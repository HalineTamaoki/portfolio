import { Box, Divider, List, ListItem, ListItemButton, Drawer, Typography, useTheme } from '@mui/material'
import { sections } from '../../../common/utils';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

export default function MobileMenu({handleClose, open}: {handleClose: () => void, open: boolean}) {
    const { t } = useTranslation();
    const theme = useTheme();
    
    return (
        <nav>
            <Drawer
                variant="temporary"
                open={open}
                onClose={handleClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                <Box onClick={handleClose} sx={{ textAlign: 'center' }}>
                <Divider />
                <List>
                    {sections.map((section) => (
                        <ListItem key={section} disablePadding sx={{paddingBlock: 1}}>
                            <HashLink to={`/#${section}`} style={{color: 'inherit', width: '100%'}}>
                                <ListItemButton >
                                    <Typography color={theme.palette.common.black}>{t(`nav-${section}`)}</Typography>
                                </ListItemButton>
                            </HashLink>
                        </ListItem>
                    ))}
                </List>
                </Box>
            </Drawer>
        </nav>
    )
}
