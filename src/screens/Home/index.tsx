import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant';
import { useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Home() {
  const [participants, setPariticpants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Esse nome ja existe')
    }
    setPariticpants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name} ?`, [
      {
        text: 'sim',
        onPress: () => setPariticpants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'não',
        style: 'cancel'
      }
    ])
  }

  const currentDate = new Date();
  const NewDate = format(
    currentDate,
    "EEEE',' dd 'de' LLLL Y", {
    locale: ptBR,
  }
  );
  const formattedDate = NewDate[0].toUpperCase() + NewDate.substr(1)
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.dateOfEvent}>{formattedDate}</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor='#6b6b6b'
            onChangeText={setParticipantName}
            value={participantName}
          />
          <TouchableOpacity style={styles.button} onPress={(e) => handleParticipantAdd()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguem chegou ao evento.
            </Text>
          )}
          renderItem={({ item }) => (
            <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
          )}
        />

      </View>
    </>
  )
}