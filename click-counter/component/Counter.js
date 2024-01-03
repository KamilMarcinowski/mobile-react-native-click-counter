import { useState } from "react";
import { 
    Text,
    StyleSheet,
    Pressable
} 
from "react-native";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Text style={styles.header}>You clicked {count} times</Text>
            <Pressable
                onPress={() => {setCount(count + 1)}} 
                style={styles.incraseButton}
            >
                <Text style={{color: "white", fontSize: 25}}>incrase</Text>
            </Pressable>
            <Pressable
                onPress={() => {setCount(count - 1)}} 
                style={styles.decraseButton}
            >
                <Text style={{color: "white", fontSize: 25}}>decrase</Text>
            </Pressable>
            <Pressable
                onPress={() => setCount(0)} 
                style={styles.resetButton} 
            >
                <Text style={{color: "white", fontSize: 25}}>Reset</Text>
            </Pressable>
        </>
    )
}
const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        position: "absolute",
        top: 150
    },
    incraseButton: {
        width: 200,
        height: 60,
        borderRadius: 25,
        backgroundColor: "#7e32db",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        position: "absolute",
        bottom: 260
    },

    decraseButton: {
        width: 200,
        height: 60,
        borderRadius: 25,
        backgroundColor: "#7e32db",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        position: "absolute",
        bottom: 180
    },
    
    resetButton: {
        width: 200,
        height: 60,
        borderRadius: 25,
        backgroundColor: "#7e32db",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        position: "absolute",
        bottom: 100
    }
});

export default Counter;