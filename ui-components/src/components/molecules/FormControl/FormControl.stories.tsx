import { storiesOf } from '@storybook/react';
import React from 'react';

import { FormControl } from './FormControl';
import { Wrapper } from './FormControl.styles';

storiesOf('Molecules', module).add('FormControl', () => (
  <>
    <Wrapper>
      <FormControl
        label="Label"
        placeholder="Placeholder"
        helpText="Filium morte multavit si sine dubio praeclara sunt"
      />
    </Wrapper>
    <Wrapper>
      <FormControl
        label="Label"
        placeholder="Placeholder"
        error
        helpText="Oops! Looks like you’re missing a few characters"
      />
    </Wrapper>
    <Wrapper>
      <FormControl
        label="Label"
        placeholder="Placeholder"
        success
        helpText="Way to go! You’ve completed your first task"
      />
    </Wrapper>
    <Wrapper>
      <FormControl
        label="Label"
        placeholder="Placeholder"
        disabled
        helpText="Fill the other field to enable this"
      />
    </Wrapper>
  </>
));
