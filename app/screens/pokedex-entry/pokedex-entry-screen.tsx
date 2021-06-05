import React from 'react';
import {
  NavigationProp, RouteProp, useNavigation, useRoute,
} from '@react-navigation/native';
import { Pressable, Image } from 'react-native';
import {
  Screen, Section, Text, TypeTag,
} from '../../components';
import { color } from '../../theme';
import { PrimaryParamList, RouteName } from '../../navigators';
import { padding } from '../../utils/react-native-helpers';
import { PokemonType } from '../../enum';

const PokemonHeaderSection = Section;
const PokemonInfoSection = Section;

export const PokedexEntryScreen = () => {
  const navigation = useNavigation<NavigationProp<PrimaryParamList>>();
  const { params: { pokemonId } } = useRoute<RouteProp<PrimaryParamList, RouteName.PokedexEntry>>();

  // Set the navigation header to match the color of the pokemon
  navigation.setOptions({
    headerStyle: {
      // TODO: Programmatically get the pokemon's color
      backgroundColor: color.palette.green,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  return (
    <Screen preset="scroll">
      <PokemonHeaderSection style={{
        backgroundColor: color.palette.green,
        height: 300,
        ...padding(20, 15, 80, 15),
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Text preset="h2" style={{ color: color.palette.white }}>Bulbasaur</Text>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {/* TODO: Navigate to type chart onPress */}
              <Pressable>
                <TypeTag type={PokemonType.Grass} />
              </Pressable>
              <Pressable>
                <TypeTag type={PokemonType.Poison} />
              </Pressable>
            </div>
          </div>

          <Text preset="h5" style={{ color: color.palette.white, fontWeight: 'bold', marginRight: 10 }}>
            #001
          </Text>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Image
            source={require('../../../assets/images/pokemon/1.png')}
            style={{
              height: 200,
              width: 200,
              position: 'absolute',
              bottom: '0px',
            }}
          />
        </div>
      </PokemonHeaderSection>

      <PokemonInfoSection style={{
        backgroundColor: color.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        minHeight: 30,
      }}
      >
        {/* <Text preset="header" style={{ position: 'absolute', marginTop: 50 }}>Some info here...</Text> */}
      </PokemonInfoSection>
    </Screen>
  );
};
