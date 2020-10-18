import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather as Icon } from '@expo/vector-icons'

import MapIcon from '../assets/map_icon.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import api from '../services/api'
import { IOrphanage } from '../entities/Orphanage'

const Orphanages: React.FC = () => {
  const { navigate } = useNavigation()
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([])

  useFocusEffect(() => {
    api
      .get<IOrphanage[]>('/orphanages')
      .then(({ data }) => setOrphanages(data))
      .catch((err) => alert(JSON.stringify(err)))
  })

  if (!orphanages) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <StatusBar style="dark" />
        <ActivityIndicator size={64} color="#2AB5D1" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor="#1a1a1a"
        hidden={Platform.OS === 'ios'}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.5189598,
          longitude: -46.8543534,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map((value) => (
          <Marker
            key={value.id}
            icon={MapIcon}
            coordinate={{
              latitude: value.latitude,
              longitude: value.longitude,
            }}
            calloutAnchor={{
              x: 2.8,
              y: 0.8,
            }}
          >
            <Callout
              tooltip
              onPress={() => navigate('OrphanageDetails', { id: value.id })}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{value.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encontrados
        </Text>

        <RectButton
          style={styles.footerButton}
          activeOpacity={0.6}
          onPress={() => navigate('SelectMapPosition')}
        >
          <Icon name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  )
}

export default Orphanages

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,

    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 0.3,
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
  },
  footerButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
})
