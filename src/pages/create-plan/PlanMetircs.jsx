import { Container, Grid, Header } from "@cloudscape-design/components"
import MetircsCard from "../../components/metrics-card"

const PlanMetircs = () => {
    return (
        <div className="mt-5">
            <Container header={<Header variant="h2">Projected Plan Metircs</Header>}>
                <Grid gridDefinition={[{colspan: 6}, {colspan: 6}]} className="p-2 d-flex justify-content-between">
                    <div>
                        <MetircsCard heading="Projected Impressions" text="423,000" fontSize={34}/>
                        <MetircsCard heading="Project Spend" text="$115,000"/>
                        <MetircsCard heading="Device Reach" text="100,000"/>
                    </div>
                    <div>
                        <MetircsCard heading="Linear | Digital" text="27,000 / 35,000"/>
                        <MetircsCard heading="Frequency" text="500,000"/>
                        <MetircsCard heading="Projected Conversions" text="50,000"/>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default PlanMetircs