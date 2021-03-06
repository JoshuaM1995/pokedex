import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../storybook/views';
import { color } from '../../theme';
import { NavigationCard } from './navigation-card';

storiesOf('NavigationCard', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <NavigationCard style={{ backgroundColor: color.error }} />
      </UseCase>
    </Story>
  ));
