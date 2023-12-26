import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrdersDetails = ({ navigation, route }) => {
  const {
    serviceName,
    price,
    selectedDate, 
    phoneNumber,
    customerName,
    email
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên dịch vụ: {serviceName}</Text>
      <Text style={styles.label}>Giá: {price}</Text>
      <Text style={styles.label}>
        Chọn ngày: {new Date(selectedDate).toDateString()}
      </Text>
      <Text style={styles.label}>Số điện thoại: {phoneNumber}</Text>
      <Text style={styles.label}>Họ và tên: {customerName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default OrdersDetails;