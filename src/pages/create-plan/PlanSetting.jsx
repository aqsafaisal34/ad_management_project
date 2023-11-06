import { Container, DateInput, FormField, Input, RadioGroup, Select } from "@cloudscape-design/components"

const PlanSetting = () => {
    return (
        <Container className="mt-5 p-3">
            <FormField label="Plan Name" className="mb-3">
                <Input type="text" placeholder="Enter Plan Name"/>
            </FormField>
            <FormField label="Budget" className="mb-3 w-50">
                <Input placeholder="$5M"/>
            </FormField>
            <FormField label="Currency" className="mb-3 w-50">
                <RadioGroup
                    items={[
                        { value: "Nielson", label: "Nielson" },
                        { value: "VideoAMP", label: "VideoAMP" },
                        { value: "iSpot", label: "iSpot" }
                    ]}
                />
            </FormField>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                    <FormField label="Flight Start Date">
                        <DateInput placeholder="YYYY/MM/DD"/>
                    </FormField>
                </div>
                <div>
                    <FormField label="Flight End Date">
                        <DateInput placeholder="YYYY/MM/DD"/>
                    </FormField>
                </div>
            </div>
            <FormField label="Agency" className="mb-3 w-50">
                <Select
                    options={[
                        { label: "Option 1", value: "1" },
                        { label: "Option 2", value: "2" },
                        { label: "Option 3", value: "3" },
                        { label: "Option 4", value: "4" },
                        { label: "Option 5", value: "5" }
                    ]}
                />
            </FormField>
            <FormField label="Advertiser" className="mb-3 w-50">
                <Select
                    options={[
                        { label: "Google", value: "Google" },
                        { label: "Youtube", value: "Youtube" },
                        { label: "Blogspot", value: "Blogspot" },
                    ]}
                />
            </FormField>
            <FormField label="Prodcut" className="mb-3 w-50">
            <Select
                    options={[
                        { label: "Morning Show :30 Ad Spot", value: "Morning Show :30 Ad Spot" },
                        { label: "Seinfeld :15 Mid Break Spot", value: "Seinfeld :15 Mid Break Spot" },
                        { label: "Prime News :20 End Break Spot", value: "Prime News :20 End Break Spot" },
                    ]}
                />
            </FormField>
        </Container>
    )
}

export default PlanSetting