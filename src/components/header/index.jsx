import { Icon, Grid } from "@cloudscape-design/components";
import FlashAlert from "../flash-alert";
import BreadCrumb from "../bread-crumb";
import TitleSection from "../title-section";
import "./style.css"
import { COLOR_PRIMARY_PURPLE } from "../../utils/colors";

const Header = (props) => {
   
    return (
        <div style={{backgroundColor: COLOR_PRIMARY_PURPLE, padding: "10px 10px 20px 10px"}}>
            <Grid
                gridDefinition={[{ colspan: 0.5 }, { colspan: 11 }, { colspan: 0.5 }]}
                className="box"
            >
                <Icon name="menu" variant="inverted" size="big"/>
                <FlashAlert/>
                {/* <Icon name="status-info" variant="inverted" size="big"/> */}
            </Grid>
            <Grid
                gridDefinition={[{ colspan: 0.5 }, { colspan: 11 }, { colspan: 0.5 }]}
                className="box"
            >
            <div></div>
            <div>
                <BreadCrumb/>
                <TitleSection title={props.title} button={props.button} function={props.function} />
            </div>
            <div></div>
            </Grid>
        </div>
    )
}

export default Header