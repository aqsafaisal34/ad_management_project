import React, {useState} from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import { Container, Header } from "@cloudscape-design/components"
import "./style.css"
import { useNavigate } from "react-router-dom";
import { COLOR_PRIMARY_PURPLE } from "../../utils/colors";

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("username", username)
        localStorage.setItem("isLogin", true)
        navigate("/dashboard")
    }

    return (
        <div className="main" style={{backgroundColor: COLOR_PRIMARY_PURPLE}}>
            <Container
                className="w-50 p-4"
                header={
                    <Header variant="h2" description="Please Login to your account">
                        Welcome back...!
                    </Header>
                }
            >
                <form onSubmit={onSubmit}>
                    <Form
                        actions={
                            <SpaceBetween direction="horizontal" size="sl">
                                <Button className="custom-button">Login</Button>
                            </SpaceBetween>
                        }
                    >
                        <SpaceBetween direction="vertical" size="l">
                            <FormField label="Username">
                                <Input
                                    type="text" 
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={({detail}) => setUsername(detail.value)}
                                />
                            </FormField>
                            <FormField label="Password">
                                <Input
                                    type="password" 
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={({detail}) => setPassword(detail.value)}
                                />
                            </FormField>
                        </SpaceBetween>
                    </Form>
                </form>
            </Container>
        </div>
    )
}

export default Login