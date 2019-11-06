import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Title from './Title';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      count: 0,
      error: false
    };
  }

  componentDidMount = () => {
    axios
      .get(
        `https://listofissues.herokuapp.com/issues?status=${this.props.status}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          issues: response.data,
          count: response.data.length,
          error: false
        });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  extractId = id => `${id.substr(3)}`;

  toUpper = text => text.substr(0, text.indexOf(' ')).toUpperCase();

  separator = () => <View style={styles.separator} />;

  renderItem = ({ item }) => (
    <View style={styles.list}>
      <Text>Id: {this.extractId(item.id)}</Text>
      <Text>Omschrijving: {item.description}</Text>
      <Text>Gekoppeld aan: {this.toUpper(item.assigned)}</Text>
    </View>
  );

  render() {
    const { status } = this.props;

    return (
      <View>
        <Title>
          Issues met status: {status} ({this.state.count})
        </Title>
        {this.state.error ? (
          <Text style={styles.error}>Fout bij ophalen issues</Text>
        ) : (
          <FlatList
            data={this.state.issues}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.separator}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  list: {
    margin: 10
  },
  error: {
    color: '#990000',
    margin: 5,
    padding: 20,
    borderColor: '#990000',
    backgroundColor: '#EACCCC',
    borderStyle: 'solid',
    borderWidth: 2
  }
});

export default List;
