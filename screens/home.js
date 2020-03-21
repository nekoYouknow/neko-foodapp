import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const data = {
    best: [
        {id: 1, thumb: require('../assets/best01.png'), name: 'Burger Double', distance: '30~40 Min', price: '2.00 JD', color: '#FFF6DB' },
        {id: 2, thumb: require('../assets/best02.png'), name: 'Cheese Pizza', distance: '30~40 Min', price: '3.00 JD', color: '#EAFFEE' },
        {id: 3, thumb: require('../assets/best02.png'), name: 'Cheese Hot Pizza', distance: '30~40 Min', price: '3.00 JD', color: '#FEE3EB' },
    ], 
    offer: [
        {id: 1, thumb: require('../assets/offer01.png'), name: 'Shrimp Sandwich', info: '50% Off', color: '#EAFFEE' },
        {id: 2, thumb: require('../assets/offer02.png'), name: 'Burger Double', info: '20% Off', color: '#FFF6DB' },
        {id: 3, thumb: require('../assets/offer02.png'), name: 'Big mac ', info: '15% Off', color: '#E7E7F7' },
    ],
}


export default function Home({route, navigation}) {
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                {/* left */}
                <View style={{width: 20}}>
                    <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.openDrawer()}>
                        <Image source={require('../assets/menu.png')} style={{width: 15.56, height: 16.07}} />
                    </TouchableOpacity>
                </View>

                {/* center */}
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Home</Text>
                </View>

                {/* right */}
                <View style={{backgroundColor: 'red', width: 20}} />
            </View>

            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

                {/* serarch */}
                <View>
                    <View style={{flexDirection: 'row',alignItems: 'center', borderWidth: 1, borderColor: '#F85883', borderRadius: 20, padding: 8, margin: 16}}>
                        <MaterialIcons name="search" size={22} color="#F85883" />
                        <TextInput placeholder="Search" placeholderTextColor="#F85883" style={{flex: 1, fontSize: 14}} multiline={false}/>
                    </View>
                </View>

                {/* category */}
                <View style={{paddingHorizontal: 16}}>
                    {/* title */}
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Category</Text>

                    {/* items */}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#FEE3EB', width: 54, height: 54, borderRadius: 90}}>
                                <Image source={require('../assets/cate01.png')} style={{width: 28.65, height: 26.25 }} />
                            </TouchableOpacity>
                            <Text>Burger</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#D7E9F1', width: 54, height: 54, borderRadius: 90}}>
                                <Image source={require('../assets/cate02.png')} style={{width: 28.65, height: 26.25 }} />
                            </TouchableOpacity>
                            <Text>Sandwich</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#FFF6DB', width: 54, height: 54, borderRadius: 90}}>
                                <Image source={require('../assets/cate03.png')} style={{width: 28.65, height: 26.25 }} />
                            </TouchableOpacity>
                            <Text>Pizza</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', marginVertical: 10, backgroundColor: '#E7E7E7', width: 54, height: 54, borderRadius: 90}}>
                                <Image source={require('../assets/cate04.png')} style={{width: 28.65, height: 26.25 }} />
                            </TouchableOpacity>
                            <Text>Salads</Text>
                        </View>
                    </View>
                </View>

                {/* best */}
                <View style={{marginTop: 20}}>
                    {/* title */}
                    <Text style={{paddingHorizontal: 16, fontSize: 16, fontWeight: 'bold'}}>Today Best Order's</Text>
                    
                    {/* items` */}
                    <ScrollView style={{marginVertical: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {data.best.map(item => (
                            <TouchableOpacity key={item.id} style={[styles.item, {backgroundColor: item.color}]} onPress={() => console.log(item.id)}>
                                <Image source={item.thumb} style={{width: 151, height: 151}} />
                                <View style={{padding: 3}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{item.name}</Text>
                                    <Text style={{fontSize: 10}}>{item.distance}</Text>
                                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'red', textAlign: 'right'}}>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* offer */}
                <View style={{marginTop: 20}}>
                    {/* title */}
                    <Text style={{paddingHorizontal: 16, fontSize: 16, fontWeight: 'bold'}}>Today's Offer</Text>
                    
                    {/* items` */}
                    <ScrollView style={{marginVertical: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {data.offer.map(item => (
                            <TouchableOpacity key={item.id} style={[styles.item, {backgroundColor: item.color}]} onPress={() => console.log(item.id)}>
                                <Image source={item.thumb} style={{width: 151, height: 151}} />
                                <View style={{padding: 3}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>{item.name}</Text>
                                    <Text style={{fontSize: 10}}>{item.info}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }, 
    header: {
        backgroundColor: '#F85883',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        paddingTop: 24,

    },
    body: {
        flex: 1
    },
    item: {
        // marginHorizontal: 16, 
        marginLeft: 16,
        marginRight: 2,
        width: 151, 
        borderRadius: 5, 
        // height: 211, 
        backgroundColor: 'gray'
    }
})
