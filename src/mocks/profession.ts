import { ActivityField } from '../types/ActivityField';
import { Professions } from '../types/Profession';

export const activityField: ActivityField[] = [
  {
    key: 'medicine',
    title: 'Медицина'
  },
  {
    key: 'it',
    title: 'IT'
  },
  {
    key: 'electricity',
    title: 'Малоточка'
  },
  {
    key: 'marketing',
    title: 'Маркетинг'
  },
]

export const professions: Professions = {
  'electricity': [
    {
      key: 'engineer',
      title: 'Инженер'
    },
    {
      key: 'draftsman',
      title: 'Чертежник'
    }
  ],
  'it': [
    {
      key: 'devops',
      title: 'DevOps'
    },
    {
      key: 'key',
      title: ''
    }
  ],
  'marketing': [
    {
      key: 'targetologist',
      title: 'Таргетолог'
    },
    {
      key: 'marketingSpecialist',
      title: 'Маркетолог'
    },
    {
      key: 'contentManager',
      title: 'Контент менеджер'
    }
  ],
  'medicine': [
    {
      key: 'leadDoctor',
      title: 'Глав-врач'
    },
    {
      key: 'doctor',
      title: 'Врач'
    }
  ]
}