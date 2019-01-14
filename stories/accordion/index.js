import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import AccordionReadme from 'docs/accordion.md';
import { Accordion, Typography } from 'src/shared-components';
import { SPACING } from 'src/constants';

import DefaultAccordion from './defaultAccordion';

const stories = storiesOf('Accordion', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(AccordionReadme, () => (
    <React.Fragment>
      <div css="text-align: left;" >
        <DefaultAccordion />
        <Typography.Heading css={`padding: ${SPACING.base} 0 ${SPACING.small};`}>
          With Knobs
        </Typography.Heading>
        <div css="width: 400px;">
          <Accordion.Container>
            <Accordion
              title={
                <Accordion.Content>
                  <Accordion.Truncate>
                    {text('Title text', 'Title')}
                  </Accordion.Truncate>
                </Accordion.Content>
              }
              onClick={() => action('Accordion clicked')}
              isOpen={boolean('isOpen', false)}
              noBorder={boolean('noBorder', false)}
              disabled={boolean('disabled', false)}
            >
              <Accordion.Content>
                {text('Expanded text', 'Accordion expanded content')}
              </Accordion.Content>
            </Accordion>
          </Accordion.Container>
        </div>
      </div>
    </React.Fragment>
  ))
);