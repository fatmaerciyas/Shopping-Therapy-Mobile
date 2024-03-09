import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { Product } from "../models/Product";
import { baseUrl } from "../api/url.contants";

const ProductDetail = () => {
  const route = useRoute();
  const { productId } = route.params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `${baseUrl}Product?id=${productId}`
        );
        console.log(product?.image);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const addCartItemAsync = ({ productId, quantity = 1 }: Product) => {
    try {
      Alert.alert("The product has been added to your cart");
      // Assuming this function adds the product to the cart
      // Replace it with your actual implementation
      // agent.Cart.createCart(productId, quantity);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading || !product) {
    return <Text>Loading...</Text>; // or render a loading indicator
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.addToCartButton}>
        <TouchableOpacity
          style={styles.addToCartButtonInner}
          onPress={() => addCartItemAsync(product)}
        >
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${product.price}</Text>
          <Text style={styles.oldPriceText}>${product.price + 12}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  addToCartButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "blue",
    borderRadius: 5,
    elevation: 8,
  },
  addToCartButtonInner: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  addToCartButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  newTag: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "orange",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  newTagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
  oldPriceText: {
    fontSize: 18,
    color: "red",
    textDecorationLine: "line-through",
  },
});

export default ProductDetail;
