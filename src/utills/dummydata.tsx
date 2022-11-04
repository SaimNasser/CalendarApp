import { randomDate } from "./Methods"

export const eventTypes = [
    'All',
    'Event',
    'Out of Office',
    'Task'
]
export const eventList = [
    {
        id: '1',
        eventTitle: 'A World of Opportunities.',
        dateAndTime: randomDate(new Date(), new Date(2027, 1, 1)),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        attachment: {
            file: '',
            name: 'Attachment.pdf'
        }
    },
    {
        id: '2',
        eventTitle: 'A Whole New World.',
        dateAndTime: randomDate(new Date(), new Date(2027, 1, 1)),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        attachment: {
            file: '',
            name: 'Attachment.pdf'
        }
    },
    {
        id: '3',
        eventTitle: 'A Spectrum of Opportunities.',
        dateAndTime: randomDate(new Date(), new Date(2027, 1, 1)),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        attachment: {
            file: '',
            name: 'Attachment.pdf'
        }
    },
    {
        id: '4',
        eventTitle: 'A Whole New World.',
        dateAndTime: randomDate(new Date(), new Date(2027, 1, 1)),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        attachment: {
            file: '',
            name: 'Attachment.pdf'
        }
    },
    {
        id: '5',
        eventTitle: 'A Spectrum of Opportunities.',
        dateAndTime: randomDate(new Date(), new Date(2027, 1, 1)),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        attachment: {
            file: '',
            name: 'Attachment.pdf'
        }
    },
]