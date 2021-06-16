import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import { color } from '../../../theme/color';

const PokedexEntryEvolutionsTab = () => {
  return (
    <Timeline
      data={[
        {
          time: 'Level 1',
          title: 'Bulbasaur',
          description: '#001',
          icon: require('../../../../assets/images/pokemon/1.png'),
        },
        {
          time: 'Level 16',
          title: 'Ivysaur',
          description: '#002',
          icon: require('../../../../assets/images/pokemon/2.png'),
        },
        {
          time: 'Level 32',
          title: 'Venasaur',
          description: '#003',
          icon: require('../../../../assets/images/pokemon/3.png'),
        },
      ]}
      innerCircle="icon"
      listViewStyle={{ paddingTop: 40 }}
      rowContainerStyle={{ minHeight: 100 }}
      lineColor={color.palette.green}
      circleColor="transparent"
      eventDetailStyle={{ marginBottom: 75 }}
      timeStyle={{ marginRight: 50 }}
      iconStyle={{ width: 100, height: 100 }}
      titleStyle={{ marginLeft: 50 }}
      descriptionStyle={{ marginLeft: 50 }}
    />
  );
};

export default PokedexEntryEvolutionsTab;
