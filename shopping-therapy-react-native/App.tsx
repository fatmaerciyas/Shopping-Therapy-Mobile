import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Product } from './Models/Product';
import { ListItem } from 'react-native-elements';


export default function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchdata() {
      const productsResponse = await axios.get<Product[]>("http://192.168.1.8:7049/" + "Product");
      setProducts(productsResponse.data);

    }
    fetchdata();
  }, []);

  return (
    <View style={styles.container}>
      {products.map(product => (
        <ListItem key={product.name}>
          <ListItem.Content>
            <ListItem.Title>{product.name}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
