import React, { createContext, useEffect, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the structure of an event
export interface Event {
    date: string;
    time: string;
    description: string;
}

// Define the context type
interface EventContextType {
    events: Event[];
    addEvent: (event: Event) => void;
}

// Create the EventContext with a default value
export const EventContext = createContext<EventContextType | undefined>(undefined);

// Define the props for EventProvider
interface EventProviderProps {
    children: ReactNode;
}

// Create the EventProvider component
export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [events, setEvents] = useState<Event[]>([]);

    // Load events from AsyncStorage when the app starts
    useEffect(() => {
        const loadEvents = async () => {
            try {
                const storedEvents = await AsyncStorage.getItem('events');
                if (storedEvents) {
                    setEvents(JSON.parse(storedEvents)); // Load existing events
                }
            } catch (error) {
                console.error('Error loading events:', error);
            }
        };
        loadEvents();
    }, []);

    // Save events to AsyncStorage whenever they change
    useEffect(() => {
        const saveEvents = async () => {
            try {
                await AsyncStorage.setItem('events', JSON.stringify(events));
            } catch (error) {
                console.error('Error saving events:', error);
            }
        };
        saveEvents();
    }, [events]);

    // Function to add a new event
    const addEvent = (event: Event) => {
        setEvents((prevEvents) => [...prevEvents, event]);
    };

    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
};
