import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Typography } from "../Hoddy-ui";
import { FortuneTypes } from "../typings/interface";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { VIEW_FORTUNE } from "../navigations/routes";
const FortuneCard: FC<FortuneTypes & { index: number }> = ({
  date,
  text,
  index,
}) => {
  const navigation: any = useNavigation();
  let i = +index.toString()[index.toString().length - 1];
  i > 4 ? (i = i - 5) : i;

  const col = ["#4b7bec", "#a55eea", "#fd9644", "#fed330", "#26de81"];

  const styles = ScaledSheet.create({
    root: {
      width: i === 0 ? "100%" : "50%",
      padding: 3,
      alignSelf: "stretch",
    },
    card: {
      borderRadius: 20,
      height: i === 0 ? "140@vs" : "190@vs",
      backgroundColor: col[i],
      paddingHorizontal: "25@ms",
      paddingVertical: "25@ms",
    },
    date: {
      backgroundColor: "#fff3",
      padding: 10,
      marginTop: "auto",
      borderRadius: 10,
      alignSelf: "flex-start",
    },
  });
  return (
    <View style={[styles.root]}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(VIEW_FORTUNE, { color: col[i], date, text })
        }
      >
        <Typography
          fontWeight={700}
          variant="h6"
          gutterBottom={25}
          style={{ color: "#fff" }}
        >
          {text}
        </Typography>
        <View style={styles.date}>
          <Typography style={{ color: "#fff" }}>
            {format(date, "dd MMM yyyy")}
          </Typography>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default FortuneCard;
