import { Box, Button, TextField, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ChangeEvent, FocusEvent, useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "../../../hooks/useDebounce";

enum FieldErrors {
    NOT_TOUCHED = 'NOT_TOUCHED',
    VALUE_MISSING = 'VALUE_MISSING',
    TYPE_MISMATCH = 'TYPE_MISMATCH'
}

export default function ContactForm() {
    const theme = useTheme();
    const { t } = useTranslation();
    const form = useRef(null);
    const [errors, setErrors] = useState<{name?: FieldErrors, email?: FieldErrors, message?: FieldErrors}>(
        {name: FieldErrors.NOT_TOUCHED, email: FieldErrors.NOT_TOUCHED, message: FieldErrors.NOT_TOUCHED}
    );

    const textFieldSlotProps = useMemo(() => ({
        input: {
            sx: {
                background: theme.palette.mode === 'dark' ? theme.palette.secondary.light : undefined,
                borderRadius: 2,  
                color: theme.palette.common.black, 
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
    }), [theme.palette.mode]);

    const validate = useCallback(({name, validity}: {name: string, validity: ValidityState}) => {
        if(validity.valueMissing){
            setErrors((prev) => ({...prev, [name]: FieldErrors.VALUE_MISSING}));
            return;
        } 

        if(validity.typeMismatch){
            setErrors((prev) => ({...prev, [name]: FieldErrors.TYPE_MISMATCH}));
            return;
        }

        setErrors((prev) => ({...prev, [name]: undefined}));
    }, [errors])

    const debouncedValidate = useDebounce(validate, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | 
        FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, validity } = e?.target; 

        debouncedValidate({name, validity})    
    }    
    
    return (
        <Box component='form' ref={form} noValidate id="contact-form" gap={2} display={'grid'}>
            <TextField
                error={!!errors?.name && errors.name !== FieldErrors.NOT_TOUCHED} 
                fullWidth 
                name="name"
                label={t('contact-name')} 
                variant="filled" 
                size="small" 
                slotProps={textFieldSlotProps}
                onChange={handleChange}
                onBlur={handleChange}
                required
                helperText={errors?.name === FieldErrors.VALUE_MISSING ? t('form-mandatory', {field: t('contact-name')}) : undefined}
            />
            <TextField 
                error={!!errors?.email && errors.email !== FieldErrors.NOT_TOUCHED} 
                fullWidth 
                name="email"
                label={t('contact-email')} 
                variant="filled" 
                size="small" 
                type='email'
                slotProps={textFieldSlotProps}
                onChange={handleChange}
                onBlur={handleChange}
                required
                helperText={errors?.email === FieldErrors.VALUE_MISSING ? t('form-mandatory', {field: t('contact-email')}) : 
                    (errors?.email === FieldErrors.TYPE_MISMATCH ? t('form-email-error') : undefined)}
            />
            <TextField 
                error={!!errors?.message && errors.message !== FieldErrors.NOT_TOUCHED} 
                fullWidth 
                name="message"
                label={t('contact-message')} 
                variant="filled" 
                size="small" 
                multiline
                rows={4}
                slotProps={textFieldSlotProps}
                onChange={handleChange}
                onBlur={handleChange}
                required
                helperText={errors?.message === FieldErrors.VALUE_MISSING ? t('form-mandatory', {field: t('contact-message')}) : undefined}
            />
            <Button 
                variant="contained" 
                id="contact-send" 
                type="submit"
                disabled={!!errors?.name || !!errors?.email || !!errors?.message}
            >{t('contact-send')}</Button>
        </Box>
    )
}
