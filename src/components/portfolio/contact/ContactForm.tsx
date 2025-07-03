import { sendForm } from "@emailjs/browser";
import { Box, Button, CircularProgress, TextField, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Dispatch, SetStateAction, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { EMAIL_PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } from "../../../common/enviroment";

export function ContactForm({setEmailStatus}: {setEmailStatus: Dispatch<SetStateAction<"error" | "success" | undefined>>}) {
    const theme = useTheme();
    const { t } = useTranslation();
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        mode: 'all'
    });
    const formRef = useRef<HTMLFormElement>(null)
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

    const sendEmail = () => { 
        if(!formRef.current) return; 

        setIsSendingEmail(true);
        sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef.current, {publicKey: EMAIL_PUBLIC_KEY})
            .then(() => {
                reset()
                setEmailStatus('success');
            })
            .catch((err) => {
                console.error(err)
                setEmailStatus('error')
            })
            .finally(() => setIsSendingEmail(false));
    };
    
    return (
        <Box component='form' ref={formRef} onSubmit={handleSubmit(sendEmail)} id="contact-form" gap={2} display={'grid'}>
            <TextField
                {...register('name', {required: t('form-mandatory', {field: t('contact-name')})})}
                id="contact-form-name"
                error={!!errors?.name} 
                fullWidth 
                label={t('contact-name')} 
                variant="filled" 
                size="small" 
                slotProps={textFieldSlotProps}
                helperText={typeof errors?.name?.message === 'string' && errors?.name?.message}
            />
            <TextField 
                {...register('email', {
                    required: t('form-mandatory', {field: t('contact-email')}),
                    pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: t('form-email-error')
                    }
                })}
                id="contact-form-email"
                error={!!errors?.email} 
                fullWidth 
                label={t('contact-email')} 
                variant="filled" 
                size="small" 
                type='email'
                slotProps={textFieldSlotProps}
                helperText={typeof errors?.email?.message === 'string' && errors?.email?.message}
            />
            <TextField 
                {...register('message', {required: t('form-mandatory', {field: t('contact-message')})})}
                id="contact-form-message"
                error={!!errors?.message} 
                fullWidth 
                label={t('contact-message')} 
                variant="filled" 
                size="small" 
                multiline
                rows={4}
                slotProps={textFieldSlotProps}
                helperText={typeof errors?.message?.message === 'string' && errors?.message?.message}
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
