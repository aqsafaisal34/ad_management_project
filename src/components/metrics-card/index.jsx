import { Container, Header } from "@cloudscape-design/components"
import { COLOR_PRIMARY_BLUE } from "../../utils/colors";
import './index.css';

const MetircsCard = ({heading, text, fontSize = 28}) => {
    return (
        <Container className="mb-3 spacing" header={<Header variant="h3">{heading}</Header>}>
            <p
                style={{
                    color: COLOR_PRIMARY_BLUE,
                    margin:0,
                    fontWeight: 700,
                    fontSize
                }}
            >
                {text}
            </p>
        </Container>
    )
}

export default MetircsCard