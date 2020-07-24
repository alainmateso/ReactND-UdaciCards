import { AsyncStorage } from 'react-native'

const UDACICARDS_KEY = 'udaciCard'

export const getDecks = () => {
  return AsyncStorage.getItem(UDACICARDS_KEY).then(JSON.parse);
};

export const saveDeckTitle = async (title) => {
  const key = title.replace(' ', '');
  return AsyncStorage.mergeItem(UDACICARDS_KEY, JSON.stringify({
    [key]: {
      title,
      questions: []
    }
  })).then(async () => {
    const res = await AsyncStorage.getItem(UDACICARDS_KEY).then(JSON.parse);
    return {
      [key]: res[key]
    };
  });
}
