import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';
import { Wrapper } from './Button.styles';
import { ButtonAction, ButtonSize } from './ButtonTypes';

storiesOf('Atoms/Button', module)
  .add('Primary Button', () => (
    <div
      style={{
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        flexWrap: 'wrap',
      }}>
      <Wrapper>
        <Button
          buttonType={ButtonAction.PRIMARY}
          onClick={() => { }}
          size={ButtonSize.XLARGE}
          disabled={false}>
          Primary Extra Large Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.PRIMARY}
          onClick={() => { }}
          size={ButtonSize.XLARGE}
          disabled>
          Primary Extra Large Disabled Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.PRIMARY}
          onClick={() => { }}
          size={ButtonSize.DEFAULT}
          disabled={false}>
          Primary Default (Large) Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.PRIMARY}
          onClick={() => { }}
          size={ButtonSize.MEDIUM}
          disabled={false}>
          Primary Medium Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.PRIMARY}
          onClick={() => { }}
          size={ButtonSize.SMALL}
          disabled={false}>
          Primary Small Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.PRIMARY}
          onClick={() => { }}
          size={ButtonSize.XSMALL}
          disabled={false}>
          Primary Extra Small Button
        </Button>
      </Wrapper>
    </div>
  ))
  .add('Secondary Button', () => (
    <div
      style={{
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        flexWrap: 'wrap',
      }}>
      <Wrapper>
        <Button
          buttonType={ButtonAction.SECONDARY}
          onClick={() => { }}
          size={ButtonSize.XLARGE}
          disabled={false}>          
          Secondary Extra Large Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.SECONDARY}
          onClick={() => { }}
          size={ButtonSize.XLARGE}
          disabled>
          Secondary Extra Large Disabled Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.SECONDARY}
          onClick={() => { }}
          size={ButtonSize.DEFAULT}
          disabled={false}>
          Secondary Default (Large) Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.SECONDARY}
          onClick={() => { }}
          size={ButtonSize.MEDIUM}
          disabled={false}>
          Secondary Medium Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.SECONDARY}
          onClick={() => { }}
          size={ButtonSize.SMALL}
          disabled={false}>
          Secondary Small Button
        </Button>
      </Wrapper>
      <Wrapper>
        <Button
          buttonType={ButtonAction.SECONDARY}
          onClick={() => { }}
          size={ButtonSize.XSMALL}
          disabled={false}>
          Secondary Extra Small Button
        </Button>
      </Wrapper>            
    </div>
  ));