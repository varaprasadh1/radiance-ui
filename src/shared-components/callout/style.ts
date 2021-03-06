import styled from '@emotion/styled';

import { SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

const ParentContainer = styled.div`
  max-width: 327px;
`;

const CalloutContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.infoBackground};
  padding: ${SPACER.medium};
  border-radius: 8px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div<{
  textColor: string;
}>`
  color: ${({ textColor }) => textColor};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
`;

const Icon = styled.div<{
  iconColor: string;
}>`
  margin-left: ${SPACER.small};

  svg {
    fill: ${({ iconColor }) => iconColor};

    path {
      fill: ${({ iconColor }) => iconColor};
    }
  }
`;

export default {
  CalloutContainer,
  Icon,
  ParentContainer,
  Text,
};
