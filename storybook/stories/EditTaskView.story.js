import React, { useState, useCallback, useMemo } from 'react';
import { storiesOf } from '@storybook/react-native';

import EditTaskView from '@components/EditTaskView';

storiesOf('EditTaskView', module).add('Default', () => {
  const WrapperComponent = () => {
    const [_isShowing, _setIsShowing] = useState(true);
    const logData = useCallback(data => {
      console.log(data);
      _setIsShowing(preValue => !preValue);
    }, []);

    const _render = useMemo(() => {
      if (_isShowing) {
        return <EditTaskView onCallback={logData} onRemoveCallback={logData} onClose={logData} />;
      }
    }, [_isShowing, logData]);

    return <React.Fragment>{_render}</React.Fragment>;
  };

  return <WrapperComponent />;
});
