import * as React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
import { useNavigate } from "react-router-dom"


const TitleSection = (props) => {
  console.log(props)
  const navigate = useNavigate();
  const submitHandler = (e) =>{
    e.preventDefault()
    navigate('/plan-details')
  }
  const submitHandlerTwo = (e) =>{
    e.preventDefault()
    navigate('/create-plan')
  }
    return (

      <Header
        variant="h1"
        actions={
          <SpaceBetween direction="horizontal" size="s">
            <Button variant="primary" onClick={props.buttonValue == "Create Plan" ? submitHandlerTwo : submitHandler}>
             {props.button}
            </Button>
            {/* <Button variant="primary" onClick={ submitHandlerTwo }>
              Create Plan
            </Button> */}
          </SpaceBetween>
        }
        info={<Link variant="info">Info</Link>}
        description="Page Description"
      >
        <div style={{display: "inline", color: "white"}}>{props.title}</div>
      </Header>
    );
}

export default TitleSection