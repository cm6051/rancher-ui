import { getProjectId, getClusterId, bulkAdd } from 'ui/utils/navigation-tree';
import { get } from '@ember/object';

const rootNav = [
  // Project
  {
    scope:          'project',
    id:             'project-apps',
    localizedLabel: 'nav.apps.tab',
    route:          'apps-tab',
    ctx:            [getProjectId],
    resource:       ['app'],
    resourceScope:  'project',
  },
//  {
//    scope: 'global',
//    id: 'global-advanced',
//    localizedLabel: 'nav.admin.settings.advanced',
//    route: 'global-admin.settings.advanced',
//    disabled: true,
//  },
]

export function initialize(/* appInstance*/) {
  bulkAdd(rootNav);
}

export default {
  name:       'nav',
  initialize,
  after:      'store',
};
