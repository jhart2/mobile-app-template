import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/core';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LayoutsNavigator } from './layouts.navigator';
import { ComponentsNavigator } from './components.navigator';
import { ThemesNavigator } from './themes.navigator';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import { HomeDrawer } from '../scenes/home/home-drawer.component';
import { LibrariesScreen } from '../scenes/libraries/libraries.component';
import { SignIn3Screen } from '../scenes/auth/sign-in-3.component';
import { Trainings1Screen } from '../scenes/dashboards/trainings-1.component';
import { LocationsScreen } from '../scenes/locations/locations.component';
import { PackagesScreen } from '../scenes/packages/packages.component';
import { PlantBatchesScreen } from '../scenes/plant_batches/plant_batches.component';
import { PlantGroupsScreen } from '../scenes/plant_groups/plant_groups.component';
import { PlantsScreen } from '../scenes/plants/plants.component';
import { ProductsScreen } from '../scenes/products/products.component';
import { TagsScreen } from '../scenes/tags/tags.component';
import { StrainsScreen } from '../scenes/strains/strains.component';
import { HarvestBatchesScreen } from '../scenes/harvest_batches/harvest_batches.component';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Components' : 'Layouts';

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home', 'Layouts', 'Components', 'Themes'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName={initialTabRoute}
    tabBar={props => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name='Layouts' component={LayoutsNavigator}/>
    <BottomTab.Screen name='Components' component={ComponentsNavigator}/>
    <BottomTab.Screen name='Themes' component={ThemesNavigator}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    initialRouteName="Login"
    drawerContent={props => <HomeDrawer {...props}/>}>
    <Drawer.Screen name='Dashboard' component={Trainings1Screen}/>
    <Drawer.Screen name='Login' component={SignIn3Screen}/>
    <Drawer.Screen name='Home' component={HomeTabsNavigator}/>
    <Drawer.Screen name='Strains' component={StrainsScreen}/>
    <Drawer.Screen name='Locations' component={LocationsScreen}/>
    <Drawer.Screen name='Products' component={ProductsScreen}/>
    <Drawer.Screen name='Tags' component={TagsScreen}/>
    <Drawer.Screen name='Plant Batches' component={PlantBatchesScreen}/>
    <Drawer.Screen name='Plants' component={PlantsScreen}/>
    <Drawer.Screen name='Plant Groups' component={PlantGroupsScreen}/>
    <Drawer.Screen name='Harvest Batches' component={HarvestBatchesScreen}/>
    <Drawer.Screen name='Packages' component={PackagesScreen}/>
  </Drawer.Navigator>
);
