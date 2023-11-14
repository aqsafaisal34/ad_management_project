import { Container, Header, RadioGroup } from "@cloudscape-design/components"
import './style.css';

const DayParts = () => {
    return (
        <div className="mt-5 spacing">
            <Container className="p-3" header={<Header variant="h3">Day Parts</Header>}>
                <RadioGroup
                    items={[
                        { value: "All Day", label: "All Day  12:00am to 11:59pm" },
                        { value: "Early Morning", label: "Early Morning" },
                        { value: "Daytime", label: "Daytime" },
                        { value: "Early Fringe", label: "Early Fringe" },
                        { value: "Early News", label: "Early News" },
                        { value: "Prime Access", label: "Prime Access" },
                        { value: "Prime Time", label: "Prime Time" },
                        { value: "Prime Sunday", label: "Prime Sunday" },
                        { value: "Late News", label: "Late News" },
                        { value: "Late Fringe", label: "Late Fringe" },
                        { value: "Overnight", label: "Prime Access" }, 
                        { value: "Custom", label: "Custom" },

                    ]}
                />
            </Container>
        </div>
    )
}

export default DayParts