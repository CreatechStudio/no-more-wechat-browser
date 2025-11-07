import {CardContent, Stack, Typography} from "@mui/material";
import {useTranslation} from "../i18n.ts";

export default function InvalidUrlCard(
    {
        lang
    } : {
        lang?: string;
    }
) {
    const t = useTranslation(lang);

    return (
        <CardContent>
            <Stack sx={{width: '100%', p: 2, gap: 1.5, textAlign: 'start'}} justifyContent="center" alignItems="start">
                <Typography gutterBottom variant="h5" component="div">
                    {t['Invalid URL']}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', pr: 4 }}>
                    {t['There might be something wrong in target link']}
                </Typography>
            </Stack>
        </CardContent>
    );
}
