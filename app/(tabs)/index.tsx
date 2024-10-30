import React, { useState } from 'react';
import { Image, StyleSheet, View, TextInput, ScrollView, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CalendarPicker from 'react-native-calendar-picker'; 
import moment from 'moment';
import Carousel from 'react-native-snap-carousel';

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
  const [news, setNews] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const handleDateChange = (date: any) => {
    const formattedDate = moment(date).toDate();
    const dateString = moment(formattedDate).format('MMM D, YYYY');
    setSelectedDate(dateString);
    setEvents([...events, { title: `Event on ${dateString}`, date: formattedDate }]);
  };

  const images = [
    require('@/assets/images/image1.jpg'), // Replace with your image paths
    require('@/assets/images/image2.jpg'),
    require('@/assets/images/image3.jpg'),
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/Temple.png')} // Replace with your logo path here
            style={styles.logo}
          />
          <ThemedText type="title" style={styles.title}>
            SSTGH
          </ThemedText>
        </View>
        <View style={styles.headerBorder} />

        {/* Slideshow Component */}
        <View style={styles.carouselContainer}>
          <Carousel
            data={images}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={styles.carouselImage}
              />
            )}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            autoplay
            loop
          />
        </View>

        <ThemedView style={styles.calendarContainer}>
          <ThemedText type="subtitle">Select a Date</ThemedText>
          <CalendarPicker
            onDateChange={handleDateChange}
            width={300}
          />
          {selectedDate && (
            <ThemedText>Selected Date: {selectedDate}</ThemedText>
          )}
        </ThemedView>

        <UpcomingEvents events={events} />

        <ThemedView style={styles.newsContainer}>
          <ThemedText type="subtitle">News</ThemedText>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Write your news here..."
            value={news}
            onChangeText={setNews}
          />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
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
  carouselContainer: {
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: 200, // Set height for slideshow
    marginBottom: 16,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Change this to 'contain' if needed
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
  newsContainer: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: '100%',
  },
});