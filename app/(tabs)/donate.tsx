import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const Donate = () => {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText type="title" style={styles.title}>
          Donate Today!
        </ThemedText>

        <Text style={styles.infoText}>
          CONTRIBUTE – We need your support. All donations are tax deductible.
        </Text>
        <Text style={styles.infoText}>
          With the blessings of Lord Sri Satyanarayana and Sri Lakshmi, we are
          proceeding with temple development. We are planning to have the
          deities of Sri Satyanarayana, Sri Lakshmi, Ganesha, Shiva, Parvathi,
          Ayyapa, Anjaneya, Muruga, Navagrahas, and more.
        </Text>
        <Text style={styles.infoText}>
          We are also looking for donations towards building the temple. Please
          consider generously donating financially and further through
          volunteering.
        </Text>
        <Text style={styles.infoText}>SSTGH 501C number is 46-3543728</Text>

        <ThemedText type="subtitle" style={styles.sectionHeader}>
          Donation Tiers
        </ThemedText>
        <View style={styles.tierList}>
          <Text style={styles.tierText}>DIAMOND: $50,000 and above</Text>
          <Text style={styles.tierText}>PLATINUM: $25,000 and above</Text>
          <Text style={styles.tierText}>GOLD: $10,000 and above</Text>
          <Text style={styles.tierText}>SILVER: $5,000 and above</Text>
          <Text style={styles.tierText}>BRONZE: $2,500 and above</Text>
          <Text style={styles.tierText}>
            LIFE MEMBER: $1,250 (one-time payment)
          </Text>
          <Text style={styles.tierText}>Access Gate: $5,000</Text>
        </View>

        <ThemedText type="subtitle" style={styles.sectionHeader}>
          Donate via Zelle
        </ThemedText>
        <Text style={styles.infoText}>
          For Zelle transfers, use the email{' '}
          <Text style={styles.emailText}>donate@sstgh.org</Text>. Simply log
          into your banking app, navigate to the Zelle transfer section, and
          enter the email address to make your donation securely.
        </Text>

        <View style={styles.zelleContainer}>
          <TouchableOpacity>
            <Image
              style={styles.zelleIcon}
              source={{
                uri: 'https://www.citypng.com/public/uploads/preview/zelle-square-logo-icon-image-png-701751694968672x1qvmpuwiq.png', // Replace with the Zelle icon URL
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5dc', // Beige background
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 30 : 30, // Safe padding
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#344055',
  },
  infoText: {
    fontSize: 16,
    color: '#4c5dab',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 22,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#344055',
    textAlign: 'center',
  },
  tierList: {
    marginBottom: 20,
  },
  tierText: {
    fontSize: 16,
    color: '#7d7d7d',
    marginBottom: 8,
    textAlign: 'center',
  },
  emailText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  zelleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  zelleIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Donate;
