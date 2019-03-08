import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import {
  COLORS,
  MEDIA_QUERIES,
  BOX_SHADOWS,
  SPACING,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

const fadeInDesktop = keyframes`
  from { opacity: 0; transform: translate3d(24px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

const fadeInMobile = keyframes`
  from { opacity: 0; transform: translate3d(0, -24px, 0);  }
  to { opacity: 1; transform: translate3d(0, 0px, 0); }
`;

const successAlertStyles = css`
  background-color: ${COLORS.statusGreenBackground};
  border-color: ${COLORS.statusGreenBorder};
  color: ${COLORS.statusGreen};
  fill: ${COLORS.statusGreen};
`;

const errorAlertStyles = css`
  background-color: ${COLORS.statusRedBackground};
  border-color: ${COLORS.statusRedBorder};
  color: ${COLORS.statusRed};
  fill: ${COLORS.statusRed};
`;

const defaultAlertStyles = css`
  background-color: ${COLORS.statusGreyBackground};
  border-color: ${COLORS.statusGreyBorder};
  color: ${COLORS.statusGrey};
  fill: ${COLORS.statusGrey};
`;

export const AlertContainer = styled.div`
  align-items: flex-start;
  animation: ${fadeInMobile} ${ANIMATION.defaultTiming} 1;
  border-width: 1px;
  border-style: solid;
  box-shadow: ${BOX_SHADOWS.message};
  cursor: pointer;
  display: flex;
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  justify-content: space-around;
  margin: 0 auto ${SPACING.xsmall};
  opacity: ${props => (props.exiting ? '0' : '1')};
  padding: ${SPACING.xsmall} 0px;
  position: relative;
  text-align: left;
  transform: ${props =>
    props.exiting ? 'translate3d(0, -24px, 0)' : 'translate3d(0, 0, 0)'};
  transition: ${ANIMATION.defaultTiming};
  width: 327px;

  ${(props => {
    switch (props.alertType) {
      case 'danger':
        return errorAlertStyles;
      case 'success':
        return successAlertStyles;
      default:
        return defaultAlertStyles;
    }
  })}

  ${MEDIA_QUERIES.lgUp} {
    animation: ${fadeInDesktop} ${ANIMATION.defaultTiming} 1;
    font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
    margin-bottom: ${SPACING.small};
    padding: ${SPACING.xsmall} 0px;
    transform: ${props =>
    props.exiting ? 'translate3d(24px, 0, 0)' : 'translate3d(0, 0, 0)'};
  }
`;

export const AlertsContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  top: ${SPACING.small};
  z-index: 99999;

  ${MEDIA_QUERIES.mdUp} {
    left: auto;
    right: ${SPACING.small};
    top: ${SPACING.small};
  }
`;

export const AlertContentContainer = styled.div`
  display: flex;
  padding: ${SPACING.xxsmall} ${SPACING.base};
  width: 100%;
`;

export const alertIconStyles = css`
  margin: 2.5px ${SPACING.base} 0px 0px;
  min-height: ${SPACING.small};
  min-width: ${SPACING.small};
`;
