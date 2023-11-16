import "./style.css";
import { Button, Grid } from "@cloudscape-design/components";
import PlanSetting from "./PlanSetting";
import PlanCalendar from "./PlanCalendar";
import PlanMetircs from "./PlanMetircs";
import Platform from "./Platform";
import DayParts from "./DayParts";
import AudienceSelection from "./AudienceSelection";
import Header from '../../components/header';
import { useNavigate } from "react-router-dom";
import './style.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => {
     toast.success('Plan Created Successfully');
     console.log("Plan Created Successfully")
}


const CreatePlan = () => {
    const navigate = useNavigate();
    const submitHandlerTwo = (e) =>{
        e.preventDefault()
        navigate('/dashboard')
      }

    return ( 
        <>
        <Header title={"Create Plan"} button={"Dashboard"} function={submitHandlerTwo}/>
        <Grid gridDefinition={[{colspan: 5}, {colspan: 6}]}>
            <div className="left-side">
                <h2 className="font-weight-bold spacing">Plan Setting</h2>
                <PlanSetting/>
                <Platform/>
                <DayParts/>
                <AudienceSelection/>
            </div>
            <div className="right-side">
                <h2 className="font-weight-bold">Summary</h2>
                <PlanCalendar/>
                <PlanMetircs/>
                <Button variant=" primary" className="mt-4 float-right custom-button" onClick={notify}>Create Plan</Button>
                <Toaster
                position="bottom-center"
                reverseOrder={false}
                 />
            </div>
        </Grid>
        </>
    )
}

export default CreatePlan