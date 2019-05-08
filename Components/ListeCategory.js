import React from 'react'
import { StyleSheet, Text, ScrollView, View, TextInput, FlatList} from 'react-native'
import products from '../Helpers/productsData'
import category from '../Helpers/categoryData'
import CategoryItems from '../Components/CategoryItems'


class ListeCategory extends React.Component {

    displayDetailForCategory = (Category, Product) =>{
        this.props.navigation.navigate('CategoryDetail', { Product: Product, Category: Category})
      }
    category(products){
        let category = []
        products.forEach((item) => {
            if(category.indexOf(item.text_class) === -1){
                category.push(item.text_class)
            }
        });
        return category;
    }

  render() {
    

    return (
        <ScrollView style={styles.main}>
            
                <View style={{backgroundColor: '#FFFFFF'}}>
                    <View style={{height: 20}}></View>
                    <Text style={{textAlign: "center", fontSize: 18, fontWeight: 'bold'}}>Quel est le produit qui t'interesse?</Text>
                    <View style={{height: 12}}></View>
                    
                </View>
                <View style={{height: 1}}></View>
                <FlatList
                    data={category}
                    keyExtractor={(item) => item.text_name}
                    renderItem={({item}) => <CategoryItems category={item} product={products} displayDetailForCategory={this.displayDetailForCategory} />}
                />
            
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F0F0F0'
    }
})

export default ListeCategory