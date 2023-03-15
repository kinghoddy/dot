import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useContext } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ms, ScaledSheet, vs } from "react-native-size-matters";
import FortuneCard from "../components/FortuneCard";
import { GLobalContext } from "../context";
import { Typography, useColors } from "../Hoddy-ui";
import { CREATE_FORTUNE } from "../navigations/routes";
import { ScreenDefaultProps } from "../typings/interface";

const ViewFortune = ({ navigation, route }: ScreenDefaultProps) => {
  const { top } = useSafeAreaInsets();
  const colors = useColors();
  const { color, date, text }: any = route.params || {};

  const styles: any = ScaledSheet.create({
    root: {
      flex: 1,
      paddingTop: top + 20,
      backgroundColor: color || colors.white[2],
      paddingHorizontal: "30@ms",
      paddingBottom: "30@vs",
    },
    date: {
      backgroundColor: "#fff3",
      padding: 10,
      marginTop: "40@vs",
      borderRadius: 10,
      alignSelf: "center",
    },
  });
  return (
    <View style={styles.root}>
      {text ? (
        <ScrollView>
          <View style={{ minHeight: vs(400), justifyContent: "center" }}>
            <Typography
              style={{
                color: "#fff",

                lineHeight: ms(30),
              }}
              align="center"
              fontWeight={700}
              variant="h5"
            >
              {text}
            </Typography>
            <View style={styles.date}>
              <Typography style={{ color: "#fff" }}>
                {format(date, "dd MMM yyyy")}
              </Typography>
            </View>
          </View>
        </ScrollView>
      ) : (
        <Typography
          variant="h6"
          align="center"
          gutterBottom={20}
          color="textSecondary"
          fontWeight={700}
        >
          Click on a fortune to view fortune
        </Typography>
      )}
    </View>
  );
};

export default ViewFortune;
