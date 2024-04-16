import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Button from '../Components/button';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import BottomMenu from '../Components/bottomMenu';

interface DashboardScreenProps {
  navigation: any; 
}

const DashboardScreen: React.FC<DashboardScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const handleBindCamPress = () => {
        navigation.navigate('BindingScreen1'); // Navigate to ProfilingScreen when signup button is pressed
      };
      const handleSetGoalPress = () => {
        navigation.navigate('SetgoalScreen'); // Navigate to ProfilingScreen when signup button is pressed
      };
    return (
   <View style={styles.container}>
     <View style={styles.backgroundSection}>
      {/* Background Image */}
      <Image
        source={require('./assets/images/dashboardTopSection.png')}
        style={styles.backgroundImage}
      />
      </View>
      <View style={styles.dashboardSettings}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.postureText}>Posture</Text>
          <Text style={styles.guardText}>Guard</Text>
        </Text>
      </View>
      {/* User and Camera Info */}
      <View style={styles.userInfoContainer}>
        {/* User Info Section */}
        <View style={styles.userInfo}>
          {/* Display user information here */}
          <Text>User Info</Text>
        </View>

        {/* Camera Info Section */}
        <View style={styles.cameraInfo}>
          {/* Display camera information here */}
          <Text>Camera Info</Text>
        </View>
      </View>
      <View style={styles.monitoringCard}>
          {/* Display camera information here */}
          <Text>Monitoring</Text>
          <Button title="Bind Camera"
              onPress={handleBindCamPress}
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonText}/>
        </View>
      

      {/* Dashboard Settings */}
      <ScrollView contentContainerStyle={styles.scrollingFrame}>
        {/* Each setting represented as a card */}
        <View style={styles.card}>
        
        </View>
        <View style={styles.card}>
          <Text>Dashboard Setting 2</Text>
        </View>
        {/* Add more settings as needed */}
      </ScrollView>
      </View>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: '100%',
    
  },
  scrollingFrame:{
  
    alignItems: 'center',
    width: '100%',
    
  },

  monitoringCard: {
    marginBottom: 20,
    backgroundColor: '#E0E0E0', // Card background color
    width: '80%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    // paddingTop: 40,
    // paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1', // Color for "Posture"
  },
  postureText: {
    color: '#2E86C1', // Color for "Posture"
  },
  guardText: {
    color: '#58D68D', // Color for "Guard"
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  userInfo: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
    borderRadius: 10,
    padding: 10,
  },
  cameraInfo: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
    borderRadius: 10,
    padding: 10,
  },
  dashboardSettings: {
    flex: 1,
    backgroundColor: 'transparent', // Plain screen color
    width: '100%',
    justifyContent: 'center',
  alignItems: 'center',
  },
  backgroundSection:{
    flex: 1,
    backgroundColor: '#EAF0F2',
    width: '100%',
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#E0E0E0', // Card background color
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonStyle:{
    backgroundColor: '#AFA58F',
    width: 143 ,
    height: 38,
    borderRadius: 15,
  },
});
  
 



export default DashboardScreen;

