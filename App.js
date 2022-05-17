import { StatusBar,StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import Display from './Display';

export default function App() {
  const [image, setImage]=useState(require("./assets/Happy.jpeg"))
  function Happyy(){
    setImage(require("./assets/Happy.jpeg"))
  }
  function Normall(){
    setImage(require("./assets/Normal.jpg"))
  }
  function Sadd(){
    setImage(require("./assets/Sad.jpg"))
  }
  return (
    
    <View style={styles.container}>
      <StatusBar style='Hidden'/>
     <View style={styles.Cover}>
       <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:5, alignItems: 'center'}}>
         <TouchableOpacity><Ionicons name = "arrow-back-sharp" size={35} color = "white" /></TouchableOpacity>
         <Text style={{color:"white", fontSize:20, marginHorizontal:"20%"}}>GALLERY</Text>
         <TouchableOpacity><Entypo name = "menu" size={35} color = "white" /></TouchableOpacity>
       </View>
        <Text style={{margin:20, alignSelf:"center",fontWeight:"bold",fontSize:20, color:"white"}}>Click Your Mood</Text>
         <View style={styles.Options}>
           <TouchableOpacity onPress={Happyy}>
             <Image style={styles.Photo}
                source={require("./assets/Happy.jpeg")}/>
                <Text style={styles.Desc}>Happy</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={Normall}>
             <Image style={styles.Photo}
               source={require("./assets/Normal.jpg")}/>
               <Text style={styles.Desc}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Sadd}>
              <Image style={styles.Photo}
                source={require("./assets/Sad.jpg")}/>
                <Text style={styles.Desc}>Sad</Text>
            </TouchableOpacity>            
         </View> 
      </View>
      <View style={styles.FullView}>
        <Display image={image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Cover:{
    width:"100%",
    backgroundColor:"grey",
  },
  Photo:{
    alignSelf:'center',
    height:60,
    width:60,
    borderRadius:30,
  },
  FullView:{
    flex:1,
    margin:5,
    backgroundColor:"grey",
    width:"90%",
    alignItems:"center",
    borderRadius:5
  }, 
  Options:{
    marginVertical:10,
    flexDirection:"row",
    width: '100%',
    alignItems:"center",
    justifyContent:'space-evenly',
    height:79

  },
  Desc:{
    alignSelf:"center",
    color:"white",
    fontWeight:"700",
  }
});
