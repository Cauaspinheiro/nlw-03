import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Orphanages from './pages/Orphanages'
import OrphanageDetails from './pages/OrphanageDetails'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'

import Header from './components/Header'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name={Orphanages.name} component={Orphanages} />
        <Screen
          name={OrphanageDetails.name}
          component={OrphanageDetails}
          options={{
            headerShown: true,

            header: () => (
              <Header title="Detalhes do Orfanato" showCancel={false} />
            ),
          }}
        />

        <Screen
          name={OrphanageData.name}
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Adicione os dados" />,
          }}
        />
        <Screen
          name={SelectMapPosition.name}
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
