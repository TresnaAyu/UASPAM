import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";

const hasil_kategori = ({ navigation }) => {
    const route = useRoute();
    const [data, setData] = useState();


    const ambilDataKategori = async () => {
        try {
         const response = await fetch('https://masak-apa-tomorisakura.vercel.app/api/categorys/recipes/' + route.params.Key);
         const json = await response.json();
         console.log(json.results)
         setData(json.results)
        } 
        catch (error) {
        }
    }

      useEffect( () => {
        ambilDataKategori();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{
                //   borderWidth: 1,
                //   borderColor: 'black',
                height: '10%',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
                onPress={() => navigation.goBack()}>
                    <Entypo name="cross" color="gray" size={30} />
                </TouchableOpacity>
            </View>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                  <TouchableOpacity style={{
                    //   borderWidth: 1,
                    //   borderColor: 'black',
                      height: 200,
                      width: 500,
                      marginBottom: 20,
                      borderBottomWidth: 1,
                  }}
                    onPress={ () => navigation.navigate('halaman_detail' , {
                        Key : item.key
                    })}>
                    <ImageBackground source={{uri: item.thumb}}
                    style={{
                        height: 200,
                        width: 500,
                    }}>
                            <Text style={{
                                backgroundColor: 'white'
                            }}>{item.key.replace(/-/g, ' ')}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
              )}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
  },
});

export default hasil_kategori;
