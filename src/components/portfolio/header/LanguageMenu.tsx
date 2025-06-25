import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ClickAwayListener, Menu, ListItemIcon, ListItemText, MenuItem, Paper } from '@mui/material';

export default function LanguageMenu({handleClose, anchorEl}: {handleClose: () => void, anchorEl: HTMLButtonElement | null}) {
    const { t, i18n } = useTranslation();

    const changeLanguage = useCallback((language: 'en' | 'ptBr' | 'es') => {
        i18n.changeLanguage(language);
        handleClose();
    },[handleClose, i18n])
    
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Paper sx={{ width: 320, maxWidth: '100%', alignSelf: 'end', left: {xs: 0, sm: 'auto'}}}>
                <Menu anchorEl={anchorEl} open={true} onClose={handleClose}>
                    <MenuItem onClick={() => changeLanguage('ptBr')} sx={{display: 'flex', gap: 2}} id='language-ptBr'>
                        <ListItemIcon>
                            <ReactCountryFlag countryCode='BR' svg style={{width: '1.5em', height: '1.5em'}} />
                        </ListItemIcon>
                        <ListItemText secondary={t('portuguese')} />
                    </MenuItem>
                    <MenuItem onClick={() => changeLanguage('en')} sx={{display: 'flex', gap: 2}}>
                        <ListItemIcon>
                            <ReactCountryFlag countryCode='US' svg style={{width: '1.5em', height: '1.5em'}}  id='language-en'/>
                        </ListItemIcon>
                        <ListItemText secondary={t('english')}/>
                    </MenuItem>
                    <MenuItem onClick={() => changeLanguage('es')} sx={{display: 'flex', gap: 2}} id='language-es'>
                        <ListItemIcon>
                            <ReactCountryFlag countryCode='ES' svg style={{width: '1.5em', height: '1.5em'}} />
                        </ListItemIcon>
                        <ListItemText secondary={t('spanish')} />
                    </MenuItem>
                </Menu>
            </Paper>
        </ClickAwayListener>
    );
}
