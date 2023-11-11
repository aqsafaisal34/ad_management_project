import { Container, Grid, Header, Table } from "@cloudscape-design/components"
import { COLOR_PRIMARY_BLUE, COLOR_PRIMARY_GREEN, COLOR_PRIMARY_RED } from "../../utils/colors"
import './index.css';

const CompaignTargetPerformance = () => {
    return (
        <Container className="mb-4 addspacing" header={<Header variant="h3">Compaign Target Performance</Header>} >
            <Container className="mb-4" variant="" header={<Header variant="h3">Impression Pricing Report</Header>} ></Container>
            <Container className="mb-4" variant="" header={<Header variant="h3">Currecy Comparison</Header>}>
                <Grid gridDefinition={[{colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}]}>
                    <div style={{border: `1px solid ${COLOR_PRIMARY_BLUE}`, borderRadius: 5, padding:5}}>
                        <p style={{color: COLOR_PRIMARY_BLUE}}><strong>Nielson</strong></p>
                        <p><strong>Demo Effiency</strong></p>
                        <p><strong>{`Female > 50`}</strong></p>
                    </div>
                    <div>
                        <p style={{color: COLOR_PRIMARY_GREEN}}>150000</p>
                        <p>Total</p>
                        <p>14000</p>
                    </div>
                    <div>
                        <p>50000</p>
                        <p>Linear TV</p>
                    </div>
                    <div>
                        <p>25000</p>
                        <p>CTV</p>
                    </div>
                    <div>
                        <p>60000</p>
                        <p>Mobile</p>
                    </div>
                    <div>
                        <p>90000</p>
                        <p>Web</p>
                    </div>
                </Grid>
                <Grid gridDefinition={[{colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}]}>
                    <div style={{border: `1px solid ${COLOR_PRIMARY_BLUE}`, borderRadius: 5, padding:5}}>
                        <p style={{color: COLOR_PRIMARY_BLUE}}><strong>VideoAMP</strong></p>
                        <p><strong>Demo Effiency</strong></p>
                        <p><strong>{`Female > 50`}</strong></p>
                    </div>
                    <div>
                        <p style={{color: COLOR_PRIMARY_GREEN}}>150000</p>
                        <p>Total</p>
                        <p>14000</p>
                    </div>
                    <div>
                        <p>50000</p>
                        <p>Linear TV</p>
                    </div>
                    <div>
                        <p>25000</p>
                        <p>CTV</p>
                    </div>
                    <div>
                        <p>60000</p>
                        <p>Mobile</p>
                    </div>
                    <div>
                        <p>90000</p>
                        <p>Web</p>
                    </div>
                </Grid>
                <hr/>
                <Grid gridDefinition={[{colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}, {colspan: 2}]}>
                    <div  style={{border: `1px solid ${COLOR_PRIMARY_BLUE}`, borderRadius: 5, padding: 5, color: COLOR_PRIMARY_BLUE}}><strong>Variance %</strong></div>
                    <p style={{color: COLOR_PRIMARY_RED}}>-25%</p>
                    <p style={{color: COLOR_PRIMARY_GREEN}}>10%</p>
                    <p style={{color: COLOR_PRIMARY_RED}}>-25%</p>
                    <p style={{color: COLOR_PRIMARY_RED}}>-15%</p>
                    <p style={{color: COLOR_PRIMARY_RED}}>-5%</p>
                </Grid>
                <Table
                    className="mt-4"
                    loadingText="Loading resources"
                    resizableColumns
                    variant="embedded"
                    columnDefinitions={[
                        {
                            id: "customAudience",
                            header: "Custom Audience",
                            cell: item => item.customAudience || "-",
                            width: "40%"
                        },
                        {
                            id: "linearTv",
                            header: "Linear TV",
                            cell: item => item.linearTv || "-",
                            width: "15%"
                        },
                        {
                            id: "ctv",
                            header: "CTV",
                            cell: item => item.ctv || "-",
                            width: "15%"
                        },
                        {
                            id: "mobile",
                            header: "Mobile",
                            cell: item => item.mobile || "-",
                            width: "15%"
                        },
                        {
                            id: "web",
                            header: "Web",
                            cell: item => item.web || "-",
                            width: "15%"
                        }
                    ]}
                    items={[
                        {
                            customAudience: "Female 50+ - Likes Travel",
                            linearTv: 5400,
                            ctv: 500,
                            mobile: 3000,
                            web: 3400,
                        },
                        {
                            customAudience: "Female 50+ - High End Fashion",
                            linearTv: 5600,
                            ctv: 3400,
                            mobile: 5000,
                            web: 4500,
                        },
                        {
                            customAudience: "Female 50+ - Owns a home",
                            linearTv: 10000,
                            ctv: 3000,
                            mobile: 4000,
                            web: 500,
                        },
                    ]}
                />
            </Container>
        </Container>
    )
}

export default CompaignTargetPerformance