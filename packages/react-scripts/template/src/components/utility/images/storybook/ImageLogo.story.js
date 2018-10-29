import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import ImageLogo from 'utility/images/ImageLogo';
import '../../../../app.css';

storiesOf('ImageLogo', module)
  .addDecorator(withKnobs)
  .addDecorator(story=>
    <div style={{}}>
      { story() }
    </div>
  )
  .add('default', 
      withInfo( { text: 'Dimensional Logo' }) 
      (
        () => <ImageLogo/>
      )
  )