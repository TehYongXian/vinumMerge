import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity,Pressable, Modal ,Dimensions, ScrollView  } from 'react-native';
import { Button, Divider } from '@rneui/themed';
import React, { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import TopFunctionBar from './topFunctionBar';
import SideBarFilter from './sideBar';
import NewSideBarFilter from './newsideBar';
// import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';

const image = {uri: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};
const image2 = {uri: 'https://www.sanantoniofruitfarms.com/wp-content/uploads/2023/05/FF23_120-e1682978928898-664x1024.jpg'};

const BubbleBG = ({ navigation }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  

  return (
    <ScrollView  style={styles.container}>

<ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.modalViewContainerTitle}>Refreshing</Text>

      <View style={styles.modalViewContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Wine Name</Text>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Wine Types</Text>
                    <Text style={styles.modalText_Left}>Red</Text>
                    <Divider style={styles.divider}/>
                    <Text style={styles.wine_item_title}>Grapes</Text>
                    <Text style={styles.modalText_Left}>Chardonnay, Pinot Noir</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Alcohol</Text>
                    <Text style={styles.modalText_Left}>12.5%</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Taste</Text>
                    <Text style={styles.modalText_Left}>Acidic, Bianchetta, Perera</Text>
                  </View>
                  <Image source={image} resizeMode="cover" style={styles.image_item_2}></Image>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Closures</Text>
                    <Text style={styles.modalText_Left}>Natural Cork</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Country</Text>
                    <Text style={styles.modalText_Left}>Frence</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Region</Text>
                    <Text style={styles.modalText_Left}>Champagne</Text>
                    <Divider/>
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      // onPress={() => setModalVisible(true)}
                      >
                      <Text style={styles.textStyle}>more info</Text>
                    </Pressable>
                  </View>
                  
              </View>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>2005, 2010, 2012</Text>
                    <Divider/>
                  </View>

                  <Divider/>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_3}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>Wine Name2 
                      <Text>|</Text> 
                      <Text> xxx ml</Text> 
                    </Text>
                  </View>

                  <View style={styles.modalView_Content_3}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>RM
                        <Text> 520</Text> 
                    </Text>
                  </View>
                </View>

                <View style={styles.modalView_Content_1}>
                    <Divider/>
                      <Text style={styles.wine_item_title}>Taste Notes</Text>
                    <Divider/>
                </View>
                <Divider/>
                <View style={styles.modalView_Content_1}>
                    <Text style={styles.wine_item_tasteNotes}>Banana</Text>
                    <Text style={styles.wine_item_tasteNotes}>Pear</Text>
                    <Text style={styles.wine_item_tasteNotes}>Grapes</Text>
                    <Text style={styles.wine_item_tasteNotes}>Peach</Text>
                    <Text style={styles.wine_item_tasteNotes}>Watermelon</Text>
                </View>
            </View>
              
            

              <View style={styles.modalView}>
                <Text style={styles.modalText}>Wine Name</Text>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Wine Types</Text>
                    <Text style={styles.modalText_Left}>Red</Text>
                    <Divider style={styles.divider}/>
                    <Text style={styles.wine_item_title}>Grapes</Text>
                    <Text style={styles.modalText_Left}>Chardonnay, Pinot Noir</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Alcohol</Text>
                    <Text style={styles.modalText_Left}>12.5%</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Taste</Text>
                    <Text style={styles.modalText_Left}>Acidic, Bianchetta, Perera</Text>
                  </View>
                  <Image source={image} resizeMode="cover" style={styles.image_item_2}></Image>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Closures</Text>
                    <Text style={styles.modalText_Left}>Natural Cork</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Country</Text>
                    <Text style={styles.modalText_Left}>Frence</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Region</Text>
                    <Text style={styles.modalText_Left}>Champagne</Text>
                    <Divider/>
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      // onPress={() => setModalVisible(true)}
                      >
                      <Text style={styles.textStyle}>more info</Text>
                    </Pressable>
                  </View>
                  
                </View>
                    <View style={styles.modalView_Content_2}>
                      <Text style={styles.wine_item_title}>Year</Text>
                      <Text style={styles.modalText_Left}>2005, 2010, 2012</Text>
                      <Divider/>
                    </View>

                    <Divider/>
                  
                  <View style={styles.modalView_Content_1}>
                    <View style={styles.modalView_Content_3}>
                      <Text style={styles.wine_item_title}>Year</Text>
                      <Text style={styles.modalText_Left}>Wine Name2 
                        <Text>|</Text> 
                        <Text> xxx ml</Text> 
                      </Text>
                    </View>

                    <View style={styles.modalView_Content_3}>
                      <Text style={styles.wine_item_title}>Year</Text>
                      <Text style={styles.modalText_Left}>RM
                          <Text> 520</Text> 
                      </Text>
                    </View>
                  </View>

                  <View style={styles.modalView_Content_1}>
                      <Divider/>
                        <Text style={styles.wine_item_title}>Taste Notes</Text>
                      <Divider/>
                  </View>
                  <Divider/>
                  <View style={styles.modalView_Content_1}>
                      <Text style={styles.wine_item_tasteNotes}>Banana</Text>
                      <Text style={styles.wine_item_tasteNotes}>Pear</Text>
                      <Text style={styles.wine_item_tasteNotes}>Grapes</Text>
                      <Text style={styles.wine_item_tasteNotes}>Peach</Text>
                      <Text style={styles.wine_item_tasteNotes}>Watermelon</Text>
                  </View>
              </View>
            </View>
          
        </ImageBackground>
        
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
      <Text style={styles.modalViewContainerTitle}>Refreshing</Text>

      <View style={styles.modalViewContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Wine Name</Text>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Wine Types</Text>
                    <Text style={styles.modalText_Left}>Red</Text>
                    <Divider style={styles.divider}/>
                    <Text style={styles.wine_item_title}>Grapes</Text>
                    <Text style={styles.modalText_Left}>Chardonnay, Pinot Noir</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Alcohol</Text>
                    <Text style={styles.modalText_Left}>12.5%</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Taste</Text>
                    <Text style={styles.modalText_Left}>Acidic, Bianchetta, Perera</Text>
                  </View>
                  <Image source={image} resizeMode="cover" style={styles.image_item_2}></Image>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Closures</Text>
                    <Text style={styles.modalText_Left}>Natural Cork</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Country</Text>
                    <Text style={styles.modalText_Left}>Frence</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Region</Text>
                    <Text style={styles.modalText_Left}>Champagne</Text>
                    <Divider/>
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      // onPress={() => setModalVisible(true)}
                      >
                      <Text style={styles.textStyle}>more info</Text>
                    </Pressable>
                  </View>
                  
              </View>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>2005, 2010, 2012</Text>
                    <Divider/>
                  </View>

                  <Divider/>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_3}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>Wine Name2 
                      <Text>|</Text> 
                      <Text> xxx ml</Text> 
                    </Text>
                  </View>

                  <View style={styles.modalView_Content_3}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>RM
                        <Text> 520</Text> 
                    </Text>
                  </View>
                </View>

                <View style={styles.modalView_Content_1}>
                    <Divider/>
                      <Text style={styles.wine_item_title}>Taste Notes</Text>
                    <Divider/>
                </View>
                <Divider/>
                <View style={styles.modalView_Content_1}>
                    <Text style={styles.wine_item_tasteNotes}>Banana</Text>
                    <Text style={styles.wine_item_tasteNotes}>Pear</Text>
                    <Text style={styles.wine_item_tasteNotes}>Grapes</Text>
                    <Text style={styles.wine_item_tasteNotes}>Peach</Text>
                    <Text style={styles.wine_item_tasteNotes}>Watermelon</Text>
                </View>
            </View>
              
            

              <View style={styles.modalView}>
                <Text style={styles.modalText}>Wine Name</Text>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Wine Types</Text>
                    <Text style={styles.modalText_Left}>Red</Text>
                    <Divider style={styles.divider}/>
                    <Text style={styles.wine_item_title}>Grapes</Text>
                    <Text style={styles.modalText_Left}>Chardonnay, Pinot Noir</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Alcohol</Text>
                    <Text style={styles.modalText_Left}>12.5%</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Taste</Text>
                    <Text style={styles.modalText_Left}>Acidic, Bianchetta, Perera</Text>
                  </View>
                  <Image source={image} resizeMode="cover" style={styles.image_item_2}></Image>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Closures</Text>
                    <Text style={styles.modalText_Left}>Natural Cork</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Country</Text>
                    <Text style={styles.modalText_Left}>Frence</Text>
                    <Divider/>
                    <Text style={styles.wine_item_title}>Region</Text>
                    <Text style={styles.modalText_Left}>Champagne</Text>
                    <Divider/>
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      // onPress={() => setModalVisible(true)}
                      >
                      <Text style={styles.textStyle}>more info</Text>
                    </Pressable>
                  </View>
                  
                </View>
                    <View style={styles.modalView_Content_2}>
                      <Text style={styles.wine_item_title}>Year</Text>
                      <Text style={styles.modalText_Left}>2005, 2010, 2012</Text>
                      <Divider/>
                    </View>

                    <Divider/>
                  
                  <View style={styles.modalView_Content_1}>
                    <View style={styles.modalView_Content_3}>
                      <Text style={styles.wine_item_title}>Year</Text>
                      <Text style={styles.modalText_Left}>Wine Name2 
                        <Text>|</Text> 
                        <Text> xxx ml</Text> 
                      </Text>
                    </View>

                    <View style={styles.modalView_Content_3}>
                      <Text style={styles.wine_item_title}>Year</Text>
                      <Text style={styles.modalText_Left}>RM
                          <Text> 520</Text> 
                      </Text>
                    </View>
                  </View>

                  <View style={styles.modalView_Content_1}>
                      <Divider/>
                        <Text style={styles.wine_item_title}>Taste Notes</Text>
                      <Divider/>
                  </View>
                  <Divider/>
                  <View style={styles.modalView_Content_1}>
                      <Text style={styles.wine_item_tasteNotes}>Banana</Text>
                      <Text style={styles.wine_item_tasteNotes}>Pear</Text>
                      <Text style={styles.wine_item_tasteNotes}>Grapes</Text>
                      <Text style={styles.wine_item_tasteNotes}>Peach</Text>
                      <Text style={styles.wine_item_tasteNotes}>Watermelon</Text>
                  </View>
              </View>
            </View>
          
        </ImageBackground>
    </ScrollView >
  );
};

export default BubbleBG;


// ===========================================================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    resizeMode: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  image_item_2: {
    // flex: 1,
    justifyContent: 'center',
    height: hp('28%'),
    width: wp('15%'),
    marginLeft: 30,
    marginRight: 30,
    
  },
  wine_item_title: {
    fontWeight: 'bold', 
    fontSize: 12,
    color: '#A42D55',
    textAlign:'center',
    marginTop: 15,
  },
  wine_item_text: {
    fontSize: 12,
    textAlign:'center',
    marginTop: 15,
  },


  //==========================================================
 
  wine_item_tasteNotes: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 12,

  },

  modalViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Adjust as needed for spacing between items
  },
  
  modalView: {
    margin: 5,
    padding: 10,
    backgroundColor: '#696969',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    width: "48%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView_Content_1: {
    justifyContent: 'center',
    flexDirection: 'row',
    width:'60%',
  },
  modalView_Content_2: {
    width: '30%',
  },
  modalView_Content_3: {
    marginRight: '30%',
    marginLeft: '30%',
  },

  dividerStyle: {
    flex: 1,
    marginHorizontal: 10,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    top: 10,
    right:10,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText_Left: {
    marginBottom: 15,
    marginTop: 5,
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  divider: {
    backgroundColor: '#960735',
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
  modalViewContainerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  }
});
