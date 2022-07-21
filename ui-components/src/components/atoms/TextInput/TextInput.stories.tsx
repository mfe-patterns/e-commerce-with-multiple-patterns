import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextInput } from './TextInput';
import { Wrapper } from './TextInput.styles';

storiesOf('Atoms', module).add('TextInput', () => (
  <>
    <Wrapper>
      <TextInput
        placeholder="Placeholder"
      />
    </Wrapper>
    <Wrapper>
      <TextInput
        success
        placeholder="Placeholder"
      />
    </Wrapper>
    <Wrapper>
      <TextInput
        error
        placeholder="Placeholder"
      />
    </Wrapper>
    <Wrapper>
      <TextInput
        disabled
        placeholder="Placeholder"
      />
    </Wrapper>
  </>
));
