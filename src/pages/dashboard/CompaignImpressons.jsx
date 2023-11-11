import {
    Container, 
    Header,
    BarChart,
    Box,
    Button
} from "@cloudscape-design/components";
import './index.css';


const CompaignImpressons = () => {
    return (
        <Container className="mb-4 addspacing" header={<Header variant="h3">Total Impressions By Paltform</Header>}>
            <BarChart
                horizontalBars={true}
                series={[
                    {
                        title: "Impressions",
                        type: "bar",
                        data: [
                            { x: "Web", y: 1000 },
                            { x: "Mobile", y: 3000 },
                            { x: "CTV", y: 5000 },
                            { x: "Linear TV", y: 10000 }
                        ],
                        valueFormatter: e => "$" + e.toLocaleString("en-US")
                    },
                    {
                        title: "Average revenue",
                        type: "threshold",
                        y: 5000,
                        valueFormatter: e => "$" + e.toLocaleString("en-US")
                    }
                ]}
                xDomain={[ "Web", "Mobile", "CTV", "Linear TV"]}
                yDomain={[0, 12000]}
                i18nStrings={{
                    xTickFormatter: e => e,
                    yTickFormatter: function o(e) {
                    return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                            "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
                        "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
                        "K"
                        : e.toFixed(2);
                    }
                }}
                ariaLabel="Single data series line chart"
                height={100}
                xTitle="Platform"
                yTitle="Impressions"
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
    )
}

export default CompaignImpressons