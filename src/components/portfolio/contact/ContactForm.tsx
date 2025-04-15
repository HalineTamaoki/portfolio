import { Box, Button, TextField, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo, useRef } from "react"
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const theme = useTheme();
    const { t } = useTranslation();
    const form = useRef(null);

    const textFieldSlotProps = useMemo(() => ({
        input: {
            sx: {
                background: theme.palette.mode === 'dark' ? theme.palette.secondary.light : undefined,
                borderRadius: 2,   
                "&::before": {
                    borderRadius: 2,
                },
                "&:hover": {
                    background: theme.palette.mode === 'dark' ? grey[400] : undefined,
                },
                "&.Mui-focused": {
                    background: theme.palette.mode === 'dark' ? grey[400] : undefined,
                }             
            }
        },
        inputLabel: {
            sx: {
                color: theme.palette.common.black
            }
        }
    }), [theme.palette.mode])

    return (
        <Box component='form' ref={form} noValidate id="contact-form" gap={2} display={'grid'}>
            <TextField 
                fullWidth 
                label={t('contact-name')} 
                variant="filled" 
                size="small" 
                slotProps={textFieldSlotProps}
            />
            <TextField 
                fullWidth 
                label={t('contact-email')} 
                variant="filled" 
                size="small" 
                type='email'
                slotProps={textFieldSlotProps}
            />
            <TextField 
                fullWidth 
                label={t('contact-message')} 
                variant="filled" 
                size="small" 
                multiline
                rows={4}
                slotProps={textFieldSlotProps}
            />
            <Button variant="contained" id="contact-send">{t('contact-send')}</Button>
        </Box>
    )
}
