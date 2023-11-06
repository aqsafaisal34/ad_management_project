import "./style.css"
import { Button, Grid } from "@cloudscape-design/components"
import PlanSetting from "./PlanSetting"
import PlanCalendar from "./PlanCalendar"
import PlanMetircs from "./PlanMetircs"
import Platform from "./Platform"
import DayParts from "./DayParts"
import AudienceSelection from "./AudienceSelection";
import Header from '../../components/header';


const CreatePlan = () => {
    return (
        <>
        <Header title={"Create Plan"} button={"Plan details"} />
        <Grid gridDefinition={[{colspan: 5}, {colspan: 6}]}>
            <div className="left-side">
                <h2 className="font-weight-bold">Plan Setting</h2>
                <PlanSetting/>
                <Platform/>
                <DayParts/>
                <AudienceSelection/>
            </div>
            <div className="right-side">
                <h2 className="font-weight-bold">Summary</h2>
                <PlanCalendar/>
                <PlanMetircs/>
                <Button variant="" className="mt-4 float-right custom-button">Create Plan</Button>
            </div>
        </Grid>
        </>
    )
}

export default CreatePlan