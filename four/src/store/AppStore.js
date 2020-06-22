import {
    observable,
    action,
    decorate,
} from 'mobx';

class AppStore {
    events = [];
    speakers = [];

    setEvent = event => {
        this.events.push(event);
    }

    setEvents = events => {
        this.events = events;
    }

    setSpeaker = speaker => {
        this.speakers.push(speaker);
    }

    setSpeakers = speakers => {
        this.speakers = speakers;
    }
}

decorate(AppStore, {
    events: observable,
    speakers: observable,
    setEvent: action,
    setEvents: action,
    setSpeaker: action,
    setSpeakers: action,
});

const appStore = new AppStore();

export default appStore;