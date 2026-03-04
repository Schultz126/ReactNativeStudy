import { View, Platform, Alert } from 'react-native';
import styles from './styles/globalStyles';
import AddGoalButton from './components/AddGoalButton/AddGoalButton';
import GoalInput from './components/GoalInput/GoalInput';
import ListElement from './components/ListElement/ListElement';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState(null);
  const [goalList, setGoalList] = useState([]);
  function textInputHandler(e) {
      setGoal(e);
  }

  function addGoalHandler(e) {
    if(!goal) return;

    const newGoal = {
      value: goal,
      id: Math.random().toString(36) + Date.now().toString(36)
    };

    setGoalList((e) => [...e, newGoal])
    setGoal('')
  };

  function showAlert(message) {
          if (Platform.OS === 'web') {
              window.alert(message);
          } else {
              Alert.alert(message);
          }
      }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <GoalInput textInputHandler={textInputHandler} goal={goal}/>
        <AddGoalButton text={goal} handleButtonEvent={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {goalList.map((goal) => <ListElement key={goal.id} value={goal.value} message={showAlert}/>)}
      </View>
    </View>
  );
}
