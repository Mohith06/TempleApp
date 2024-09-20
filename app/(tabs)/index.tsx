import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, TextInput, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CalendarPicker from 'react-native-calendar-picker'; // Make sure to install this library
import moment from 'moment';

export default function HomeScreen() {
  // Explicitly type selectedDate as: string | null
  const [news, setNews] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null); // Allow string or null type

  const handleDateChange = (date: any) => { // Use 'any' for simplicity (you can replace it with the appropriate type)
    setSelectedDate(moment(date).format('MMM D, YYYY')); // Now this works without any error
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Temple.png')}
          style={styles.logo}
        />
        <ThemedText type="title" style={styles.title}>
          Sri Satyanarayana Temple
        </ThemedText>
      </View>
      
      <ScrollView>
        <ThemedView style={styles.calendarContainer}>
          <ThemedText type="subtitle">Select a Date</ThemedText>
          <CalendarPicker onDateChange={handleDateChange} />
          {selectedDate && (
            <ThemedText>Selected Date: {selectedDate}</ThemedText>
          )}
        </ThemedView>

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
    backgroundColor: '#f5f5dc', // beige background
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  calendarContainer: {
    marginBottom: 16,
  },
  newsContainer: {
    marginBottom: 16,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});