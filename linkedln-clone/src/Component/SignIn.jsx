import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Profile from './Content/Profile/Profiles'
//import "./SignIn.css"

export default class SignIn extends Component {

    state={
        loginDetails:{
            email:"",
            password:""
        }
    }

    updateLogin = (event) => {
        let newLoginDetails = this.state.loginDetails;
        let id = event.currentTarget.id;
        newLoginDetails[id] = event.currentTarget.value;
        this.setState({
            newLoginDetails
        })
        // console.log("bla bla", this.state)
    }
 
    loginHandler = async () => {
        let userInfo = {
          email: this.state.loginDetails.email,
          password: this.state.loginDetails.password,
        };
        let response = await fetch("http://localhost:3003/profile/login", {
          method: "POST",
          body: JSON.stringify(userInfo),
          credentials: "include",
          headers: new Headers({
            "content-Type": "application/json",
          }),
        });
        
        if(response.ok){
            this.props.history.push("profile/me") 
        }else{
            alert("Error")
        }
        // const token = await response.json()
        // localStorage["accessToken"] = token.token
        // localStorage["email"] = this.state.loginDetails.email
        // if(localStorage.accessToken){
        //     const authorize = await fetch("http://localhost:3008/profile/authorizeUser" , {
        //         headers:{
        //             "Authorization": "Bearer " + localStorage.accessToken
        //         }
        //     })
        //     if(authorize.ok){
        //         this.props.history.push("/profile/user23");
        //     }
        // }
        //     else
        //     {
        //             alert("Please Log in")
        //         }
        //console.log(token)
        
      };

    //   LoginWithLinkedinHandler = async () => {
    //       const response = await ("http://localhost:3008/profile/auth/linkedin")
    //       console.log(response)
    //   }

    render() {
        return (
            <Container style={{ margin: "auto" }}>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }} className="text-center">
                        <img
                            className="img-fluid"
                            src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-linkedin-logo.png"
                            style={{ maxHeight: "45px", marginTop: "4.7em" }}
                            alt=""
                        />
                        <div className="mt-3" style={{ fontSize: "32px", lineHeight: "32px" }}>
                            <h3>Welcome Back</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center">
                    <p style={{ fontSize: "20px", lineHeight: "28px", opacity: "70%", textAlign: "center", margin: "0 auto 1.5rem", fontWeight: "400" }}>
                        Don't miss your next opportunity. Sign in to stay updated on your professional world.
                            </p>
                </Row>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }} className="text-center">
                        <Form.Group style={{ marginTop: "0" }}>
                            <Form.Control
                            htmlFor="email"
                                value={this.state.loginDetails.email}
                                className="mb-3"
                                type="email"
                                id="email"
                                placeholder="Email or Phone"
                                size="lg"
                                onChange={(e) =>this.updateLogin(e)}
                            />
                            <Form.Control
                            htmlFor="password"
                                value={this.state.loginDetails.password}
                                size="lg"
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>this.updateLogin(e)}
                            />
                        </Form.Group>
                        <label className="myCheckbox mt-3" style={{ float: "left" }}>
                            <input type="checkbox" className="checkboxx mr-2" />
                            <a style={{ fontWeight: "350", fontSize: "17px" }}> Remember Me.</a><a style={{ fontWeight: "500", color: "#0A66C2", fontSize: "17px" }}> Learn More.</a>

                        </label>
                        <Button
                            className="w-100 mt-3"
                            style={{ borderRadius: "20em", fontSize: "20px", fontWeight: "500" }} onClick={this.loginHandler}>
                            Sign in
                        </Button>
                        <a href="http://localhost:3008/profile/auth/linkedin">Linkedin</a>
                        <a>Facebook</a>
                        <div className="mt-4" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "17px" }}>
                            <a>Forgot Password ?</a>
                            <p className="mt-3" style={{ fontWeight: "350" }}>
                                New to LinkedIn? <Link to={"/register"} className="button secondary text-center" style={{ fontWeight: "500", color: "#0A66C2", fontSize: "17px" }} >Join now.</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}