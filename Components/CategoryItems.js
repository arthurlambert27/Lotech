import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class CategoryItems extends React.Component {
  
  render() {
    const { category, product, displayDetailForCategory } = this.props
    
    return (
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForCategory(category, product)}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Image source={category.url_picture}
                style={styles.icon}/>
        <Text style={styles.text}>{category.text_name}</Text>
        <View style={{flex: 1, flexDirection: 'column',}}>
        <Image source={require('../Images/next_icon.png')}
                style={styles.next_icon}/>
        </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    height: 90,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 4,
    backgroundColor: '#FFFFFF'
    
  },
  icon: {
    marginLeft: 20,
    flex: 1,
    marginTop: 15,
    width: 60,
    height: 60
},
  next_icon: {
    marginTop: 35,
    height: 20,
    width: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 3,
    marginLeft: 15,
    marginTop: 34,
    fontSize: 14,
    color: '#A9A9A9',
    
  }

})

export default CategoryItems