import styled from 'styled-components/macro';

type ListItemProps = {
  className?: string;
};

export default styled.li<ListItemProps>`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
