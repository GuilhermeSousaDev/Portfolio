import { Divider } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function CustomDivider() {
    const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';

    return (
        <Divider color={isThemeDark ? "#2c2c2c" : ""} />
    )
}