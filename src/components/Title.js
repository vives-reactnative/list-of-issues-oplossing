import React from 'react';
import PropTypes from 'prop-types';

import { Text, StyleSheet, View } from 'react-native';

const Title = ({ children }) => {
  const { titleContainer, titleText } = styles;
  return (
    <View style={titleContainer}>
      <Text style={titleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#2B2D42',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 30,
    marginBottom: 10,
    marginTop: 10
  },
  titleText: {
    color: 'white',
    fontSize: 25
  }
});

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
