import React from 'react';
import { PageTitle } from '../lib/styles/GeneralStyles';
import SpeakerForm from '../components/Form/SpeakerForm/SpeakerForm';

const AddSpeaker = () => {
    return (
        <>
            <PageTitle>Add Speaker</PageTitle>
            <SpeakerForm />
        </>
    );
}

export default AddSpeaker;