import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import FortuneCard from "../components/FortuneCard";
import { GLobalContext } from "../context";
import { getFortune } from "../context/actions/fortuneActions";
import { Typography, useColors } from "../Hoddy-ui";
import { CREATE_FORTUNE } from "../navigations/routes";
import { ScreenDefaultProps } from "../typings/interface";

const HomeScreen = ({ navigation }: ScreenDefaultProps) => {
  const { fortuneState, fortuneDispatch } = useContext(GLobalContext);
  const { top } = useSafeAreaInsets();
  const colors = useColors();

  useEffect(() => {
    getFortune(fortuneDispatch);
  }, []);

  const styles: any = ScaledSheet.create({
    root: {
      flex: 1,
      paddingTop: top + 20,
      paddingHorizontal: "15@ms",
      paddingBottom: "30@vs",
    },

    fab: {
      height: 60,
      width: 60,
      borderRadius: 50,
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: colors.dark.main,
      alignItems: "center",
      justifyContent: "center",
      shadowOpacity: 0.4,
      shadowOffset: {
        height: 5,
      },
      shadowRadius: 10,
      shadowColor: "#000",
      elevation: 6,
    },
    grid: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.root}>
          <Typography variant="h4" gutterBottom={20} fontWeight={700}>
            My Fortunes
          </Typography>
          <View style={styles.grid}>
            {fortuneState.data.map((cur, i) => (
              <FortuneCard key={i} {...cur} index={i} />
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate(CREATE_FORTUNE)}
      >
        <Ionicons name="add" color={colors.light.main} size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
