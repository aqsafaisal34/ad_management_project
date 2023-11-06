import { Container, Grid, Header } from "@cloudscape-design/components"

const CompaignDetails = () => {
    return (
        <Container className="mb-4" header={<Header variant="h3">Compaign Name</Header>}>
            <p>Name ID:</p>
            <p>Status:</p>
            <Grid gridDefinition={[{colspan: 6}, {colspan: 6}]}>
                <p>Start Date: Oct 2023</p>
                <p>End Date: Oct 2056</p>
            </Grid>
            <p>Target Audience []</p>
        </Container>
    )
}

export default CompaignDetails