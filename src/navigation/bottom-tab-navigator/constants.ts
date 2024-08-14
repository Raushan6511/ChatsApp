import {APP_ICON_TYPES} from '../../components/app-icon/constants';

import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import Chats from '../../screens/chat/chats/Chats';
import Welcome from '../../screens/welcome/Welcome';
import {TAB_ROUTES} from '../../common/constants';
import Contacts from '../../screens/chat/contacts/Contacts';

const BottomTabScreens = [
  {
    index: 1,
    route: TAB_ROUTES.HOME,
    label: 'Home',
    icon: 'home',
    type: APP_ICON_TYPES.FONT_AWESOME,
    component: Home,
  },
  {
    index: 2,
    route: TAB_ROUTES.CONTACTS,
    label: 'Contacts',
    icon: 'contacts',
    type: APP_ICON_TYPES.MATERIAL_COMMUNITY,
    component: Contacts,
  },

  {
    index: 3,
    route: TAB_ROUTES.WELCOME,
    label: 'Welcome',
    icon: 'shopping-cart',
    type: APP_ICON_TYPES.MATERIAL_ICONS,
    component: Welcome,
  },

  {
    index: 4,
    route: TAB_ROUTES.PROFILE,
    label: 'Profile',
    icon: 'user-circle-o',
    type: APP_ICON_TYPES.FONT_AWESOME,
    component: Profile,
  },
];

export {BottomTabScreens};
