import { Header, Table } from "@cloudscape-design/components"

const PlanCalendar = () => {
    return (
        <Table
            className="mt-5 p-4"
            loadingText="Loading resources"
            sortingDisabled
            resizableColumns
            header={<Header className="negative-margin"> Projected Calendar </Header>}
            columnDefinitions={[
                {
                    id: "column1",
                    header: "Column Header",
                    cell: item => item.column1 || "-",
                    width: "33%"
                },
                {
                    id: "column2",
                    header: "Column Header",
                    cell: item => item.column2 || "-",
                    width: "33%"
                },
                {
                    id: "column3",
                    header: "Column Header",
                    cell: item => item.column3 || "-",
                    width: "33%"
                }
            ]}
            items={[
                {
                    column1: "Column 1",
                    column2: "Column 2",
                    column3: "Column 3",
                },
                {
                    column1: "Column 1",
                    column2: "Column 2",
                    column3: "Column 3",
                },
                {
                    column1: "Column 1",
                    column2: "Column 2",
                    column3: "Column 3",
                }
            ]}
        />
    )
}

export default PlanCalendar