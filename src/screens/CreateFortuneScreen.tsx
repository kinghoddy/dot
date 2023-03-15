import React, { useContext, useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { GLobalContext } from "../context";
import { addFortune } from "../context/actions/fortuneActions";
import { Button, useColors } from "../Hoddy-ui";
import { HOME_SCREEN } from "../navigations/routes";
import { ScreenDefaultProps } from "../typings/interface";

const CreateFortuneScreen = ({ navigation }: ScreenDefaultProps) => {
  const { fortuneState, fortuneDispatch } = useContext(GLobalContext);
  const { top } = useSafeAreaInsets();
  const colors = useColors();
  const [text, setText] = useState("");

  const addFortuneHandler = async () => {
    if (text.length === 0) return;
    const f = [...fortuneState.data];
    f.push({
      date: Date.now(),
      text,
    });

    addFortune(f, fortuneDispatch);
    setText("");
    navigation.navigate(HOME_SCREEN);
  };
  const styles: any = ScaledSheet.create({
    root: {
      flex: 1,
    },
    input: {
      paddingHorizontal: "15@ms",
      paddingTop: top + 20,
      paddingBottom: "30@vs",
      color: colors.dark.main,
      minHeight: "500@vs",
      fontSize: 30,
    },

    btn: {
      marginLeft: "auto",
      marginRight: 30,
    },
  });
  return (
    <View style={styles.root}>
      <ScrollView keyboardDismissMode="on-drag">
        <TextInput
          style={styles.input}
          multiline
          value={text}
          onChangeText={setText}
          placeholder="Start writing.."
          placeholderTextColor={colors.textSecondary.main}
        />

        <Button
          onPress={addFortuneHandler}
          style={styles.btn}
          title="Done"
          size="small"
          loading={fortuneState.loading}
          color="dark"
        />
      </ScrollView>
    </View>
  );
};

export default CreateFortuneScreen;
