import { Container, Grid, Header } from "@cloudscape-design/components"
import PlanMetircs from "../create-plan/PlanMetircs"
import PlanCalendar from "../create-plan/PlanCalendar";
import Header1 from "../../components/header/index.jsx";
import { useNavigate } from "react-router-dom";
import './index.css'


const PlanDetails = () => {
    const navigate = useNavigate();
    const submitHandlerTwo = (e) =>{
        e.preventDefault()
        navigate('/create-plan')
      }
    return (
        <> 
        <Header1 title={"Plan Details"} button={"Create Plan"} function={submitHandlerTwo} />
        <div className="p-3 spacing">
            <Container className="addspacing" header={<Header variant="h1">Plan Details</Header>}>
                <Grid className="mt-1" gridDefinition={[{colspan: 3}, {colspan: 3}, {colspan: 3}, {colspan: 3}]}>
                    <div>
                        <p><strong>Plan Name:</strong> Lorem Empson</p>
                        <p><strong>Flight Date:</strong> June 2023-Oct 2056</p>
                        <br/>
                        <strong>Platforms</strong>
                        <p>Total Impressions: 450,000</p>
                        <p>Linear: 250,000</p>
                        <p>Digital: 560,000</p>
                    </div>
                    <div>
                        <strong>Budget</strong>
                        <p>RM20,000</p>
                        <br/>
                        <strong>Dayparts</strong>
                        <p>Morning</p>
                        <p>Primetime News</p>
                        <p>Weekend</p>
                    </div>
                    <div>
                        <strong>Agency</strong>
                        <p>Agency Name</p>
                        <br/>
                        <strong>Agency</strong>
                        <p>Product Name</p>
                    </div>
                    <div>
                        <strong>Audience</strong>
                        <p>30+ Males</p>
                        <br/>
                        <strong>Optimzation Type</strong>
                        <p>New Additional</p>
                    </div>
                </Grid>
            </Container>

            <PlanCalendar/>
            <PlanMetircs/>
        </div>
        </>
    )
}

export default PlanDetails