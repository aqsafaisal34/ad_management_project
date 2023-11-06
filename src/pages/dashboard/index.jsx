import { Grid } from "@cloudscape-design/components"
import CompaignDetails from "./CompaignDetails"
import CompaignImpressons from "./CompaignImpressons"
import CompaignPricing from "./CompaignPricing"
import CompaignAudience from "./CompaignAudience"
import CompaignPerformance from "./CompaignPerformance"
import CompaignTargetPerformance from "./CompaignTargetPerformance"
import CompaignReach from "./CompaignReach"
import CompaignFrequency from "./CompaignFrequency"
import CompaignOutcomes from "./CompaignOutcomes"
import Header from '../../components/header';
import './index.css'

const Dashboard = () => {
    return (
        <> 
        <Header title={"Dashboard"} button={"Plan Details"} />
        <Grid className="mt-3" gridDefinition={[{colspan: 4}, {colspan: 8}]}>
            <div>
                <CompaignDetails/>
                <CompaignImpressons/>
                <CompaignPricing/>
                <CompaignAudience/>
            </div>
            <div>
                <CompaignPerformance/>
                <CompaignTargetPerformance/>
                <CompaignReach/>
                <CompaignFrequency/>
                <CompaignOutcomes/>
            </div>
        </Grid>
        </>
    )
}

export default Dashboard