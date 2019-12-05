import { AppColors } from '@theme';
import { LanguageConfig } from '@config';

export const TaskPriorityType = {
  LOW: 'PRIORITY_LOW',
  MEDIUM: 'PRIORITY_MEDIUM',
  HIGH: 'PRIORITY_HIGH'
};

export const TaskPriorityPreference = {
  PRIORITY_HIGH: {
    name: LanguageConfig.translate('task-priority-high'),
    color: AppColors.red
  },
  PRIORITY_MEDIUM: {
    name: LanguageConfig.translate('task-priority-medium'),
    color: AppColors.yellow
  },
  PRIORITY_LOW: {
    name: LanguageConfig.translate('task-priority-low'),
    color: AppColors.green
  },
  getName: type => (TaskPriorityPreference[type] ? TaskPriorityPreference[type].name : ''),
  getColor: type => (TaskPriorityPreference[type] ? TaskPriorityPreference[type].color : undefined),
  getNextPriority: type => {
    switch (type) {
      case TaskPriorityType.LOW:
        return TaskPriorityType.MEDIUM;
      case TaskPriorityType.MEDIUM:
        return TaskPriorityType.HIGH;
      case TaskPriorityType.HIGH:
        return TaskPriorityType.LOW;
    }
  }
};
