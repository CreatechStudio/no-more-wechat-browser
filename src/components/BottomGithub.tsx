import {Stack, Typography} from "@mui/material";
import {useTranslation} from "../i18n.ts";

export default function BottomGithub(
    {
        lang
    } : {
        lang?: string;
    }
) {
    const t = useTranslation(lang);

    return (
        <Stack sx={{position: 'absolute', bottom: 15}}>
            <Typography variant="body2" component="p" color="textSecondary">
                {t['powered by front']} <a href="https://github.com/iewnfod/no-more-wechat-browser" target="_blank">no-more-wechat-browser</a> {t['powered by end']}
            </Typography>
        </Stack>
    );
}
