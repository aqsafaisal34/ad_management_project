import { Container, Grid, Header } from "@cloudscape-design/components"
import Slider from '@mui/material/Slider';
import { useState } from "react";

const Platform = () => {
    const [value, setValue] = useState([1, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="mt-5">
            <Container className="p-3" header={<Header variant="h3">Platform</Header>}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
                <Grid gridDefinition={[{colspan: 6}, {colspan: 6}]}>
                    <div>
                        <p className="text-left">Linear</p>
                        <p className="text-left">Digital</p>
                        <p className="text-left">Other</p>
                    </div>
                    <div>
                        <p className="text-right">0%</p>
                        <p className="text-right">100%</p>
                        <p className="text-right">0%</p>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default Platform