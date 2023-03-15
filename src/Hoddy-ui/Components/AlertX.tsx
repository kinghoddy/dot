import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Typography from "./Typography";
import { ScaledSheet } from "react-native-size-matters";
import { useColors } from "../hooks";
import { AlertXProps } from "../types";

const AlertX: React.FC<AlertXProps> = ({
  type = "info",
  variant = "contained",
  title,
  gutterBottom = 0,
  body,
  style = {},
}) => {
  const colors = useColors();

  const styles: any = ScaledSheet.create({
    container: {
      padding: 20,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 8,
      alignItems: "center",
      flexDirection: "row",
      marginBottom: gutterBottom + "@ms",
      backgroundColor: colors[type].main + (variant === "contained" ? "" : "3"),
    },
    title: {
      color: variant === "contained" ? "#fff" : colors[type].main,
    },
    body: {
      color: variant === "contained" ? "#fff" : colors[type].main,
    },
  });
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={{ width: "80%" }}>
        <Typography style={styles.title} gutterBottom={3} fontWeight={700}>
          {title}
        </Typography>
        {body && (
          <Typography fontWeight={700} variant="body2" style={styles.body}>
            {body}
          </Typography>
        )}
      </View>
      <View style={{ marginLeft: "auto" }}>
        <MaterialIcons
          color={variant === "contained" ? "#fff" : colors[type].main}
          size={36}
          name={type === "success" ? "check" : type}
        />
      </View>
    </View>
  );
};

export default AlertX;
