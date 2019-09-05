import React from 'react';
import { Text, View } from 'react-native';
import { issues } from '../../issues';

const extractId = id => `${id.substr(3)}`;

const toUpper = text => text.substr(0, text.indexOf(' ')).toUpperCase();

const List = () => (
  <View>
    <Text>Open issues</Text>
    {issues.map(e => {
      if (e.status === 'Open') {
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

export default List;
