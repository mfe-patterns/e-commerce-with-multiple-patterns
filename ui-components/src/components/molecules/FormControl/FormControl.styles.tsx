import styled from 'styled-components';
import { Label } from '../../atoms/Typography/Typography.styles';
import { HelpText } from '../../atoms/Typography/Typography';

export const Wrapper = styled.div`
  margin: 20px;
`;

export const LabelContainer = styled.div`
  flex-direction: row;
  align-items: baseline;
`;

export const StyledLabel = styled(Label)`
  margin-bottom: ${({ theme }) => `${theme.gridSize}px`};
`;

export const LabelHelpText = styled(HelpText)`
  margin-left: ${({ theme }) => `${theme.gridSize}px`};
`;

export const HelpTextContainer = styled.div`
  flex-direction: row;
  margin-top: ${({ theme }) => `${theme.gridSize}px`};
`;

export const HelpTextLeft = styled.div`
  flex: 1;
  margin-right: ${({ theme }) => `${theme.gridSize}px`};
`;
