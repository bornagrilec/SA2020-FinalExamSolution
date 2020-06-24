import apiOrigin from './api';

export const getSpeakers = (authToken) => {
    return fetch(`${apiOrigin}/speakers`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then(res => res.json());
}

export const postSpeaker = (authToken, speaker) => {
    return fetch(`${apiOrigin}/speakers`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(speaker),
    }).then(res => res.json());
}