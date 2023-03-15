import * as SQLite from "expo-sqlite";
import { FortuneTypes } from "../../typings/interface";

function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();
db.transaction((tx) => {
  tx.executeSql(
    "create table if not exists items (id integer primary key not null, date int, text text);"
  );
});

export const addFortune = async (data: FortuneTypes[], dispatch: any) => {
  const { text, date } = data[data.length - 1];
  dispatch({
    type: "LOADING",
  });
  try {
    dispatch({
      type: "SET_FORTUNE",
      payload: data,
    });
    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (date, text) values (?, ?)", [
          date,
          text,
        ]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      (error) => {
        console.log("SQL Error", error);
      },
      () => {
        console.log("Completed");
      }
    );
  } catch (error: any) {
    dispatch({
      type: "ERROR",
      payload: error?.message || "Something went wrong",
    });
  }
};

export const getFortune = async (dispatch: any) => {
  dispatch({
    type: "LOADING",
  });
  db.transaction((tx) => {
    tx.executeSql(`select * from items`, [], (_, { rows: { _array } }) =>
      dispatch({
        type: "SET_FORTUNE",
        payload: _array,
      })
    );
  });
};
