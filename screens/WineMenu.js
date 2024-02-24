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
const wineImage = {uri: 'https://image.cnbcfm.com/api/v1/image/106880066-1620413243866PetrusWineBottle-jpg?v=1620413548'};

const HomeScreen = ({ navigation }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  

  return (
    <View  style={styles.container}>
      <View style={styles.topBar}>
      <TouchableOpacity style={styles.button}>
          <Button
            title={'SideBar'}
            onPress={toggleSidebar} 
            containerStyle={{
              height: 50,
              width: 100,
            }}
            iconRight
            titleStyle={{ color: '#000', fontWeight: 'bold' }}
          />
        </TouchableOpacity>
      
      
      <View style={styles.space} />
      <TouchableOpacity style={styles.button}>
        {/* <Ionicons name="ios-settings" size={24} color="black" /> */}
        <Button
          title={'search'}
          // icon={{
          //   name: 'user',
          //   type: 'font-awesome',
          //   size: 15,
          //   color: 'white',
          // }}
          containerStyle={{
            height: 50,
            width: 100,
          }}
          iconRight
          titleStyle={{ color: '#000', fontWeight: 'bold', }}
        />
      </TouchableOpacity>
    </View>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Collapsible collapsed={isCollapsed} 
        style={{ flex: 1 }}
        >
          <View style={ styles.sideBar }>

            <SideBarFilter/>
            {/* <NewSideBarFilter/> */}
          </View>
        </Collapsible>
        

      {/* <View style={styles.overlay} /> */}
      <View style={styles.contentContainer}>
      <View style={styles.wineMenu}>
          <View style={styles.wineMenu_item}>
              <Image source={wineImage} style={styles.image_item}/>
              <View style={styles.infoContainer}>
              <Text style={styles.infoContainer_info}>Wine Name</Text>
              <Text style={styles.infoContainer_info}>Wine type: Red</Text>
              <Text style={styles.infoContainer_info}>Champagne, France</Text>
          
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>more info</Text>
          </Pressable>

            </View>


          </View>
          <View style={styles.wineMenu_item}>
              <Image source={wineImage} style={styles.image_item}/>
              <View style={styles.infoContainer}>
              <Text style={styles.infoContainer_info}>Wine Name</Text>
              <Text style={styles.infoContainer_info}>Wine type: Red</Text>
              <Text style={styles.infoContainer_info}>Champagne, France</Text>
              
              
              
              <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible2(true)}>
            <Text style={styles.textStyle}>more info</Text>
          </Pressable>

            </View>
          </View>
        </View>
      </View>

      {/* Modals */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
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
        </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible2(!modalVisible2);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
                <Text style={styles.modalText}>Wine Name 2</Text>
                
                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Wine Name1</Text>
                    <Text style={styles.modalText_Left}>Wine Name2</Text>
                    <Text style={styles.wine_item_title}>Wine Name3</Text>
                    <Text style={styles.modalText_Left}>Wine Name1</Text>
                    <Text style={styles.wine_item_title}>Wine Name2</Text>
                    <Text style={styles.modalText_Left}>Wine Name3</Text>
                    <Text style={styles.wine_item_title}>Wine Name2</Text>
                    <Text style={styles.modalText_Left}>Wine Name3</Text>
                  </View>
                  <Image source={image} resizeMode="cover" style={styles.image_item_2}></Image>
                  <View style={styles.modalView_Content_2}>
                    <Text style={styles.wine_item_title}>Wine Name1</Text>
                    <Text style={styles.modalText_Left}>Wine Name2</Text>
                    <Text style={styles.wine_item_title}>Wine Name1</Text>
                    <Text style={styles.modalText_Left}>Wine Name2</Text>
                    <Text style={styles.wine_item_title}>Wine Name3</Text>
                    <Text style={styles.modalText_Left}>Wine Name3</Text>
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
                    <Text style={styles.modalText_Left}>Wine Name2</Text>
                  </View>

                <View style={styles.modalView_Content_1}>
                  <View style={styles.modalView_Content_3}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>Wine Name2 
                      <Text>|</Text> 
                      <Text>xxx ml</Text> 
                    </Text>
                  </View>

                  <View style={styles.modalView_Content_3}>
                    <Text style={styles.wine_item_title}>Year</Text>
                    <Text style={styles.modalText_Left}>RM
                        <Text>520</Text> 
                    </Text>
                  </View>
                </View>

                <View style={styles.modalView_Content_1}>
                    <Text style={styles.wine_item_title}>Taste Notes</Text>
                </View>
                
                <View style={styles.modalView_Content_1}>
                    <Text style={styles.wine_item_tasteNotes}>Banana</Text>
                    <Text style={styles.wine_item_tasteNotes}>Pear</Text>
                    <Text style={styles.wine_item_tasteNotes}>Grapes</Text>
                    <Text style={styles.wine_item_tasteNotes}>Peach</Text>
                    <Text style={styles.wine_item_tasteNotes}>Watermelon</Text>
                </View>
            </View>
              
            </View>
          </Modal>


        <StatusBar style="auto" />
      </ImageBackground>
      {/* <TouchableOpacity onPress={toggleSidebar} style={{ position: 'absolute', top: 20, left: 20 }}>
        <Text>{isCollapsed ? 'Show' : 'Hide'} Sidebar</Text>
      </TouchableOpacity> */}
      
    </View >
  );
};

export default HomeScreen;


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
  image_item: {
    // flex: 1,
    justifyContent: 'center',
    height: hp('28%'),
    width: wp('15%'),
    margin: 5,
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
    color: '#A42D55',
    textAlign:'center',
    marginTop: 15,
  },
  wine_item_text: {
    // fontWeight: 'bold', 
    textAlign:'center',
    marginTop: 15,
  },


  //==========================================================

  
  space: {
    width: 20,
    height: 40,
  },
  functionalBar: {
    height: hp('18%'),
    backgroundColor: '#960735',
    flex: 0.054,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'flex-start',
  },
  sideBar: {
    backgroundColor: '#f0f0f0', 
    height: hp('87%'),
    width: '60%',
    padding: 10,
  },
  contentContainer: {
    flex: 1,
  },
  wineMenu: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  wineMenu_item: {
    backgroundColor: '#d3d3d3',
    margin: 20,
    height: hp('30%'),
    width: wp('40%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  wine_item_tasteNotes: {
    margin: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    margin: 10,
  },
  infoContainer_info: {
    fontWeight: 'bold', 
    textAlign:'center',
    marginTop: 15,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 50,
  },

  // ====================== MODAL ===========================
  modalView: {
    margin: 20,
    backgroundColor: '#696969',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView_Content_1: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  modalView_Content_2: {
    width: '30%',
  },
  modalView_Content_3: {
    marginRight: 100,
    marginLeft: 100,
  },
  modalView_Content_4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView_Content_5: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center',
  },
  dividerStyle: {
    flex: 1, // Allow the divider to expand to fill available space
    marginHorizontal: 10, // Add some margin horizontally for spacing
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
  // overlay: {
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
  // },
  divider: {
    backgroundColor: '#960735',
    height: 1,
    width: '100%',
    marginVertical: 10,
  },

});
