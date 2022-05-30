import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";

const hasil_detail = ({ navigation }) => {
    const route = useRoute();
    const [data, setData] = useState();

    const ambilDetail = async () => {
        try {
         const response = await fetch('https://masak-apa-tomorisakura.vercel.app/api/recipe/' + route.params.Key);
         const json = await response.json();
         const temp = [ (json.results) ]
         console.log(json.results)
         setData(temp)
        } 
        catch (error) {
        }
    }
    
    useEffect( () => {
        ambilDetail();
        console.log(data);
    }, []);

  return (
    <View style={styles.container}>
        <View style={{
            //   borderWidth: 1,
            //   borderColor: 'black',
            height: '10%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
        }}>
            <View style={{
            //   borderWidth: 1,
            //   borderColor: 'black',
            width: '50%',
            justifyContent: 'flex-end'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>MasakApaNich</Text>
            </View>
            <TouchableOpacity style={{
                justifyContent: 'flex-end'
            }}
            onPress={() => navigation.navigate('halaman_depan')}>
                <Entypo name="cross" color="gray" size={30} />
            </TouchableOpacity>
        </View>
        <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                  <View style={{
                      marginTop: 10,
                  }}>
                    <Image source={{uri: item.thumb}}
                        style={{
                        height: 200,
                        width: 440,
                        // resizeMode: 'cover',
                    }} />
                    <View style={{
                        marginTop: '-10%',
                        marginBottom: '20%',
                        // borderWidth: 1,
                        // borderColor: 'black',
                        borderTopRightRadius: 50,
                        borderTopLeftRadius: 50,
                        paddingTop: 40,
                        paddingHorizontal: '5%',
                        backgroundColor: 'white',
                        height: '100%'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                        }}>ingredient :</Text>
                        {
                            item.ingredient.map((ingredient, index) => (
                                <Text style={{
                                    fontSize: 15,

                                }}> ▪    {ingredient}</Text>
                            ))
                        }
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            marginTop: 30,
                        }}>Cara Penyajian :</Text>    
                        {
                            item.step.map((step, index) => (
                                <Text style={{
                                    fontSize: 15,

                                }}>{step}</Text>
                            ))
                        }
                    </View>
                   
                  </View>
              )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default hasil_detail;