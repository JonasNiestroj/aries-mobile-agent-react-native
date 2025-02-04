import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'

import HeaderRightHome from '../components/buttons/HeaderRightHome'
import { useTheme } from '../contexts/theme'
import CommonDecline from '../screens/CommonDecline'
import CredentialOffer from '../screens/CredentialOffer'
import ProofRequest from '../screens/ProofRequest'
import ProofRequestAttributeDetails from '../screens/ProofRequestAttributeDetails'
import { NotificationStackParams, Screens } from '../types/navigators'

import { createDefaultStackOptions } from './defaultStackOptions'

const NotificationStack: React.FC = () => {
  const Stack = createStackNavigator<NotificationStackParams>()
  const { t } = useTranslation()
  const theme = useTheme()
  const defaultStackOptions = createDefaultStackOptions(theme)

  return (
    <Stack.Navigator screenOptions={{ ...defaultStackOptions }}>
      <Stack.Screen
        name={Screens.CredentialOffer}
        component={CredentialOffer}
        options={{ headerBackTitle: t('Global.Back') }}
      />
      <Stack.Screen
        name={Screens.ProofRequest}
        component={ProofRequest}
        options={{ headerBackTitle: t('Global.Back') }}
      />
      <Stack.Screen
        name={Screens.ProofRequestAttributeDetails}
        component={ProofRequestAttributeDetails}
        options={{ headerBackTitle: t('Global.Back') }}
      />
      <Stack.Screen
        name={Screens.CommonDecline}
        component={CommonDecline}
        options={() => ({
          title: 'Decline',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerShown: true,
          presentation: 'modal',
          headerLeft: () => null,
          headerRight: () => <HeaderRightHome />,
        })}
      />
    </Stack.Navigator>
  )
}

export default NotificationStack
