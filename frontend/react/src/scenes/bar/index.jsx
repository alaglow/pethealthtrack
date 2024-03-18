import { Box } from "@mui/material";
import Header from "../../Components/header";
import BarChart from "../../Components/barChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header subtitle="Spacery" />
            <Box height="75vh">
                <BarChart />

            </Box>
        </Box>
    )
}

export default Bar;
