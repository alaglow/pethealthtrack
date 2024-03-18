import Header from "../../Components/header";
import { Box } from "@mui/material";


const Dashboard = () => {
    return (
        <Box m="20px">
            <Box 
            display="flex" 
            justifyContent="space-between"
             alignItems="center" 
             sx={{color: "#ECECEC"}}>
                <Header subtitle="Helloł" />
            </Box>
        </Box>
    )
};

export default Dashboard; 