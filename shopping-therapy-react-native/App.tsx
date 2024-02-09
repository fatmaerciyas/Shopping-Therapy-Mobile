import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from './Models/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import 'tailwindcss/tailwind.css';



  const Stack = createNativeStackNavigator();



export default function App() {

  // const [products, setProducts] = useState<Product[]>([]);


  // useEffect(() => {
  //   async function fetchdata() {
  //     const productsResponse = await axios.get<Product[]>("http://192.168.1.7:7049/api/" + "Product");
  //     setProducts(productsResponse.data);
  //     console.log(products)

  //   }
  //   fetchdata();
  // }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

