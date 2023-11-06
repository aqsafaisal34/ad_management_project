import * as React from "react";
import Input from "@cloudscape-design/components/input";

const SearchBox = () => {
  const [value, setValue] = React.useState("");
  return (
    <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      placeholder="Search"
      type="search"
    />
  );
}

export default SearchBox