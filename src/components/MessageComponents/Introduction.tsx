import Typography from "@mui/material/Typography";

export default function Introduction() {
    return (
        <>
            <Typography
                variant="h4"
                color="text.primary"
                sx={{ textAlign: "center", mb: 3, mt: 10 }}
            >
                Let a Message !
            </Typography>
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: "center", width: "50%" }}
            >
                If you wish, please share your feedback on the project, highlighting the aspects you appreciated or providing some suggestions for improvement.
            </Typography>
        </>
    )
}