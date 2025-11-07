import {Stack, Typography} from "@mui/material";
import {useTranslation} from "../i18n.ts";

export default function TopForceStay(
    {
        lang
    } : {
        lang?: string;
    }
) {
    const t = useTranslation(lang);

    return (
        <Stack sx={{position: 'absolute', top: 15}}>
            <Typography variant="body2" component="p" color="error">
                {t['You are in force stay mode now, which means that it will never redirect to target link and you can make test on it.']}
            </Typography>
        </Stack>
    );
}
