import { Container, FormField, Multiselect, RadioGroup } from "@cloudscape-design/components"
import { useState } from "react";
import './style.css';

const AudienceSelection = () => {
    const [selectedOptions, setSelectedOptions] = useState([])
    return (
        <div className="mt-5 spacing">
            <Container className="p-3">
                <FormField label="Audience Selection" className="w-50">
                    <RadioGroup className="d-flex justify-content-between align-items-center"
                        items={[
                            { value: "Demo", label: "Demo" },
                            { value: "Custom", label: "Custom" }
                        ]}
                    />
                </FormField>
                <FormField>
                    <Multiselect
                        placeholder="Choose options"
                        selectedOptions={selectedOptions}
                        onChange={({ detail }) =>
                            setSelectedOptions(detail.selectedOptions)
                        }
                        options={[
                            {
                                label: "A25-49",
                                value: "1",
                            },
                            {
                                label: "A25-49 Owns a home",
                                value: "2",
                            }
                        ]}
                    />
                </FormField>
                <FormField label="Optimization Options" className="mt-3">
                    <RadioGroup
                        items={[
                            { value: "None", label: "None" },
                            { value: "Additional", label: "Additional" },
                            { value: "Not Reached", label: "Not Reached" }
                        ]}
                    />
                </FormField>
            </Container>
        </div>
    )
}

export default AudienceSelection