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
        <Card sx={{width: {md: '30%'}, bgcolor: theme.palette.primary.main, paddingInline: 1, borderRadius: 5}}>
            <CardContent >
                <Typography variant="h2" mb={3} color={theme.palette.common.white}>{t(title)}</Typography>
                <Stack sx={{rowGap:1}}>
                    {items.map(item => <Stack direction='row' gap={2}>
                        <Stack sx={{color: theme.palette.common.white}}>{item.icon}</Stack>
                        <Typography color={theme.palette.common.white}>{t(item.labelId)}</Typography>
                    </Stack>)}
                </Stack>
            </CardContent>
        </Card>
    )
}
