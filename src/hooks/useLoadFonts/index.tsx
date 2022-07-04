import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

const useLoadFonts = () => {
  const [loaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  return loaded;
};

export default useLoadFonts;
