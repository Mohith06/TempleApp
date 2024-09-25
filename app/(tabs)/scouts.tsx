import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define a type for past scout service projects
interface PastProject {
  name: string;
  email: string;
  phone: string;
  troopNumber: string;
  scoutmasterEmail: string;
  projectDescription: string;
}

const Scouts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [troopNumber, setTroopNumber] = useState('');
  const [scoutmasterEmail, setScoutmasterEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Initialize pastProjects with a proper type
  const [pastProjects, setPastProjects] = useState<PastProject[]>([]); // Here is the key fix

  const handleSubmit = () => {
    const newProject: PastProject = {
      name,
      email,
      phone,
      troopNumber,
      scoutmasterEmail,
      projectDescription,
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
      <ThemedText type="title" style={styles.title}>Scout Service Project Submission</ThemedText>
      <ScrollView>
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

        <ThemedText type="subtitle" style={styles.subtitle}>Past Scout Service Projects</ThemedText>
        {pastProjects.map((project, index) => (
          <View key={index} style={styles.projectContainer}>
            <ThemedText>{project.name} (Troop: {project.troopNumber})</ThemedText>
            <ThemedText>{project.projectDescription}</ThemedText>
            {/* Add image upload functionality here if needed */}
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
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
});

export default Scouts;