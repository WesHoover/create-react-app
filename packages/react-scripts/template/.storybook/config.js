import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import Container from './Container';

//withInfo toogles button(true is without button, flase is with a blue button)
setDefaults({
  inline: true, 
});
addDecorator(story => <Container story={story} />);
function loadStories() {
  const req = require.context('../src/components', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);