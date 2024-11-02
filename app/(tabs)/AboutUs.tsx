import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>About the Temple</Text>
        <Text style={styles.paraStyle}>
          Our temple is a place of peace, spirituality, and community. It was established in [Year] to serve as a sanctuary for worship and fellowship.
        </Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.subHeader}>Origin of the Temple</Text>
          <Text style={styles.paraStyle}>
            The temple was founded in [Location] by [Founder's Name] with the mission of creating a space for spiritual growth and community support. Over the years, it has become a focal point for worship and various cultural events.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.subHeader}>About the Temple</Text>
          <Text style={styles.paraStyle}>
            Our temple not only provides a place for worship but also serves as a community center, where individuals from diverse backgrounds come together in harmony.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.subHeader}>Location</Text>
          <Text style={styles.paraStyle}>
            You can find us at 24801 Botkins Rd, Hockley, TX 77447 Or click this link:
            <Text 
              style={styles.locationLink} 
              onPress={() => Linking.openURL("https://www.google.com/maps/search/?api=1&query=[24801 Botkins Rd, Hockley, TX 77447]")}
            >
              [Sri Satyanarayana Temple of Greater Houston]
            </Text>
          </Text>
        </View>

        <Text style={styles.mainHeader}>Sponsors and Priests</Text>
        <View style={styles.sponsorsContainer}>
          <TouchableOpacity style={styles.sponsorCard}>
            <Image
              style={styles.sponsorImage}
              source={{ uri: "https://example.com/sponsor1.jpg" }} // wait until get pictures from temple 
            />
            <Text style={styles.sponsorName}>Priest Name 1</Text>
            <Text style={styles.sponsorRole}>Head Priest</Text>
            <Text style={styles.paraStyle}>A brief description about the head priest and their contributions to the temple.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sponsorCard}>
            <Image
              style={styles.sponsorImage}
              source={{ uri: "https://example.com/sponsor2.jpg" }} // same as above, just wait until get image
            />
            <Text style={styles.sponsorName}>Priest Name 2</Text>
            <Text style={styles.sponsorRole}>Assistant Priest</Text>
            <Text style={styles.paraStyle}>A brief description about the assistant priest and their contributions to the temple.</Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F5F5DC', // Beige background
  },
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 5,
    fontFamily: "JosefinSans_700Bold",
  },
  subHeader: {
    fontSize: 20,
    color: "#4c5dab",
    fontWeight: "600",
    marginBottom: 5,
  },
  paraStyle: {
    fontSize: 16,
    color: "#7d7d7d",
    paddingVertical: 10,
    textAlign: 'center',
  },
  locationLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  sectionContainer: {
    marginVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  sponsorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', 
    marginVertical: 20,
    width: '100%',
  },
  sponsorCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    width: '45%', // adjust if needed
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  sponsorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  sponsorName: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  sponsorRole: {
    fontSize: 14,
    color: '#4c5dab',
    marginBottom: 5,
  },
});

export default About;