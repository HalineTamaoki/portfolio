import { Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export interface AboutCardItem {
    labelId: string,
    icon: ReactNode
}

interface AboutCardsProps {
    title: string,
    items: AboutCardItem[]
}

export default function AboutCards(props: AboutCardsProps) {
    const { title, items } = props;
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Card sx={{
            width: {md: '30%'}, 
            bgcolor: theme.palette.primary.main, 
            paddingInline: 1, 
            borderRadius: 5
        }} elevation={3}>
            <CardContent sx={{paddingBlock: {xs: '0.75em !important', md: '1.25em !important'}}}>
                <Typography variant="h3" color={theme.palette.common.white} sx={{mb: {xs: 1, md: 2}}}>{t(title)}</Typography>
                <Stack>
                    {items.map(item => <Stack key={item.labelId} direction='row' gap={2}>
                        <Stack 
                            sx={{color: theme.palette.common.white, display: {xs: 'none', md: 'block'}}}
                        >{item.icon}</Stack>
                        <Typography 
                            component={'li'} 
                            color={theme.palette.common.white}
                            sx={{listStyleType: {md: 'none'}}}
                        >{t(item.labelId)}</Typography>
                    </Stack>)}
                </Stack>
            </CardContent>
        </Card>
    )
}
