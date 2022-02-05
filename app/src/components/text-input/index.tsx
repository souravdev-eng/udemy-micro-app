import React, {useState} from 'react';

import {theme} from '../../themes';
import * as Styled from './styles';

interface AppTextInputProps {
  name: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({name}) => {
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
      />
    </Styled.TextInputContainer>
  );
};

export default AppTextInput;
