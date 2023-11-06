import * as React from "react";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";

const BreadCrumb = () => {
  return (
    <BreadcrumbGroup
      items={[
        { text: "Services", href: "#services" },
        {
          text: "Resource Type",
          href: "#services/resource-type"
        }
      ]}
      ariaLabel="Breadcrumbs"
    />
  );
}

export default BreadCrumb