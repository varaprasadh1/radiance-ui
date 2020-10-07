import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { COLORS, SPACER, BOX_SHADOWS } from '../../constants';
import { style as TYPOGRAPHY_STYLE } from '../typography';

type SegmentItemProps = {
  active: boolean;
  key: number;
  onClick: () => void;
  width: number;
};

type IndicatorProps = {
  width: number;
  transform: string;
};

export const SegmentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-radius: 80px;
  background-color: ${COLORS.purple10};
  padding: ${SPACER.xsmall};
  border: 4px solid ${COLORS.purple10};
`;

export const SegmentItem = styled.button<SegmentItemProps>`
  ${buttonReset};
  ${TYPOGRAPHY_STYLE.caption};
  color: ${COLORS.purple70};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  border-radius: 80px;
  background-color: ${COLORS.purple10};
  width: ${({ width }) => `${width}%`};
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focus};
  }
`;

export const Indicator = styled.div<IndicatorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  position: absolute;
  border-radius: 80px;
  width: ${({ width }) => `${width}%`};
  top: 0;
  left: 0;
  bottom: 0;
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  background-color: white;
  ${TYPOGRAPHY_STYLE.caption};
  color: ${COLORS.primary};
  font-weight: bold;
  transform: ${({ transform }) => transform};
`;