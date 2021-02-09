import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Icon,
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import { 
  BookIcon, 
  GithubIcon, 
  ProductsIcon, 
  TagsIcon, 
  PlantGroupsIcon, 
  HarvestBatchesIcon,
  PackagesIcon,
  PlantBatchesIcon, 
  ColorPaletteIcon, 
  GridIcon, 
  LocationsIcon,
  StrainsIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';


const DATA: MenuItemType[] = [
  { title: 'Dashboard', icon: GridIcon, },
  { title: 'Strains', icon: StrainsIcon },
  { title: 'Locations', icon: LocationsIcon },
  { title: 'Products', icon: ProductsIcon },
  { title: 'Tags', icon: TagsIcon },
  { title: 'Plant Batches', icon: PlantBatchesIcon },
  { title: 'Plants', icon: ColorPaletteIcon },
  { title: 'Plant Groups', icon: PlantGroupsIcon },
  { title: 'Harvest Batches', icon: HarvestBatchesIcon },
  { title: 'Packages', icon: PackagesIcon },
];

const version: string = AppInfoService.getVersion();

export const HomeDrawer = ({ navigation }): DrawerElement => {

  const onItemSelect = (index: number): void => {
    let page = DATA[index].title
    console.log(page)
    navigation.navigate(page)
  };

  const StarIcon = (props) => (
    <Icon {...props} name='menu-outline'/>
  );

  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Image
          style={styles.logo}
          source={require('../../../images/logo.png')}
        />
      </View>
      <Button style={styles.buttonA} accessoryLeft={StarIcon}>
        Javon Hart
      </Button>
      <Button style={styles.buttonB} accessoryRight={StarIcon}>
        OmniCann
      </Button>      
    </Layout>
  );


  return (
    <SafeAreaLayout
      style={styles.drawer}
      insets='top'>
      <Drawer
        appearance="noDivider"
        style={styles.drawer}
        header={renderHeader}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'stretch',
    maxWidth: '75%',
    height: 50,

  },
  buttonA: {
    marginTop: 20,
    backgroundColor: '#3182ce',
    borderColor: '#3182ce',
  },
  buttonB: {
    marginTop: 20,
    backgroundColor: '#319795',
    borderColor: '#319795',
  },  
  footer: {
    color: '#FFFFFF',
    backgroundColor: '#2a4364',    
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#2a4364',    
  },
  header: {
    height: 220,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#2a4365',

  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
