import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, useEffect, } from 'react-native';
import { Button, Divider } from '@rneui/themed';
import Slider from '@react-native-community/slider';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Font from 'expo-font';


const NewSideBarFilter = () => {
    const [sliderValues, setSliderValues] = useState({
        sweetness: 0,
        acidity: 0,
        tannin: 0,
        alcohol: 0,
        body: 0,
        price: 0
    });

    const [collapsed, setCollapsed] = useState({
        wineTypes: true,
        wineGrapes: true,
        regions: true,
        countries: true,
        wineStyles: true,
        tasteCharacteristics: true,
        closures: true
    });

    const toggleCollapsed = (key) => {
        setCollapsed({ ...collapsed, [key]: !collapsed[key] });
    };

    const handleSliderChange = (key, value) => {
        setSliderValues({ ...sliderValues, [key]: Math.round(value) });
    };

    const renderSlider = (label, key, minValue, maxValue) => (
        <View style={styles.sliderContainer}>
            <Text style={styles.sliderText1}>{label}: {sliderValues[key]}</Text>
            <Text style={styles.sliderText}>{minValue}</Text>
            <Slider
                style={styles.slider}
                minimumValue={minValue}
                maximumValue={maxValue}
                step={1}
                value={sliderValues[key]}
                onValueChange={(value) => handleSliderChange(key, value)}
            />
            <Text style={styles.sliderText}>{maxValue}</Text>
        </View>
    );

    // const renderCollapsedContent = (key, buttons) => {
    //     switch (key) {
    //         case 'tasteCharacteristics':
    //             return (
    //                 <View style={styles.collapsedContent}>
    //                     <View style={styles.sliderContainer}>
    //                         <Text style={styles.sliderText1}>Sweetness: {sliderValues.sweetness}</Text>
    //                         <Text style={styles.sliderText}>0</Text>
    //                         <Slider
    //                             style={styles.slider}
    //                             minimumValue={0}
    //                             maximumValue={10}
    //                             step={1}
    //                             value={sliderValues.sweetness}
    //                             onValueChange={(value) => handleSliderChange('sweetness', value)}
    //                         />
    //                         <Text style={styles.sliderText}>10</Text>
    //                     </View>
    //                     <View style={styles.sliderContainer}>
    //                         <Text style={styles.sliderText1}>Acidity: {sliderValues.acidity}</Text>
    //                         <Text style={styles.sliderText}>0</Text>
    //                         <Slider
    //                         style={styles.slider}
    //                         minimumValue={0}
    //                         maximumValue={10}
    //                         step={1}
    //                         value={sliderValues.acidity}
    //                         onValueChange={(value) => handleSliderChange('acidity', value)}
    //                         />
    //                         <Text style={styles.sliderText}>10</Text>
    //                     </View>
    //                     <View style={styles.sliderContainer}>
    //                         <Text style={styles.sliderText1}>tannin: {sliderValues.tannin}</Text>
    //                         <Text style={styles.sliderText}>0</Text>
    //                         <Slider
    //                         style={styles.slider}
    //                         minimumValue={0}
    //                         maximumValue={10}
    //                         step={1}
    //                         value={sliderValues.tannin}
    //                         onValueChange={(value) => handleSliderChange('tannin', value)}
    //                         />
    //                         <Text style={styles.sliderText}>10</Text>
    //                     </View>
    //                     <View style={styles.sliderContainer}>
    //                         <Text style={styles.sliderText1}>Alcohol: {sliderValues.alcohol}</Text>
    //                         <Text style={styles.sliderText}>0</Text>
    //                         <Slider
    //                         style={styles.slider}
    //                         minimumValue={0}
    //                         maximumValue={10}
    //                         step={1}
    //                         value={sliderValues.alcohol}
    //                         onValueChange={(value) => handleSliderChange('alcohol', value)}
    //                         />
    //                         <Text style={styles.sliderText}>10</Text>
    //                     </View>
    //                     <View style={styles.sliderContainer}>
    //                         <Text style={styles.sliderText1}>Body: {sliderValues.body}</Text>
    //                         <Text style={styles.sliderText}>0</Text>
    //                         <Slider
    //                         style={styles.slider}
    //                         minimumValue={0}
    //                         maximumValue={10}
    //                         step={1}
    //                         value={sliderValues.body}
    //                         onValueChange={(value) => handleSliderChange('body', value)}
    //                         />
    //                         <Text style={styles.sliderText}>10</Text>
    //                     </View>
                       
    //                 </View>
    //             );
    //         default:
    //     <View style={styles.collapsedContent}>
    //         <View style={styles.buttonsContainer}>
    //             {buttons.map((button, index) => (
    //                 <Button key={index} buttonStyle={styles.wineMenuButton}>{button}</Button>
    //             ))}
    //         </View>
    //     </View>
    //     }
    //     };


    const renderCollapsedContent = (key, buttons) => (
        <View style={styles.collapsedContent}>
            <View style={styles.buttonsContainer}>
                {buttons.map((button, index) => (
                    <Button key={index} buttonStyle={styles.wineMenuButton}>{button}</Button>
                ))}
            </View>
        </View>
    );


    const [fontLoaded, setFontLoaded] = React.useState(false);

    useState(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'FontAwesome5Free-Regular': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Regular.ttf'),
                // Add other font families if needed
            });
            setFontLoaded(true);
        };

        loadFonts();
    }, []);

    return (
        <ScrollView style={styles.container}>
        {/* <ScrollView> */}
            <Text style={styles.title}>Filter</Text>
            <Divider style={styles.divider} />
            <View style={styles.topBar}>
                <Text>2 of 10 results</Text>
                <Text>Clear All</Text>
            </View>

            <TouchableOpacity onPress={() => toggleCollapsed('wineTypes')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.wineTypes ? 'Wine Types' : 'Wine Types'}</Text>
            </TouchableOpacity>
            {!collapsed.wineTypes && renderCollapsedContent('wineTypes', ['Red', 'White', 'Rose', 'Sparkling', 'Dessert', 'Fortified'])}


            <TouchableOpacity onPress={() => toggleCollapsed('wineGrapes')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.wineGrapes ? 'Wine Grapes' : 'Wine Grapes'}</Text>
            </TouchableOpacity>
            {!collapsed.wineGrapes && renderCollapsedContent('wineGrapes', ['Cabernet Franc', 'Chardonnay', 'Malbec', 'Riesling'])}
            
            
            <TouchableOpacity onPress={() => toggleCollapsed('regions')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.regions ? 'Regions' : 'Regions'}</Text>
            </TouchableOpacity>
            {!collapsed.regions && (
                <View style={styles.collapsedContent}>
                    {renderCollapsedContent('Regions', ['Bordeaux (France)', 'Burgundy (France)', 'Languedoc (France)', 'Champagne (France)'])}
                    {fontLoaded && (
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="flag" size={18} color="blue" />
                            <Text style={styles.countryText}>France</Text>
                        </View>
                    )}
                </View>
            )}


            <TouchableOpacity onPress={() => toggleCollapsed('countries')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.countries ? 'Countries' : 'Countries'}</Text>
            </TouchableOpacity>
            {!collapsed.countries && renderCollapsedContent('countries', ['America', 'Frence'])}


            <TouchableOpacity onPress={() => toggleCollapsed('wineStyles')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.wineStyles ? 'Wine Styles' : 'Wine Styles'}</Text>
            </TouchableOpacity>
            {!collapsed.wineStyles && renderCollapsedContent('wineStyles', ['Sparkling Wine', 'Sparkling Wine', 'Full-Bodied White Wine', 'Aromatic (sweet) White Wine', 'Rose Wine', 'Light-Bodied Red Wine'])}


            {/* <TouchableOpacity onPress={() => toggleCollapsed('tasteCharacteristics')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.tasteCharacteristics ? 'Taste Characteristics' : 'Taste Characteristics'}</Text>
            </TouchableOpacity>
            {!collapsed.tasteCharacteristics && renderCollapsedContent('tasteCharacteristics', [])} */}

            
            <TouchableOpacity onPress={() => toggleCollapsed('closures')} style={styles.button}>
                <Text style={styles.buttonText}>{collapsed.closures ? 'Closures' : 'Closures'}</Text>
            </TouchableOpacity>
            {!collapsed.closures && renderCollapsedContent('closures', ['Natural Cork', 'Synthetic Cork', 'Champagne Cork', 'Grainy Cork', 'Screw Cork', 'Hermetic Cork'])}



            <Text style={styles.title}>Price</Text>
            {renderSlider('Price', 'price', 0, 2000)}

            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    divider: {
        width: "95%",
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
    buttonText: {
        // Your button text styles
    },
    wineMenuButton: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    collapsedContent: {
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
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
    sliderText1: {
        
    },
    slider: {
        flex: 4,
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    countryText: {
        marginLeft: 5,
        
    },
});

export default NewSideBarFilter;
