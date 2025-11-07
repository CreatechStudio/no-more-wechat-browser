import {CardContent, Stack, Typography} from "@mui/material";
import {useTranslation} from "../i18n.ts";

export default function NothingCard(
    {
        lang,
    } : {
        lang?: string;
    }
) {
    const t = useTranslation(lang);

    return (
        <CardContent>
            <Stack sx={{width: '100%', p: 2, gap: 1.5, textAlign: 'start'}} justifyContent="center" alignItems="start">
                <Typography gutterBottom variant="h5" component="div">
                    {t['Missing redirect parameter']}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', pr: 4 }}>
                    {t['Cannot find target link']}
                </Typography>
            </Stack>
        </CardContent>
    );
}
