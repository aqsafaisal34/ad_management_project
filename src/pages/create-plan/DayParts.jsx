import { Container, Header, RadioGroup } from "@cloudscape-design/components"
import './style.css';

const DayParts = () => {
    return (
        <div className="mt-5 spacing">
            <Container className="p-3" header={<Header variant="h3">Day Parts</Header>}>
                <RadioGroup
                    items={[
                        { value: "All Day", label: "All Day" },
                        { value: "Early Morning", label: "Early Morning" },
                        { value: "Custom", label: "Custom" }
                    ]}
                />
            </Container>
        </div>
    )
}

export default DayParts