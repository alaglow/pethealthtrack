import { Box, Icon, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../../Components/header';

const Topbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);



    return (
        <Box display="flex"
            justifyContent='space-between'
            p={2}>
            <Box
                display="flex"
                paddingLeft={10}>
                <Header subtitle="Witamy imię właściciela oraz zwierzaka" />
            </Box>
            <Box
                display="flex"
                backgroundColor={colors.blue[400]}
                borderRadius="3px"
                ml={50}>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type="button" sx={{ p: 1 }} >
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />) :
                        (
                            <LightModeOutlinedIcon />)
                    }
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

        </Box >
    )
};

export default Topbar; 