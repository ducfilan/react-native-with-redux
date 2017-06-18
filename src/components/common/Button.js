import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const {
    buttonStyle,
    textStyle,
  } = styles;

  const {
    children,
    onPressHandler
  } = props;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPressHandler}
    >
      <Text style={textStyle}>{ children }</Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export { Button };
