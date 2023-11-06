import * as React from "react";
import {
    PieChart,
    Box,
    Button,
    Container, 
    Header 
} from "@cloudscape-design/components";

const CompaignAudience = () => {
  return (
    <Container className="mb-4" header={<Header variant="h3">Audience% By Platform</Header>}>
        <PieChart
            data={[
                {
                    title: "Linear TV",
                    value: 48,
                    lastUpdate: "Dec 7, 2020"
                },
                {
                    title: "CTV",
                    value: 14,
                    lastUpdate: "Dec 6, 2020"
                },
                {
                    title: "Web",
                    value: 14,
                    lastUpdate: "Dec 6, 2020"
                },
                {
                    title: "Mobile",
                    value: 24,
                    lastUpdate: "Dec 7, 2020"
                }
            ]}
            detailPopoverContent={(datum, sum) => [
                { key: "Resource count", value: datum.value },
                {
                    key: "Percentage",
                    value: `${((datum.value / sum) * 100).toFixed(
                        0
                    )}%`
                },
                { key: "Last update on", value: datum.lastUpdate }
            ]}
            segmentDescription={(datum, sum) => `${datum.value} units, ${((datum.value / sum) * 100).toFixed(0)}%`}
            ariaDescription="Pie chart showing how many resources are currently in which state."
            ariaLabel="Pie chart"
            empty={
                <Box textAlign="center" color="inherit">
                    <b>No data available</b>
                    <Box variant="p" color="inherit">
                        There is no data available
                    </Box>
                </Box>
            }
            noMatch={
                <Box textAlign="center" color="inherit">
                    <b>No matching data</b>
                    <Box variant="p" color="inherit">
                        There is no matching data to display
                    </Box>
                    <Button>Clear filter</Button>
                </Box>
            }
        />
    </Container>
  );
}

export default CompaignAudience