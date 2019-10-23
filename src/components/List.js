import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import { issues } from '../../issues';
import Title from '../components/Title';

const extractId = id => `${id.substr(3)}`;

const toUpper = text => text.substr(0, text.indexOf(' ')).toUpperCase();

const renderItem = ({ item }) => (
  <View>
    <Text>Id: {extractId(item.id)}</Text>
    <Text>Omschrijving: {item.description}</Text>
    <Text>Gekoppeld aan: {toUpper(item.assigned)}</Text>
    <Text>----------</Text>
  </View>
);

const List = ({ status }) => (
  <View>
    <Title>Issues met status: {status}</Title>
    <FlatList
      data={issues.filter(e => e.status === status)}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);

List.propTypes = {
  status: PropTypes.string.isRequired
};
List.defaultProps = {
  status: 'Open'
};

export default List;
