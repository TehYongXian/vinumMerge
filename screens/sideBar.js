import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
// import CheckBox from '@react-native-community/checkbox';
import { Button, Divider } from '@rneui/themed';

const SideBarFilter = () => {
    
  const minValue = 0;
  const maxValue = 2000;

  const minValueSweetness = 0;
  const maxValueSweetness = 10;

  const minValueAcidity = 0;
  const maxValueAcidity = 10;

  const minValueTannin = 0;
  const maxValueTannin = 10;

  const minValueAlcohol = 0;
  const maxValueAlcohol = 10;

  const minValueBody = 0;
  const maxValueBody = 10;



  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(0);
  const [sliderValue3, setSliderValue3] = useState(0);
  const [sliderValue4, setSliderValue4] = useState(0);
  const [sliderValue5, setSliderValue5] = useState(0);
  const [sliderValue6, setSliderValue6] = useState(0);


    const handleSliderChange = (value) => {
      const roundedValue = Math.round(value);
      setSliderValue(roundedValue);
    };
    const handleSliderChange2 = (value) => {
      const roundedValue = Math.round(value);
      setSliderValue2(roundedValue);
    };
    const handleSliderChange3 = (value) => {
      const roundedValue = Math.round(value);
      setSliderValue3(roundedValue);
    };
    const handleSliderChange4 = (value) => {
      const roundedValue = Math.round(value);
      setSliderValue4(roundedValue);
    };
    const handleSliderChange5 = (value) => {
      const roundedValue = Math.round(value);
      setSliderValue5(roundedValue);
    };
    const handleSliderChange6 = (value) => {
      const roundedValue = Math.round(value);
      setSliderValue6(roundedValue);
    };
  

  // ---------------------------------------------------------


  const [collapsed, setCollapsed] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);
  const [collapsed5, setCollapsed5] = useState(true);
  const [collapsed6, setCollapsed6] = useState(true);
  const [collapsed7, setCollapsed7] = useState(true);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const toggleCollapsed2 = () => {
    setCollapsed2(!collapsed2);
  };
  const toggleCollapsed3 = () => {
    setCollapsed3(!collapsed3);
  };
  const toggleCollapsed4 = () => {
    setCollapsed4(!collapsed4);
  };
  const toggleCollapsed5 = () => {
    setCollapsed5(!collapsed5);
  };
  const toggleCollapsed6 = () => {
    setCollapsed6(!collapsed6);
  };
  const toggleCollapsed7 = () => {
    setCollapsed7(!collapsed7);
  };
  
  return (
    <ScrollView  style={styles.container}>

      <Text style={styles.title}>Filter</Text>
      <Divider style={styles.divider } />
      <View  style={styles.topBar}>
        <Text>2 of 10 results</Text>
        <Text>Clear All</Text>
      </View>
      <View>
      <TouchableOpacity onPress={toggleCollapsed} style={styles.button}>
          <Text style={styles.buttonText}>{collapsed ? 'Wine Types' : 'Wine Types'}</Text>
      </TouchableOpacity>
        {!collapsed && (
          <View style={styles.collapsedContent}>
                <View style={styles.buttonsContainer}>
                <Button buttonStyle={
                    styles.wineMenuButton}>Red</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>White</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Rose</Button>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button buttonStyle={
                        styles.wineMenuButton}>Sparkling</Button>
                    <Button buttonStyle={
                        styles.wineMenuButton}>Dessert</Button>
                    <Button buttonStyle={
                        styles.wineMenuButton}>Fortified</Button>
                </View>
            </View>
        )}
            
        <TouchableOpacity onPress={toggleCollapsed2} style={styles.button}>
            <Text style={styles.buttonText}>{collapsed2 ? 'Wine Grapes' : 'Wine Grapes'}</Text>
        </TouchableOpacity>
        {!collapsed2 && (
          <View style={styles.collapsedContent}>
          <View style={styles.buttonsContainer}>
                <Button buttonStyle={
                    styles.wineMenuButton}
                    >Cabernet Franc</Button>
                <Button buttonStyle={
                    styles.wineMenuButton
                    }>Chardonnay</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Malbec</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Riesling</Button>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleCollapsed3} style={styles.button}>
            <Text style={styles.buttonText}>{collapsed3 ? 'Regions' : 'Regions'}</Text>
        </TouchableOpacity>

        {!collapsed3 && (
          <View style={styles.collapsedContent}>
          <View style={styles.buttonsContainer}>
                <Button buttonStyle={
                    styles.wineMenuButton}>Bordeaux (France)</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Burgundy (France)</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Languedoc (France)</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Champagne (France)</Button>
            </View>
            <View style={styles.buttonsContainer}>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleCollapsed4} style={styles.button}>
            <Text style={styles.buttonText}>{collapsed4 ? 'Countries' : 'Countries'}</Text>
        </TouchableOpacity>
        
        {!collapsed4 && (
          <View style={styles.collapsedContent}>
            <View style={styles.buttonsContainer}>
                    <Button buttonStyle={
                    styles.wineMenuButton}>America</Button>
                    <Button buttonStyle={
                    styles.wineMenuButton}>France</Button>
            </View>
          </View>
        )}

        <TouchableOpacity onPress={toggleCollapsed5} style={styles.button}>
            <Text style={styles.buttonText}>{collapsed5 ? 'Wine Styles' : 'Wine Styles'}</Text>
        </TouchableOpacity>

        { !collapsed5 && (
          <View style={styles.collapsedContent}>
            <View style={styles.buttonsContainer}>
                <Button buttonStyle={
                    styles.wineMenuButton}>Sparkling Wine</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Light-Bodied White Wine</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Full-Bodied White Wine</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Aromatic (sweet) White Wine</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Rose Wine</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Light-Bodied Red Wine</Button>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={toggleCollapsed6} style={styles.button}>
            <Text style={styles.buttonText}>{collapsed6 ? 'Taste Characteristic' : 'Taste Characteristic'}</Text>
        </TouchableOpacity>
        { !collapsed6 && (
          
          <View style={styles.collapsedContent}>
            <View style={styles.sliderContainer}>
                <Text style={styles.sliderText1}>Sweetness: {sliderValue2}</Text>
                <Text style={styles.sliderText}>{minValueSweetness}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={minValueSweetness}
                  maximumValue={maxValueSweetness}
                  step={1}
                  value={sliderValue2}
                  onValueChange={handleSliderChange2}
                />
                <Text style={styles.sliderText}>{maxValueAcidity} </Text>
            </View>
             <View style={styles.sliderContainer}>
                <Text style={styles.sliderText1}>Acidity: {sliderValue3}</Text>
                <Text style={styles.sliderText}>{minValueAcidity}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={minValueAcidity}
                  maximumValue={maxValueAcidity}
                  step={1}
                  value={sliderValue3}
                  onValueChange={handleSliderChange3}
                />
                <Text style={styles.sliderText}>{maxValueTannin} </Text>
              </View>
              <View style={styles.sliderContainer}>
                <Text style={styles.sliderText1}>Tannin: {sliderValue4}</Text>
                <Text style={styles.sliderText}>{minValueTannin}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={minValueTannin}
                  maximumValue={maxValueTannin}
                  step={1}
                  value={sliderValue4}
                  onValueChange={handleSliderChange4}
                />
                <Text style={styles.sliderText}>{maxValueAlcohol} </Text>
              </View>
              <View style={styles.sliderContainer}>
                <Text style={styles.sliderText1}>Alcohol: {sliderValue5}</Text>
                <Text style={styles.sliderText}>{minValueAlcohol}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={minValueAlcohol}
                  maximumValue={maxValueAlcohol}
                  step={1}
                  value={sliderValue5}
                  onValueChange={handleSliderChange5}
                />
                <Text style={styles.sliderText}>{maxValueBody} </Text>
              </View>
              <View style={styles.sliderContainer}>
                <Text style={styles.sliderText1}>Body: {sliderValue6}</Text>
                <Text style={styles.sliderText}>{minValueBody}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={minValueBody}
                  maximumValue={maxValueBody}
                  step={1}
                  value={sliderValue6}
                  onValueChange={handleSliderChange6}
                />
                <Text style={styles.sliderText}>{maxValueSweetness} </Text>
              </View>
            </View>
        )}
        
        <TouchableOpacity onPress={toggleCollapsed7} style={styles.button}>
            <Text style={styles.buttonText}>{collapsed7 ? 'Closures' : 'Closures'}</Text>
        </TouchableOpacity>
        { !collapsed7 && (
          <View style={styles.collapsedContent}>
          <View style={styles.buttonsContainer}>
                <Button buttonStyle={
                    styles.wineMenuButton}>Natural Cork</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Synthetic Cork</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Champagne Cork</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Grainy Cork</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Screw Cao</Button>
                <Button buttonStyle={
                    styles.wineMenuButton}>Hermetic Cork</Button>
            </View>
            </View>
        )}

      </View>

      <Text style={styles.title}>Price</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderText1}>RM: {sliderValue}</Text>
        <Text style={styles.sliderText}>{minValue}</Text>
        <Slider
          style={styles.slider}
          minimumValue={minValue}
          maximumValue={maxValue}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
        />
        <Text style={styles.sliderText}>{maxValue} ++ </Text>
      </View>


        
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  container1: {
    flex: 1,
    lexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  sliderContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  slider: {
    flex: 4,
    width: '100%',
  },
  divider: {
    width:"95%",
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#000000'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 40,
    height: 50,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 15,
  },
  wineMenuButton: {
    borderWidth:  2,
    borderRadius: 5,
    margin: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button2: {
    backgroundColor: '#ddd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  collapsedContent: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
  }
});

export default SideBarFilter;
