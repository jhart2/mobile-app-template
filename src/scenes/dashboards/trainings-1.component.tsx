import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction, Avatar, Text } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MainMenuIcon } from '../../components/icons';
import { Logo } from '../../components/logo.component';
import ContentView from '../../layouts/dashboards/trainings-1';

export const Trainings1Screen = ({ navigation }): React.ReactElement => {

  const renderTitle = (): React.ReactElement => (
    <View style={styles.titleContainer}>
      <Image
        style={styles.logo}
        source={require('../../../images/logo.png')}
        alt="Logo"/>
        <Divider
        style={styles.divider}
        />
      <TopNavigationAction
        style={styles.icon}
        icon={MainMenuIcon}
        onPress={navigation.openDrawer}
    />
    </View>
  );
 
  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        leftControl={renderTitle()}
        style={styles.nav}
      />
      <ContentView/>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  divider: {
    flex: 4,
    backgroundColor: '#1a365d',
  },
  icon: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: "#1a365d",
    height: 90,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'stretch',
    maxWidth: '80%',
    height: 50,
    padding: 10,
    flex: 3,
  },
});
