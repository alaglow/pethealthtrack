import { Box } from "@mui/material";
import Header from "../../Components/header";
import Pie from "../../Components/pieChart";

const PieChart = () => {
    return (
        <Box m="20px">
            <Header subtitle="Spacery" />
            <Box height="75vh">
                <Pie />

            </Box>
        </Box>
    )
}

export default PieChart;
