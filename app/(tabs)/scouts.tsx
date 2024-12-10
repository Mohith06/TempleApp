import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define past service projects type
interface PastProject {
  title: string;
  description: string;
}

const Scouts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [troopNumber, setTroopNumber] = useState('');
  const [scoutmasterEmail, setScoutmasterEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Initialize pastProjects with a proper type
  const [pastProjects, setPastProjects] = useState<PastProject[]>([
    {
      title: 'Eagle Scout Vegetable / Flower Garden Project: Guhan Gurubaran',
      description:
        'Guhan Gurubaran, a 9th grader from Bridgeland High School and member of Scouts, worked on an Eagle Scout volunteer service project for the Satya Narayana Temple, Cypress, TX. Guhan led a vegetable/flower garden building project to help the temple with produce to support and possibly generate additional income in the future. Guhan and his team built the garden out of wood from scratch. The dimensions are 5ft x 2ft x 14in. There are three raised garden beds above the ground. This garden will produce fruits and veggies for the temple. This project was successfully completed.',
    },
    {
      title: 'Eagle Scout Tree Project by: Ruthvik Jonna',
      description:
        'Eagle Scout Ruthvik Jonna successfully completed the Tree project at the Temple. He meticulously planned and coordinated to plant a variety of shade trees and fruit trees around the temple. He also made sure to take care of the trees until the roots got well-established. Thanks to Ruthvik for this great effort, which provides shade and fruits, benefiting the temple and the community.',
    },
    {
      title: 'Eagle Scout Park Bench Project by: Tarun Manoharan',
      description:
        'Eagle Scout Tarun Manoharan successfully completed the Park Bench project. This project involved three park benches, each seating 8 people comfortably, designed and built from raw wood, treated, and stained to weather-resistant standards. He planned and led this project to completion. This is a great addition to the temple and will help people rest and relax on the benches. Thank you, Tarun, for completing this wonderful project, which will greatly help Sri Satyanarayana Temple and the community.',
    },
  ]);

  const handleSubmit = () => {
    const newProject: PastProject = {
      title: name, // You can modify this as per your requirement
      description: projectDescription,
    };

    setPastProjects([...pastProjects, newProject]);
    // Clear the form after submission
    setName('');
    setEmail('');
    setPhone('');
    setTroopNumber('');
    setScoutmasterEmail('');
    setProjectDescription('');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText type="title" style={styles.title}>
          Scout Service Project Submission
        </ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Troop Number"
          value={troopNumber}
          onChangeText={setTroopNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Scoutmaster Email"
          keyboardType="email-address"
          value={scoutmasterEmail}
          onChangeText={setScoutmasterEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Description of Project"
          multiline
          value={projectDescription}
          onChangeText={setProjectDescription}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <ThemedText style={styles.submitButtonText}>Submit Project</ThemedText>
        </TouchableOpacity>

        <ThemedText type="subtitle" style={styles.subtitle}>
          Past Scout Service Projects
        </ThemedText>
        {pastProjects.map((project, index) => (
          <View key={index} style={styles.projectContainer}>
            <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
            <ThemedText>{project.description}</ThemedText>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Beige background
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 30 : 30, // Safe padding for title
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 16, // Ensure full scrolling visibility
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  projectContainer: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  subtitle: {
    fontSize: 24,
    marginTop: 16,
    marginBottom: 4,
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Scouts;
