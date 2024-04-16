import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation, NavigationProp } from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/database';
import { getDatabase, push, ref } from "firebase/database";


import Animated from 'react-native-reanimated';
import Button from '../Components/button'; // Import the Button component
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDUy3erGoFd2Sdj-wusnc9ExkFea99CNL8",
  authDomain: "postureguard.firebaseapp.com",
  databaseURL: "https://postureguard-default-rtdb.firebaseio.com",
  projectId: "postureguard",
  storageBucket: "postureguard.appspot.com",
  messagingSenderId: "121148095939",
  appId: "1:121148095939:web:5d6d31d0a6ec2256371176",
  measurementId: "G-6CZDZZ7CCN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


type TabType = 'login' | 'signup';

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [tab, setTab] = useState<TabType>('login');

  const handleTabChange = (newTab: TabType) => {
    setTab(newTab);
  };

  const handleLoginLinkPress = () => {
    handleTabChange('login');
  };
  
  const handleSignupLinkPress = () => {
    handleTabChange('signup');
  };

  const handleSignupPress = () => {
    const newUser = {
      name: '', 
      age: '', 
      sex: '', 
      email: '', 
      password: '', 
    };

    const usersRef = ref(database, 'users');
    push(usersRef, newUser)
      .then(() => {
        navigation.navigate('ProfilingScreen');
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  const handleLoginPress = () => {
    navigation.navigate('ProfilingScreen');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(175, 165, 143, 0.55)', 'rgba(175, 165, 143, 0.50)']}
        style={styles.linearGradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View>
          <Image source={require('./assets/images/registrationTopEclipse.png')} />
        </View>
        <View style={styles.registrationCenterBox}>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, tab === 'login' ? styles.activeTab : null]}
              onPress={() => handleTabChange('login')}>
              <Text style={styles.tabText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, tab === 'signup' ? styles.activeTab : null]}
              onPress={() => handleTabChange('signup')}>
              <Text style={styles.tabText}>Signup</Text>
            </TouchableOpacity>
          </View>
          {tab === 'login' && (
            <View style={styles.loginForm}>
              <View>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry />
              </View>
            </View>
          )}
          {tab === 'login' && (
            <Button
              title="Log In"
              onPress={handleLoginPress}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
            />
          )}
          {tab === 'login' && (
            <View style={styles.signupLinkContainer}>
              <Text style={styles.createText}>Create new account?</Text>
              <TouchableOpacity onPress={handleSignupLinkPress}>
                <Text style={styles.signupText}>SignUp</Text>
              </TouchableOpacity>
            </View>
          )}
          {tab === 'signup' && (
            <ScrollView style={styles.signupForm}>
              <View>
                <Text style={styles.label}>Name</Text>
                <TextInput placeholder="Name" style={styles.input} />
              </View>
              <View>
                <Text style={styles.label}>Age</Text>
                <TextInput placeholder="Age" style={styles.input} keyboardType="numeric" />
              </View>
              <View>
                <Text style={styles.label}>Sex</Text>
                <TextInput placeholder="Sex" style={styles.input} />
              </View>
              <View>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
              </View>
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry />
              </View>
            </ScrollView>
          )}

          {/* Adding a signup Button */}
          {tab === 'signup' && (
            <Button
              title="Sign Up"
              onPress={handleSignupPress}
              buttonStyle={styles.signupButton}
              textStyle={styles.signupButtonText}
            />
          )}

          {/* Already have an account? LogIn */}
          {tab === 'signup' && (
            <View style={styles.loginLinkContainer}>
              <Text style={styles.alreadyText}>Already have an account?</Text>
              <TouchableOpacity onPress={handleLoginLinkPress}>
                <Text style={styles.loginText}>LogIn</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Image source={require('./assets/images/registrationIllustration.png')}
        style={styles.illustartion} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registrationCenterBox: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    height: '50%',
  },
  illustartion:{
    position: 'absolute',
  },
  signupButton: {
    backgroundColor: '#125488',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 29,
    marginTop: 10,
    width: 112,
    height: 34,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  loginButton: {
    backgroundColor: '#125488',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 29,
    marginTop: 10,
    width: 112,
    height: 34,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  loginLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  alreadyText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginText: {
    fontSize: 16,
    color: 'blue', 
    textDecorationLine: 'underline',
  },

  signupLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  createText: {
    fontSize: 16,
    marginRight: 5,
  },
  signupText: {
    fontSize: 16,
    color: 'blue', 
    textDecorationLine: 'underline',
  },

  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#AFA58F', 
    borderRadius: 20,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  signupForm: {
    width: '100%',
    height: '20%',
    flex: 1,
  },
  input: {
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  loginForm:{
    // flex: 1,
    // width: '100%',
    // backgroundColor: 'white',
    // borderRadius: 10,
    // padding: 10,
    width: '100%',
    height: '20%',
    flex: 1,
  },
});

export default SignupScreen;
