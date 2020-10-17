import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Orphanages from './pages/Orphanages'
import OrphanageDetails from './pages/OrphanageDetails'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={Orphanages.name} component={Orphanages} />
        <Screen name={OrphanageDetails.name} component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  )
}
