import React, {useState} from 'react';

import {theme} from '../../themes';
import * as Styled from './styles';

interface AppTextInputProps {
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'email-address' | 'default';
  secureTextEntry?: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  name,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
}) => {
  const [active, setActive] = useState(false);

  return (
    <Styled.TextInputContainer active={active}>
      {active && <Styled.Text>{name}</Styled.Text>}
      <Styled.TextInput
        active={active}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholder={`${active ? '' : name}`}
        placeholderTextColor={theme.colors.Black}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </Styled.TextInputContainer>
  );
};

export default AppTextInput;
