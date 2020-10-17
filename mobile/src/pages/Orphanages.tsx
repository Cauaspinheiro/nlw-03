import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather as Icon } from '@expo/vector-icons'

import MapIcon from '../assets/map_icon.png'
import { useNavigation } from '@react-navigation/native'

const Orphanages: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
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
        <Marker
          icon={MapIcon}
          coordinate={{
            latitude: -23.5189598,
            longitude: -46.8543534,
          }}
          calloutAnchor={{
            x: 2.8,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={() => navigate('OrphanageDetails')}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>AHUSUAHU Yoda</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <TouchableOpacity
          style={styles.footerButton}
          activeOpacity={0.6}
          onPress={() => {
            alert('oi')
          }}
        >
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
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
