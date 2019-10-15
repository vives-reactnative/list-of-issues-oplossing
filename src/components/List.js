import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { issues } from '../../issues';
import Title from '../components/Title';

const extractId = id => `${id.substr(3)}`;

const toUpper = text => text.substr(0, text.indexOf(' ')).toUpperCase();

const List = ({ status }) => (
  <View>
    <Title>Issues met status: {status}</Title>
    {issues.map(e => {
      if (e.status === status) {
        return (
          <View>
            <Text>Id: {extractId(e.id)}</Text>
            <Text>Omschrijving: {e.description}</Text>
            <Text>Gekoppeld aan: {toUpper(e.assigned)}</Text>
            <Text>----------</Text>
          </View>
        );
      }
      return null;
    })}
  </View>
);

List.propTypes = {
  status: PropTypes.string.isRequired
};
List.defaultProps = {
  status: 'Open'
};

export default List;
