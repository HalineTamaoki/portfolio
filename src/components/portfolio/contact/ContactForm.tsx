import { sendForm } from "@emailjs/browser";
import { Box, Button, CircularProgress, TextField, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ChangeEvent, Dispatch, FocusEvent, FormEvent, SetStateAction, useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from "../../../common/enviroment";
import { useDebounce } from "../../../hooks/useDebounce";

enum FieldErrors {
    VALUE_MISSING = 'VALUE_MISSING',
    TYPE_MISMATCH = 'TYPE_MISMATCH'
}

export default function ContactForm({setEmailStatus}: {setEmailStatus: Dispatch<SetStateAction<"error" | "success" | undefined>>}) {
    const theme = useTheme();
    const { t } = useTranslation();
    const form = useRef<HTMLFormElement>(null);
    const [ errors, setErrors ] = useState<{[key: string]: FieldErrors | undefined}>({});
    const [ isSendingEmail, setIsSendingEmail ] = useState<boolean>(false);

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
                color: `${theme.palette.common.black} !important`,
                "& .MuiFormLabel-asterisk": {
                    color: `${theme.palette.common.black} !important`
                }
            }
        },
        formHelperText: {
            sx: {
                fontSize: '0.9rem',
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
        const { name, validity } = e.target; 

        debouncedValidate({name, validity})    
    }    

    const sendEmail = () => {
        if(!form.current) return;
 
        setIsSendingEmail(true);
        sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, {publicKey: EMAIL_PUBLIC_KEY})
            .then(() => {
                form.current?.reset()
                setEmailStatus('success');
            })
            .catch((err) => {
                console.error(err)
                setEmailStatus('error')
            })
            .finally(() => setIsSendingEmail(false));
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!form.current) return;
        const formErrors = Array.from(form.current.elements).reduce((acc, element) => {
            const input = element as HTMLInputElement;
            if (!input.name) return acc;

            if (!input.value){
                acc[input.name] = FieldErrors.VALUE_MISSING;
            } else if(input.validity.typeMismatch){
                acc[input.name] = FieldErrors.TYPE_MISMATCH;
            } else {
                acc[input.name] = undefined;
            }
            return acc;
        }, errors);

        if (Object.values(formErrors).filter(value => !!value).length > 0){
            setErrors(formErrors);
        } else {
            sendEmail();
        }
    }
    
    return (
        <Box component='form' ref={form} noValidate id="contact-form" gap={2} display={'grid'} onSubmit={handleSubmit}>
            <TextField
                error={!!errors?.name} 
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
                error={!!errors?.email} 
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
                error={!!errors?.message} 
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
                sx={{ 
                    display: 'flex', 
                    gap: 1, 
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.primary.main,
                    }}}
                disabled={isSendingEmail}
            > 
                {!isSendingEmail && t('contact-send')}
                {isSendingEmail && <CircularProgress sx={{color: theme.palette.common.white }} size={20} />}
            </Button>
        </Box>
    )
}
