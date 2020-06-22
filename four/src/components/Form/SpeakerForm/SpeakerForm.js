import React from 'react';
import {
    Form,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormButton,
} from '../FormStyles';

// Task 4 (3 points)
// Modify form on the way when user types something in the input, that value is stored to component state.
// If user clicks on the submit button, all of the form values should be sent to the 
// https://api-speck-academy.herokuapp.com/speakers route with POST method.
// You'll need to write fetch method inside /src/api/speakers.js to POST form data to the API.
// Go to the https://api-speck-academy.herokuapp.com/ and scroll down to the SPEAKERS (POST) section
// to see which values and headers needs to be sent to the route, and to see what will be returend from API
// if the request will be successfull. In case that your request was successfull implement redirection to the
// speakers page.

const AddSpeaker = (props) => {
    return (
        <Form>
            <FormRow>
                <FormLabel htmlFor="title">Title</FormLabel>
                <FormInput
                    type="text"
                    id="title"
                    name="title"
                    required />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="about">About</FormLabel>
                <FormInput
                    type="text"
                    id="about"
                    name="about"
                    required />
            </FormRow>
            <FormButtonRow>
                <FormButton>Submit speaker</FormButton>
            </FormButtonRow>
        </Form>
    );
}

export default AddSpeaker;