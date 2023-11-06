import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";

const FlashAlert = () => {
  const [items, setItems] = React.useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (<>Flash description.</>),
      id: "message_1"
    }
  ]);
  return <Flashbar items={items} />;
}

export default FlashAlert