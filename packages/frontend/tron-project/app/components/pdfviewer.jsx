import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffdab5", // PeachPuff
    padding: 40,
  },
  container: {
    flex: 1,  
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  image: {
    width: 400,
    height: 220,
  },
  date: {
    position: 'absolute',
    right: 45,
    top: 30,
    fontSize: 12,
    width: 100,
  },
});

const MyDocument = ({ proofName, proofDescription, images }) => {
  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.date}>Created at: {formattedDate}</Text>
        <View style={styles.container}>
          <Text style={styles.title}>Product Information</Text>
          <Text style={styles.text}>Name: {proofName}</Text>
          <Text style={styles.text}>Description: {proofDescription}</Text>
          
          {images.map((image, index) => (
          <Image key={index} style={styles.image} src={image} />
        ))}
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;