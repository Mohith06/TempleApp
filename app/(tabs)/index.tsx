import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView, Dimensions, FlatList, Platform, StatusBar } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const { width: viewportWidth } = Dimensions.get('window');

interface Event {
  title: string;
  date: Date;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <ThemedView style={styles.eventsContainer}>
      <ThemedText type="subtitle">Upcoming Events</ThemedText>
      {events.length > 0 ? (
        events.map((event, index) => (
          <View key={index} style={styles.eventItem}>
            <ThemedText>{event.title} - {moment(event.date).format('MMM D, YYYY')}</ThemedText>
          </View>
        ))
      ) : (
        <ThemedText>No upcoming events</ThemedText>
      )}
    </ThemedView>
  );
};

export default function HomeScreen() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const handleDateChange = (date: any) => {
    const formattedDate = moment(date).toDate();
    const dateString = moment(formattedDate).format('MMM D, YYYY');
    setSelectedDate(dateString);
    setEvents([...events, { title: `Event on ${dateString}`, date: formattedDate }]);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/Temple.png')} // Replace with your logo
            style={styles.logo}
          />
          <ThemedText type="title" style={styles.title}>
            SSTGH
          </ThemedText>
        </View>
        <View style={styles.headerBorder} />

        <ThemedView style={styles.calendarContainer}>
          <ThemedText type="subtitle">Select a Date</ThemedText>
          <CalendarPicker onDateChange={handleDateChange} width={300} />
          {selectedDate && <ThemedText>Selected Date: {selectedDate}</ThemedText>}
        </ThemedView>

        <UpcomingEvents events={events} />

        <View style={styles.timingsContainer}>
          <ThemedText type="subtitle">Temple Timings</ThemedText>
          <ThemedText>
            Monday thru Friday – 10:00 am – 12:00 pm & 6:30 pm – 8:30 pm{'\n'}
            Saturday & Sunday – 8:00 am – 1:00 pm & 5:30 pm – 9:00 pm
          </ThemedText>
          <ThemedText type="subtitle">Aarthi Timings</ThemedText>
          <ThemedText>
            Mornings{'\n'}
            11:00 am – Sai Baba Madyan Aarthi{'\n'}
            11:30 am – Sri Satyanarayana Aarthi{'\n'}
            Evenings{'\n'}
            7:00 pm – Sai Baba Dhoop Aarthi{'\n'}
            8:00 pm – Sri Satyanarayana Aarthi
          </ThemedText>
          <ThemedText type="subtitle">Special Aarthi Timings</ThemedText>
          <ThemedText>
            Thursdays{'\n'}
            10:30 am – Kakad Aarthi{'\n'}
            8:30 pm – Shej Aarthi
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 30 : 30, // Safe fallback for StatusBar.currentHeight
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerBorder: {
    height: 2,
    backgroundColor: 'brown',
    width: '100%',
    marginBottom: 16,
  },
  calendarContainer: {
    marginBottom: 16,
    width: '100%',
  },
  eventsContainer: {
    marginBottom: 16,
    width: '100%',
  },
  eventItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timingsContainer: {
    marginBottom: 16,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
