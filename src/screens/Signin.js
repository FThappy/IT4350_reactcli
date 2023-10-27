/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {View, StyleSheet,Text,TextInput,TouchableOpacity,Dimensions} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const type = ['Person', 'Company'];
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Signin = ({ navigation }) => {
  return (
  <View style={styles.container}>
    <LinearGradient
        colors={['#F8DADA', '#DDEFBB']}
        style={styles.isContainer}
        start={{ x: 1, y: 0 }} // Điểm bắt đầu ở bên phải (x: 1)
        end={{ x: 0, y: 0 }} // Điểm kết thúc ở bên trái (x: 0)
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => navigation.goBack()}
          >
            <AntdesignIcon name="arrowleft" size={36} color="black" />
          </TouchableOpacity>
          <Text style={{ marginLeft: '20%', fontSize: 30 }}>
            Registers
          </Text>
        </View>
        <SelectDropdown
          data={type}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'You are Person or Company'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <MaterialIcons
                name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex:Ronaldo de Lima"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex:Fifa2002@worlcup.com"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 99999999999"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex : ***************"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AccessRegister')}>
          <LinearGradient
            colors={['#384CFF', '#00A3FF']}
            style={styles.button}
            start={{ x: 0, y: 0.5 }} // Điểm bắt đầu ở giữa trên (x: 0, y: 0.5)
            end={{ x: 1, y: 0.5 }} // Điểm kết thúc ở giữa dưới (x: 1, y: 0.5)
          >
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.text1}>
          Already have an account ?.
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{ color: 'red', marginLeft: '5' }}
          >
            Login
          </Text>
        </Text>
      </LinearGradient>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    marginTop: 20,
    height: 60,
    width: '100%',
    alignItems: 'center',
  },
  buttonBack: {
    height: 60,
    width: 60,
    backgroundColor: '#DDEFBB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  isContainer: {
    flex: 1,
    width: screenWidth,
    alignItems: 'center',
  },
  dropdown1BtnStyle: {
    marginTop: 20,
    width: '85%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: '#444', borderBottomColor: '#C5C5C5' },
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    marginTop: 30,
  },
  label: {
    fontFamily: 'raleway',
    fontWeight: 'bold',
  },
  input: {
    fontFamily: 'raleway',
    color: 'black',
    fontWeight: '100',
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#A9A9A9',
    fontSize: 20,
  },
  button: {
    height: 50,
    width: 330,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'raleway_bold',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  text1: {
    height: 17,
    width: 320,
    marginLeft: 100,
    color: '#384CFF',
    fontFamily: 'raleway_bold',
    fontWeight: 'bold',
    marginTop: 20,
  },
});
