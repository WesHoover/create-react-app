import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import ImageArrow from 'utility/images/ImageArrow';
import '../../../../app.css';

storiesOf('ImageArrow', module)
  .addDecorator(withKnobs)
  .addDecorator(story=>
    <div style={{}}>
      { story() }
    </div>
  )
  .add('default', 
      withInfo( { text: 'Arrow icon' })(() => <ImageArrow/>))