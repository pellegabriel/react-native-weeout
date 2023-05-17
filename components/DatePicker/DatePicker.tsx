import React, { useState } from 'react'
import {StyleSheet, View } from 'react-native';

import DatePicker from 'react-native-date-picker'

export const DateComponent = () => {
    const [date, setDate] = useState(new Date())


  return ( 
    <>
        <View>
          <DatePicker date={date} onDateChange={setDate} />
        </View>
        <View>
          <DatePicker date={date} onDateChange={setDate} />
        </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {

  },
});

