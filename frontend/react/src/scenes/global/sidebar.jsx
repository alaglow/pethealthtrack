import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../../App.css"


const Item = ({ title, to, selected, setSelected, id }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleClick = () => {
        setSelected(selected === id ? null : id);
    };


    return (
        <div
            className={`sidebar-list ${selected ? 'active' : ''}`}
            onClick={handleClick}
            id={id}

        >
            <MenuItem active={selected === title} onClick={() => setSelected(title)}>
                <Typography fontSize="18px" paddingTop={1} paddingBottom={1} >
                    {title}
                </Typography>
                <Link to={to} />
            </MenuItem>
        </div>
    )
};


const Sidebar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")
    const [selectedItem, setSelectedItem] = useState(null);


    const [active, setActive] = useState(null);

    const handleItemClick = (id) => {
        setActive(id === active ? null : id);
    };

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.blue[500]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-innner-item": {
                    padding: "5px 35px 5px 30px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "6870fa !important"
                }
            }} >
            <ProSidebar
                collapsed={isCollapsed}>

                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: isCollapsed ? "10px 0 20px 27px" : "20px 0 30px 0",
                        color: colors.darkgrey[100],
                        listStyleType: 'none'
                    }}
                >  {!isCollapsed && (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="220px"
                    >

                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>)}
                </MenuItem>
                <Menu>
                    {!isCollapsed && (
                        <Box mb="40px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img
                                    alt="logo"
                                    width="170px"
                                    src={`../../assets/logo.png`}
                                    style={{ cursor: "pointer" }}
                                />
                            </Box>

                        </Box>
                    )}
                    {!isCollapsed && (
                        <Box paddingTop="10%"
                            style={{ color: '#fbfbfb' }}
                            sx={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                fontSize: "50px"
                            }}>
                            <Box>
                                <Item
                                    title="Panel Główny"
                                    to='/'
                                    selected={active === '/'}
                                    setSelected={handleItemClick}
                                    id="/" />
                            </Box>
                            <Box>
                                <Item
                                    title="Panel Zdrowie"
                                    to='/healthpanel'
                                    selected={active === 'healthpanel'}
                                    setSelected={handleItemClick}
                                    id="healthpanel" />

                            </Box>
                            <Box>
                                <Item
                                    title="Kalendarz"
                                    to='/calendar'
                                    selected={active === 'calendar'}
                                    setSelected={handleItemClick}
                                    id="calendar" />
                            </Box>
                            <Box>
                                <Item
                                    title="Galeria"
                                    to='/gallery'
                                    selected={active === 'gallery'}
                                    setSelected={handleItemClick}
                                    id="gallery" />

                            </Box>
                            <Box >

                                <Item
                                    title="Ustawienia"
                                    to='/settings'
                                    selected={active === 'settings'}
                                    setSelected={handleItemClick}
                                    id="settings" />

                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box >
    )


};

export default Sidebar; 