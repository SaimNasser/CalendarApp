import { NavigationState } from "@react-navigation/native"

export interface File {
    name: string | null,
    uri: string | null
}
export interface EventTypee {
    date: string,
    description?: string,
    eventTitle: string,
    file?: File | null,
    timeStamp: string,
    type: string,
    triggerId: string,
    resetList?: Function,
}