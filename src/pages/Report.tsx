import { Box, Typography } from "@mui/material";
import React from "react";

const Report = () => {
    return (
        <div>
            <Typography fontWeight="fontWeightRegular">
                これはフォントウェイト400です。
            </Typography>
            <Typography fontWeight="fontWeightMedium">
                これはフォントウェイト500です。
            </Typography>
            <Typography fontWeight="fontWeightBold">
                これはフォントウェイト700です。
            </Typography>
            <Box fontWeight="fontWeightBold">
                Boxはフォントウェイト700です。
            </Box>
        </div>
    )
}

export default Report