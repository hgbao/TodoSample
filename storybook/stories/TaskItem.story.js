import React from 'react';
import { storiesOf } from '@storybook/react-native';
import moment from 'moment';

import TaskItem from '@components/TaskItem';

storiesOf('TaskItem', module)
  .add('No due date', () => {
    const logData = data => console.log(data);

    return <TaskItem onUpdate={logData} onToggle={logData} onPress={logData} />;
  })
  .add('With due date', () => {
    const logData = data => console.log(data);

    return <TaskItem dueDate={moment().unix()} onUpdate={logData} onToggle={logData} onPress={logData} />;
  });
