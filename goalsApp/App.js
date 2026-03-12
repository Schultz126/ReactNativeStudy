import { View, FlatList, Pressable } from 'react-native';
import styles from './styles/globalStyles';
import ListElement from './components/ListElement/ListElement';
import InputHeader from './components/InputHeader/InputHeader';
import { useState } from 'react';
import ModalVisibilityChanger from './components/ModalVisibilityChanger/ModalVisibilityChanger';

export default function App() {
  const [goal, setGoal] = useState(null);
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setVisible] = useState(false)
  function textInputHandler(e) {
      setGoal(e);
  }

  function addGoalHandler() {
    if(!goal) return;

    const newGoal = {
      value: goal,
      id: Math.random().toString(36) + Date.now().toString(36)
    };

    setGoalList((e) => [...e, newGoal])
    setGoal('')
  };

  function visibilityHandler () {
    setVisible(!modalIsVisible);
  }

  return (
    <View style={styles.container}>
      {modalIsVisible ? <InputHeader 
        textInputHandler={textInputHandler}
        goal={goal}
        addGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
        visibilityHandler={visibilityHandler}/> : 
        <ModalVisibilityChanger 
          visibilityHandler={visibilityHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList 
        data={goalList}
        renderItem={(itemData) => <ListElement 
          goalObj={itemData.item} 
          setGoalList={setGoalList}/>}
        />
      </View>
    </View>
  );
}
