import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import moment from 'moment';
import { File, EventTypee } from '../utills/Types';
import { EventType } from './Enums';


export const saveEventToStorage = async (newEvent: EventTypee) => {
    try {
        let eventsArray: Array<EventTypee> = []

        //getting previously saved events
        const eventsString = await AsyncStorage.getItem('events')
        if (eventsString)
            eventsArray = JSON.parse(eventsString)

        //checking if event times collide
        if (eventsArray.length > 0) {
            let timeCollison: boolean = false
            eventsArray.forEach(event => {
                if (event.timeStamp === newEvent.timeStamp) {
                    timeCollison = true
                }
            })
            if (timeCollison) {
                showMessage({
                    message: 'There is already an event registered with the same time!',
                    type: 'danger'
                })
                return
            }
        }
        //starting trigger notifcation for event
        const id = await createEventTrigger(newEvent.eventTitle, newEvent.timeStamp)
        //pushing events to local storage
        if (id) {
            newEvent.triggerId = id
            eventsArray.push(newEvent)
            await AsyncStorage.setItem('events', JSON.stringify(eventsArray))
            return true
        } else {
            console.log('trigger error');
        }
    } catch (error) {
        console.log(error);
    }
}
export const editEvent = async (triggerId: string, newEvent: EventTypee) => {
    try {
        let eventsArray: Array<EventTypee> = []

        //getting previously saved events
        const eventsString = await AsyncStorage.getItem('events')
        if (eventsString)
            eventsArray = JSON.parse(eventsString)
        //removing old event from array
        const index = eventsArray.findIndex(event => event.triggerId === triggerId)
        if (index > -1) {
            eventsArray.splice(index, 1)
        }
        //checking if event time collides
        if (eventsArray.length > 0) {
            let timeCollison: boolean = false
            eventsArray.forEach(event => {
                if (event.timeStamp === newEvent.timeStamp) {
                    timeCollison = true
                }
            })
            if (timeCollison) {
                showMessage({
                    message: 'There is already an event registered with the same time!',
                    type: 'danger'
                })
                return
            }
        }
        // removing previous trigger
        await notifee.cancelNotification(triggerId)

        //creating new trigger
        const id = await createEventTrigger(newEvent.eventTitle, newEvent.timeStamp)
        if (id) {
            newEvent.triggerId = id
            eventsArray.push(newEvent)

            // saving to storage
            await AsyncStorage.setItem('events', JSON.stringify(eventsArray))
            return true
        }
    } catch (error) {
        console.log(error);
    }
}
export const getAllEventsFromStorage = async (filter = EventType.ALL, lastIndex = 0) => {
    try {
        let eventsArray: Array<EventTypee> = []
        const eventsString = await AsyncStorage.getItem('events')
        if (eventsString)
            eventsArray = JSON.parse(eventsString)
        //filtering events if 'ALL' not selected
        if (filter !== EventType.ALL) {
            eventsArray = eventsArray.filter(event => event.type === filter)
        }
        return {
            data: eventsArray.slice(lastIndex, lastIndex + 4),
            lastIndex: lastIndex >= eventsArray.length ? -1 : lastIndex + 4
        }

    } catch (error) {
        console.log(error)
    }
}
export const deleteEvent = async (triggerId: string) => {
    try {
        let eventsArray: Array<EventTypee> = []

        //getting previously saved events
        const eventsString = await AsyncStorage.getItem('events')
        if (eventsString)
            eventsArray = JSON.parse(eventsString)

        //finding index to be removed
        const index = eventsArray.findIndex(event => event.triggerId === triggerId)
        if (index > -1) {
            eventsArray.splice(index, 1)
        }
        // cancelling notifcation trigger of event
        await notifee.cancelNotification(triggerId)
        await AsyncStorage.setItem('events', JSON.stringify(eventsArray))
    } catch (error) {
        console.log(error);
    }
}
export const deleteAllEvents = async () => {
    try {
        await AsyncStorage.removeItem('events')
    } catch (error) {
        console.log(error);
    }
}
// create trigger notification of event
export const createEventTrigger = async (eventName: string, timestamp: string) => {
    try {
        console.log(moment(timestamp).subtract(10, 'minutes').valueOf())
        // Create a time-based trigger
        const trigger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: moment(timestamp).subtract(10, 'minutes').valueOf(),
            alarmManager: {
                allowWhileIdle: true,
            },
        };

        // Create a trigger notification
        const id = await notifee.createTriggerNotification(
            {
                title: `${eventName} starts in 10 mins`,
                body: `Today at ${moment(timestamp).format('hh:mm a')}`,
                android: {
                    channelId: 'your-channel-id',
                },
            },
            trigger,
        );
        return id
    } catch (error) {
        console.log(error);
        return false
    }
}

export function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
export const capitalizeFirst = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
