import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed})=> pressed && styles.pressedItem}
            > 
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    ) 
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        // borderCurve: 'circular',
        margin: 8,

        borderRadius: 6,
        borderColor: 'black',
        backgroundColor: '#5e0acc',
        //alignItems: 'center'
      },
      
      pressedItem:{
        opacity: 0.5
      },
    
      goalText:{
        //we dont have style inheritance to child elements in react native.
        color: 'white',
        padding: 8,
      },
})