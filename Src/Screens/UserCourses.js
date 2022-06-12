import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import database from '@react-native-firebase/database';


export default function Todo() {



  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);

  useEffect(() => {
    getDatabase();
    getDatabase2();
    getDatabase3();
    getDatabase4();
  }, []);

  const getDatabase = async () => {
    database().ref('Forms/WEB').once("value").then(function(snapshot){
   
      // console.log(snapshot.val())
      var key = Object.values(snapshot.val()) 
      var userdata =[]
      for(var i=0;i<key.length;i++){
        // console.log(key[i])
  
        userdata.push(key[i])
  
      } 
      
      // console.log(userdata)
      // console.log(key);
      setList(userdata);
      // console.log(data)
      // console.log(key[0].City);
    })
  };

  const getDatabase2 = async () => {
    database().ref('Forms/CCNA').once("value").then(function(snapshot){
   
      console.log(snapshot.val())
      var key = Object.values(snapshot.val()) 
      var userdata =[]
      for(var i=0;i<key.length;i++){
        console.log(key[i])
  
        userdata.push(key[i])
  
      } 
      
      // console.log(userdata)
      // console.log(key);
      setList2(userdata);
      // console.log(data)
      console.log(key[0].CourseName);
    })
  };

  const getDatabase3 = async () => {
    database().ref('Forms/CCNA').once("value").then(function(snapshot){
   
      console.log(snapshot.val())
      var key = Object.values(snapshot.val()) 
      var userdata =[]
      for(var i=0;i<key.length;i++){
        console.log(key[i])
  
        userdata.push(key[i])
  
      } 
      
      // console.log(userdata)
      // console.log(key);
      setList2(userdata);
      // console.log(data)
      console.log(key[0].CourseName);
    })
  };

  const getDatabase4 = async () => {
    database().ref('Forms/Flutter').once("value").then(function(snapshot){
   
      console.log(snapshot.val())
      var key = Object.values(snapshot.val()) 
      var userdata =[]
      for(var i=0;i<key.length;i++){
        console.log(key[i])
  
        userdata.push(key[i])
  
      } 
      
      // console.log(userdata)
      // console.log(key);
      setList4(userdata);
      // console.log(data)
      // console.log(key[0].CourseName);
    })
  };

  return (

    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
            WEB  Student List
          </Text>

          {list.map((v, i) => {
            console.log(v.City)
            return (

              <View style={styles.card} key={i}>

                <Text>First Name : {v.FNAME}</Text>
                <Text>Last Name : {v.LNAME}</Text>
                <Text>Email : {v.EMAIL}</Text>
                <Text>Contact No : {v.PhoneNo}</Text>
                <Text>City : {v.City}</Text>
                <Text>CourseName : {v.CourseName}</Text>
                <Text>Education : {v.Education}</Text>

              </View>

            )
            
          })}


          <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
            CCNA Student List
          </Text>
          
          {list2.map((v, i) => {
            console.log(v.City)
            return (

              <View style={styles.card} key={i}>

                <Text>First Name : {v.FNAME}</Text>
                <Text>Last Name : {v.LNAME}</Text>
                <Text>Email : {v.EMAIL}</Text>
                <Text>Contact No : {v.PhoneNo}</Text>
                <Text>City : {v.City}</Text>
                <Text>CourseName : {v.CourseName}</Text>
                <Text>Education : {v.Education}</Text>

              </View>

            )
            
          })}

          {/* <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
            CCO Student List
          </Text>
          
          {list3.map((v, i) => {
            // console.log(v.City)
            return (

              <View style={styles.card} key={i}>

                <Text>First Name : {v.FNAME}</Text>
                <Text>Last Name : {v.LNAME}</Text>
                <Text>Email : {v.EMAIL}</Text>
                <Text>Contact No : {v.PhoneNo}</Text>
                <Text>City : {v.City}</Text>
                <Text>CourseName : {v.CourseName}</Text>
                <Text>Education : {v.Education}</Text>

              </View>

            )
            
          })}

          <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>
            Flutter Student List
          </Text>
          
          {list4.map((v, i) => {
            // console.log(v.City)
            return (

              <View style={styles.card} key={i}>

                <Text>First Name : {v.FNAME}</Text>
                <Text>Last Name : {v.LNAME}</Text>
                <Text>Email : {v.EMAIL}</Text>
                <Text>Contact No : {v.PhoneNo}</Text>
                <Text>City : {v.City}</Text>
                <Text>CourseName : {v.CourseName}</Text>
                <Text>Education : {v.Education}</Text>

              </View>

            )
            
          })} */}

        </View>
      </ScrollView>

    </View>
  );
}

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
  },
  inputBox: {
    width: 350,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: 320,
    padding: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  JoinCourse:{
    justifyContent:"flex-end",
    fontSize:17,
    color:'#00c663',
    marginHorizontal:70,
    marginVertical:10,
    fontWeight:"bold"

  }
});