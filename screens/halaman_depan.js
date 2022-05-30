import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, ImageBackground , ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from 'react';
import FotoDessert from '../assets/dessert.jpg';
import FotoSate from '../assets/sate.jpg';
import FotoSoto from '../assets/soto.jpg';
import FotoTempe from '../assets/tempe.jpg';
import FotoSemur from '../assets/semur.jpg';
import FotoAyam from '../assets/ayam.jpg';
import FotoDaging from '../assets/daging.jpg';
import FotoSayuran from '../assets/sayuran.jpg';
import FotoUdang from '../assets/udang.jpg';
import FotoNasgor from '../assets/nasgor.jpg'

const halaman_depan = ({ navigation }) => {
    const [search, onChangeSearch] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={{
        //   borderWidth: 1,
        //   borderColor: 'black',
          height: '10%',
          flexDirection: 'row',
          paddingHorizontal: '3%',
          paddingBottom: 2,
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
        <View style={{
        //   borderWidth: 1,
        //   borderColor: 'black',
          width: '50%',
          alignItems: 'flex-end',
          flexDirection: 'row'
          }}>
            <TextInput style={{
                borderWidth: 0.5,
                height : '40%',
                borderRadius: 10,
                paddingHorizontal: 10,
                width: '80%'
            }}
            placeholder={"Nama masakan"}
            onChangeText={(text) => onChangeSearch(text)}
            value={search}>
            </TextInput>
            <TouchableOpacity style={{
                // borderWidth: 1,
                // borderColor: 'black',
                width: '20%',
                height: '40%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={ () => navigation.navigate('hasil_searching' , {
                Search : search
            })}>
                <FontAwesome5 name="search" color="gray" size={20}/>
            </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 225,
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    height: 225,
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "resep-dessert"
            })}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground source={FotoDessert}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}/>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "masakan-hari-raya"})}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground source={FotoSate}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}/>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Dessert</Text>
            </View>
            <View style={{
                width: '50%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Masakan Hari Raya</Text>
            </View>
        </View>
        
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 225,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: '48.5%',  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "masakan-tradisional"})}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground source={FotoSoto}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: '48.5%',  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "makan-malam"})}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground source={FotoTempe}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>    
            </View>
            
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Makanan Tradisional</Text>
            </View>
            <View style={{
                width: '50%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Menu Makan Malam</Text>
            </View>
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 225,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "makan-siang"})}>
                    <ImageBackground source={FotoSemur}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                    </ImageBackground>
                </TouchableOpacity>    
            </View>
            
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "resep-ayam"})}>
                    <ImageBackground source={FotoAyam}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                    </ImageBackground>
                </TouchableOpacity>    
            </View>
            
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '48.5%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Menu Makan Siang</Text>
            </View>
            <View style={{
                width: '48.5%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Resep Ayam</Text>
            </View>
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 225,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "resep-daging"})}>
                    <ImageBackground source={FotoDaging}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                    </ImageBackground>
                </TouchableOpacity>    
            </View>
            
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "resep-sayuran"})}>
                    <ImageBackground source={FotoSayuran}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                    </ImageBackground>
                </TouchableOpacity>    
            </View>
            
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '48.5%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Resep Daging</Text>
            </View>
            <View style={{
                width: '48.5%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Resep Sayuran</Text>
            </View>
        </View>
        
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 225,
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "resep-seafood"})}>
                    <ImageBackground source={FotoUdang}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                    </ImageBackground>
                </TouchableOpacity>    
            </View>
            
            <View style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: 164,  
                    borderRadius: 5,   
                }}
                onPress={ () => navigation.navigate('halaman_kategori' , {
                Key : "sarapan"})}>
                    <ImageBackground source={FotoNasgor}
                        style={{height: 223, 
                        width: 162, 
                        resizeMode: 'cover',
                        justifyContent: 'flex-end',
                        alignItems: 'center'}}>
                    </ImageBackground>
                </TouchableOpacity>    
            </View>
            
        </View>
        <View style={{
            // borderWidth: 1,
            // borderColor: 'black',
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={{
                width: '48.5%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Resep Seafood</Text>
            </View>
            <View style={{
                width: '48.5%',
                // borderWidth: 1,
                // borderColor: 'black',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                }}>Sarapan</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default halaman_depan;
