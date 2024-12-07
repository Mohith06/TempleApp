import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons'; // Icons package

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>About the Temple</Text>
        <Text style={styles.paraStyle}>
          Our temple is a place of peace, spirituality, and community. It was established in 2020 to serve as a sanctuary for worship and fellowship.
        </Text>

        {/* Mission Statement Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.subHeader}>Mission Statement</Text>
          <Text style={styles.paraStyle}>
            Service to humanity is service to God. Sri Satyanarayana Temple of Greater Houston (SSTGH) provides a platform for all devotees to enhance Hindu cultural and religious traditions. Our members strive to keep the core values of Hinduism alive by practicing kindness, openness, and respect for all.
          </Text>
          <Text style={styles.paraStyle}>
            SSTGH uses the temple as a vehicle to promote education, volunteerism, community service, support for the needy, and making a positive difference in the community. As a Hindu house of worship, the temple serves as a center for worship, prayer, social service, education, and family life. Our goal is to be recognized as a service-focused, faith-based organization.
          </Text>
        </View>

        {/* History Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.subHeader}>History</Text>
          <Text style={styles.paraStyle}>
            In 2012, Mr. Krishna Bhat conceived the idea of building Sri Satyanarayana Temple to establish a Hindu spiritual hub in northwest Houston. He generously donated two acres of land to seed this effort, and the project was born. Sri Satyanarayana Temple of Greater Houston was incorporated in October 2013, and a board of trustees and directors was established.
          </Text>
          <Text style={styles.paraStyle}>
            The temple received approval from the county and other agencies, and all necessary permits were secured. Construction began in March 2019 and was completed in 2020. The first phase included a hall that serves as the initial temple until the traditional temple is built. A conceptual architectural design was developed with input from a leading architect experienced in temple construction.
          </Text>
          <Text style={styles.paraStyle}>
            The Bhoomi Puja (groundbreaking ceremony) was conducted on November 2, 2014. The temple is currently open every Sunday from 10:00 AM to 12:00 PM, and the Sri Satyanarayana Puja is conducted monthly. All deities were procured from Mahabalipuram, Tamil Nadu, India. The Pradista ceremony was completed on February 4, 2023.
          </Text>
        </View>

        {/* Location Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.subHeader}>Location</Text>
          <Text style={styles.paraStyle}>
            You can find us at 24801 Botkins Rd, Hockley, TX 77447. Or click this link:{" "}
            <Text
              style={styles.locationLink}
              onPress={() =>
                Linking.openURL(
                  "https://www.google.com/maps/search/?api=1&query=24801+Botkins+Rd,+Hockley,+TX+77447"
                )
              }
            >
              Sri Satyanarayana Temple of Greater Houston
            </Text>
          </Text>
        </View>

        {/* Contact Section */}
        <View style={styles.contactContainer}>
          <Text style={styles.subHeader}>Contact</Text>
          <View style={styles.contactRow}>
            <FontAwesome name="envelope" size={24} color="black" />
            <Text
              style={styles.contactText}
              onPress={() => Linking.openURL("mailto:Info@sstgh.org")}
            >
              Info@sstgh.org
            </Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome name="phone" size={24} color="black" />
            <Text
              style={styles.contactText}
              onPress={() => Linking.openURL("tel:2815603065")}
            >
              281-560-3065
            </Text>
          </View>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={() => Linking.openURL("https://www.facebook.com/sstgh.org/")}
          >
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={styles.facebookText}>Visit Us on Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F5F5DC", // Beige background
  },
  aboutContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 30 : 30, // Adjust for StatusBar
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
    textAlign: "center",
  },
  locationLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  sectionContainer: {
    marginVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
  },
  contactContainer: {
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    color: "#4c5dab",
    marginLeft: 10,
    textDecorationLine: "underline",
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  facebookText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default About;
