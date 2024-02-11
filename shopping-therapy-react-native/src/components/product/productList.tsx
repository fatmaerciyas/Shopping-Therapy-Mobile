import { useEffect, useState } from "react";
import { baseUrl } from "../../api/url.contants";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";
import axios from "axios";
import { TouchableOpacity, View, Text } from "react-native";
import ProductCard from "./productCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get<Category[]>(baseUrl + "Category");
      setCategories(response.data);

      const productsResponse = await axios.get<Product[]>(baseUrl + "Product");
      setProducts(productsResponse.data);

      //   setIsLoaded(true);
    }
    fetchdata();
  }, []);

  return (
    <TouchableOpacity>
      {products.length != 0 ? (
        <View>
          {products.map((product) => {
            if (!product) {
              return null;
            }

            return <ProductCard key={product.productId} product={product} />;
          })}
        </View>
      ) : (
        <View>
          <Text className="text-gray-500 m-auto text-xs mt-20">
            There are no products 👉👈😅
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}