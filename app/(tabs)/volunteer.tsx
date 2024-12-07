import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity, FlatList, Platform, StatusBar } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

// Predefined events list
const events = [
  { id: '1', title: 'Community Clean-up', date: 'September 15, 2023' },
  { id: '2', title: 'Food Drive', date: 'October 20, 2023' },
  { id: '3', title: 'Fundraising Gala', date: 'November 5, 2023' },
];

const VolunteerSignUpScreen = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [signUps, setSignUps] = useState<{ [key: string]: { name: string; phone: string; email: string } }>({});

  const handleSignupChange = (eventId: string, field: string, value: string) => {
    setSignUps(prev => ({
      ...prev,
      [eventId]: {
        ...prev[eventId],
        [field]: value,
      },
    }));
  };

  const handleToggleDropdown = (eventId: string) => {
    setExpandedEvent(prev => (prev === eventId ? null : eventId));
  };

  const handleSubmit = (eventId: string) => {
    console.log('Submitted:', signUps[eventId]);
    setSignUps(prev => ({
      ...prev,
      [eventId]: { name: '', phone: '', email: '' },
    }));
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Volunteer Sign-Up
      </ThemedText>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Upcoming Events
        </ThemedText>
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventContainer}>
              <ThemedText style={styles.eventTitle}>
                {item.title} - {item.date}
              </ThemedText>
              <TouchableOpacity onPress={() => handleToggleDropdown(item.id)}>
                <ThemedText style={styles.dropdownToggle}>
                  {expandedEvent === item.id ? 'Hide Sign-Up' : 'Sign Up'}
                </ThemedText>
              </TouchableOpacity>
              {expandedEvent === item.id && (
                <Collapsible title="Sign Up Form">
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={signUps[item.id]?.name || ''}
                    onChangeText={value => handleSignupChange(item.id, 'name', value)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={signUps[item.id]?.phone || ''}
                    onChangeText={value => handleSignupChange(item.id, 'phone', value)}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    value={signUps[item.id]?.email || ''}
                    onChangeText={value => handleSignupChange(item.id, 'email', value)}
                  />
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => handleSubmit(item.id)}
                  >
                    <ThemedText style={styles.submitButtonText}>Submit</ThemedText>
                  </TouchableOpacity>
                </Collapsible>
              )}
            </View>
          )}
        />
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Beige background
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 30 : 30, // Adjust for StatusBar
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingBottom: 24, // Add bottom padding for spacing
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 16,
    fontWeight: '600',
  },
  eventContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  dropdownToggle: {
    fontSize: 16,
    color: 'blue',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 4,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default VolunteerSignUpScreen;
