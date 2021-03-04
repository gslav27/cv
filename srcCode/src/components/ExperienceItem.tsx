import * as React from 'react';
import styled from 'styled-components/macro';
// styles
import { breakpoints } from '../utils/themes';
// components
import Text from './UI/Text';
import Link from './UI/Link';

type ExperienceItemProps = {
  title: string;
  period: string;
  company?: {
    link: string;
    label: string;
  };
};

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;

  .period {
    max-width: 68px;
  }

  .descWrapper {
    flex: 1;
    margin-left: 10px;

    > *:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    .descWrapper {
      margin-left: 20px;
    }
  }
`;

const TitleLink = styled(Link)`
  font-weight: 300;
`;

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  period,
  company,
  children,
}) => (
  <StyledWrapper>
    <Text className="period" element="div">
      {period}
    </Text>
    <div className="descWrapper">
      <Text element="h4">
        {title}{' '}
        {company && (
          <TitleLink href={company.link}>
            <Text element="i">({company.label})</Text>
          </TitleLink>
        )}
      </Text>
      {children}
    </div>
  </StyledWrapper>
);

export default ExperienceItem;
