import styled from "styled-components";
import { Heading4 } from 'ui-components/components/atoms';

export const ProductRow = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral[300]}`};
  padding: ${({ theme }) => `${theme.gridSize * 2}px`};
`

export const ProductHeaderRow = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral[300]}`};
  padding: ${({ theme }) => `${theme.gridSize * 2}px`};
  justify-content: right;
`

export const PriceText = styled(Heading4)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`

export const Image = styled.img`
  width: 180px;
  height: 180px;
`;

export const Title = styled.div`
  flex: 1;
  padding-left: ${({ theme }) => `${theme.gridSize * 2}px`};
`;

export const Delete = styled.a`
  cursor: pointer;
`;
