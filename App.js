import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);  
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=> [
      ...currentCourseGoals,
      {text:enteredGoalText, id: Math.random().toString()},
    ]
    );//every element in courseGoals array is an object
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals)=>{
      
      return currentCourseGoals.filter((goal)=>goal.id !== id);
    });
  }

  function startAddGoalHandler(){
    setModalIsVisable(true);
  }

  function endAddGoalHandler(){
    setModalIsVisable(false);
  }

//itemData is an object with our data and its metadata 
//item is property of itemData object, item holds actual data items,  

  //added flex property(because we want to give space to this container is an entire screen ) to outer container because by default it takes space as much as space it needs
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisable} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>

          <FlatList 
            data={courseGoals} 
            renderItem={(itemData)=>{
              return <GoalItem 
                        text={itemData.item.text}
                        id={itemData.item.id}
                        onDeleteItem = {deleteGoalHandler}
                      />;
          }} 
          keyExtractor={(item, index) =>{
            return item.id;
          }}
          alwaysBounceVertical={false}/>

        </View>
      </View>
    </>
  );
}

//StyleSheet is built-in object 
//styles is an object and inside this object container, dummyText are keys and their values are objects that contains style properties
const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
   // justifyContent: 'center',
    //alignItems: 'center'

  }
});

//margin:16 ...16 pixel
// return(
//   <>
//     <View style={styles.goalItem}>
//       <Text key={goal}>{goal}</Text>
//     </View> 
//   </>
// )
