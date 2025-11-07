import {Fragment} from "react";
import {Button, CardActions, CardContent, Stack, Typography} from "@mui/material";
import {useTranslation} from "../i18n.ts";
import {toast} from "react-toastify";

export default function MainCard(
    {
        lang,
        link
    } : {
        lang?: string;
        link: URL;
    }
) {
    const t = useTranslation(lang);

    function handleCopyLink() {
        if (link) {
            navigator.clipboard.writeText(link.toString()).then(() => {
                toast.success(t["Copied to clipboard"], {toastId: 'ctc'});
            }).catch(() => {
                toast.error(t["Could not copy clipboard"], {toastId: 'cncc'});
            });
        }
    }

    return (
        <Fragment>
            <CardContent>
                <Stack sx={{width: '100%', p: 2, pb: 0, gap: 1.5, textAlign: 'start'}} justifyContent="center" alignItems="start">
                    <Typography gutterBottom variant="h5" component="div">
                        {t['Please open in browser']}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', pr: 4 }}>
                        {t['Currently not support view in Wechat. Please click more on top right corner and select `open in default browser`.']}
                    </Typography>
                    <Typography variant="subtitle1" sx={{
                        color: 'text.secondary', textOverflow: 'ellipsis', overflow: 'hidden',
                        width: '90%', whiteSpace: 'nowrap'
                    }}>
                        <a href={link.toString()}>
                            {link.toString()}
                        </a>
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Stack direction="row-reverse" sx={{width: '100%', p: 2}}>
                    <Button size="medium" onClick={handleCopyLink} variant="outlined">{t['Copy Link']}</Button>
                </Stack>
            </CardActions>
        </Fragment>
    );
}
