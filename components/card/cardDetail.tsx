import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

type CardDetailsProps = {
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate: string;
  categories: string[];
  image: string;
};

const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  subtitle,
  description,
  startDate,
  endDate,
  categories,
  image,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.datesContainer}>
        <Text style={styles.date}>{`Start Date: ${startDate}`}</Text>
        <Text style={styles.date}>{`End Date: ${endDate}`}</Text>
      </View>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <Text key={category} style={styles.category}>
            {category}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  datesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  date: {
    marginRight: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  category: {
    backgroundColor: '#eee',
    color: '#333',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
});

export default CardDetails;
