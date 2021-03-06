import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {styles} from '../css/styles';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Input,
  Button,
} from '@ui-kitten/components';
import avatar from '../component/images/Ellipse.png';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

export const Login = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateLoginPass = () => {
    navigation.navigate('nextLogin');
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{flex: 1}}>
        <Layout style={{padding: 30}}>
          <Image source={avatar} style={styles.avatar} />
        </Layout>
        <Layout style={{flex: 1, padding: 30}}>
          <Text category="h1">Email</Text>
          <Text>
            Please enter your registered email to log in to application
          </Text>

          <Text style={{fontWeight: 'bold', marginTop: 20}}>Email</Text>
          <Input style={{marginTop: 10}} placeholder="e.g. zamhadi@gmail.com" />
          <Button onPress={navigateLoginPass} style={styles.buttonLogin}>
            Next
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};
