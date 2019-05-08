// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import products from '../Helpers/productsData'
import ProductItem from './ProductItem'

class Search extends React.Component {

  displayDetailForProduct = (Product) =>{
    this.props.navigation.navigate('ProductDetail', { Product: Product})
  }

  render() {
    return (
      
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ProductItem product={item} displayDetailForProduct={this.displayDetailForProduct}/>}
        />
      </View>
        
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30,
    
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search