import { styled } from 'styled-components';

export default styled.div<{ $direction: 'left' | 'right' }>`
  display: flex;
  .staff-img {
    width: clamp(124px, 20%, 175px);
    height: auto;
    order: ${props => props.$direction === 'left' ? 1 : 2};
  }
  .staff-info {
    display: flex;
    order: ${props => props.$direction === 'right' ? 1 : 2};

  }
`;
