import { tokens } from "../theme";
import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box >
            <Typography
                variant="h4"
                color={colors.black[500]}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;