import _ from 'lodash';
import React from 'react';
import Timeline from 'react-native-timeline-flatlist';
import { PokemonEvolutionObjectFull } from '../../../api/types';
import { getIdFromURL } from '../../../utils';

type PokedexEntryEvolutionsTabProps = {
  evolution: PokemonEvolutionObjectFull | undefined;
  color: string;
};

const PokedexEntryEvolutionsTab = ({ evolution, color }: PokedexEntryEvolutionsTabProps) => {
  const firstEvolution = evolution?.chain.evolvesTo[0];
  const secondEvolution = firstEvolution?.evolvesTo[0];
  const firstEvolutionId = firstEvolution ? getIdFromURL(firstEvolution.species.url) : 0;
  const secondEvolutionId = secondEvolution ? getIdFromURL(secondEvolution.species.url) : 0;

  return (
    <Timeline
      data={[
        {
          time: `Level ${firstEvolution?.evolutionDetails[0].minLevel}`,
          title: _.capitalize(firstEvolution?.species.name),
          description: '#002',
          icon: firstEvolution?.species.url
            ? require(`../../../../assets/images/pokemon/${firstEvolutionId}.png`)
            : '',
        },
        {
          time: `Level ${secondEvolution?.evolutionDetails[0].minLevel}`,
          title: _.capitalize(secondEvolution?.species.name),
          description: '#003',
          icon: secondEvolution?.species.url
            ? require(`../../../../assets/images/pokemon/${secondEvolutionId}.png`)
            : '',
        },
      ]}
      innerCircle="icon"
      listViewStyle={{ paddingTop: 40 }}
      rowContainerStyle={{ minHeight: 100 }}
      lineColor={color}
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
