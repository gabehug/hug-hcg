import React from "react";
import { useFormik } from "formik";
import { PageContainer } from "../pageContainer";
import styled from "styled-components";
import { Button } from "../button";
import * as Yup from "yup"; 
import emailjs from "emailjs-com";

const Background = styled.div`
    width: 100%;
    height: 30em;
    display: flex;
    align-items: start;
    justify-content: start;
    margin-left: -3em;
`;

const NameContainer = styled.div`
    width: 14em;
    height: 2em;
    margin: 2em 2em 2.5em 2em;

    input {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #8194AD;
        padding: 0.5em;
    }

    p {
        margin: 0.5em 0em 0.5em 0.5em;
        color: red;
        font-size: 0.75em;
        text-align: left;
    }

`;

const EmailContainer = styled.div`
    width: 14em;
    height: 2em;
    margin: 2em 2em 2.5em 2em;

    input {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #8194AD;
        padding: 0.5em;
    }

    p {
        margin: 0.5em 0em 0.5em 0.5em;
        color: red;
        font-size: 0.75em;
        text-align: left;
    }
`;

const MessageContainer  = styled.div`
    width: 36em;
    height: 10em;
    margin: 2em 2em 2.5em 2em;

    input {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #8194AD;
        padding: 0.5em
    }

    p {
        margin: 0.5em 0em 0.5em 0.5em;
        color: red;
        font-size: 0.75em;
        text-align: left;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: left;
    margin: 3em 2em 2em 2em;
    height: 3em;
    width: 8em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    background: #8194AD;
    border: 0px;

    &: hover {
        border: 1px solid white;
        background-color: transparent;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    button {
        font-family: proxima-nova, sans-serif;
        font-weight: 600;
        background-color: transparent;
        border: 0px;
        color: white;
        font-size 1em;
    }
`;

export function ContactForm(props) {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(30, "Please enter a shorter name")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            message: Yup.string()
                .max(2000, "2000 character limit")
                .required("Required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_jrdc6s4', 
            'template_c7iss9e', 
            e.target, 
            'user_5I5zBfJJtNyqETNxOAhgD')
    };

    return (
        <PageContainer>
            <Background>
                <form onSubmit={formik.handleSubmit && sendEmail}>
                    <NameContainer>
                        <input 
                            id= "firstName"
                            name="firstName"
                            type= "text"
                            placeholder= "Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> :  null}
                    </NameContainer>
                    <EmailContainer>
                        <input 
                            id= "email"
                            name="email"
                            type= "email"
                            placeholder= "Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> :  null}
                    </EmailContainer>
                    <MessageContainer>
                        <input 
                            id= "message"
                            name="message"
                            type= "text"
                            placeholder= "Message"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? <p>{formik.errors.message}</p> :  null}
                    </MessageContainer>
                    <ButtonContainer>
                        <button type="submit">Submit</button>
                    </ButtonContainer>
                </form>
            </Background>
        </PageContainer>
    )
}