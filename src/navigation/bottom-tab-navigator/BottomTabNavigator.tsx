import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './bottom-tab-navigator-styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabScreens} from './constants';
// import AppIcon from '../../components/app-icon/AppIcon';
// import colors from '../../theme/colors';
// import ESText from '../../components/text/ESText';
// import {TEXT_TYPE} from '../../components/constants';
import {colors} from '../../theme';
import CHAppIcon from '../../components/app-icon/CHAppIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const TabButton = (props: any) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;

    const {icon, label, type} = item;

    const iconStyle = focused
      ? {color: colors.primary}
      : {color: colors.palette.black60};

    const tabStyle = focused
      ? {backgroundColor: colors.palette.white}
      : {backgroundColor: colors.palette.lavendar};

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.tabContainer, tabStyle]}>
        <CHAppIcon
          name={icon}
          type={type}
          size={23}
          color={iconStyle.color}
          iconPress={onPress}
        />
        <Text style={{color: colors.palette.black}}> {label}</Text>
      </TouchableOpacity>
    );
  };

  /**
   * will iterate screens array
   * @returns all the navigation screens
   */
  const renderScreens = () => {
    return BottomTabScreens.map((item, index) => {
      return (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            // unmountOnBlur: item.isRefresh,
            headerShown: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
            tabBarActiveTintColor: 'blue',
          }}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* <Tab.Navigator screenOptions={navigatorStyle}> */}
      <Tab.Navigator>{renderScreens()}</Tab.Navigator>
      {/* <SafeAreaView style={styles.footerColor} /> */}
    </View>
  );
};

export default BottomTabNavigator;
