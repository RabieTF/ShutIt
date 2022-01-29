import { db } from "../base";
import { ref, set } from "firebase/database";
import { StyleSheet, Button, View } from "react-native";


export default HomeScreen = (navigation) => {

    const handleLogOut = () => {
        const logOutRef = ref(db, '/lockdown');
        set(logOutRef, true);
    };

    const handleRestart = () => {
        const restartRef = ref(db, '/restart');
        set(restartRef, true);
    };

    const handleShutdown = () => {
        const shutDownRef = ref(db, '/shutdown');
        set(shutDownRef, true);
    };

    return(
        <View style={styles.container}>
            <Button
                onPress={handleShutdown}
                title="Shutdown"
                color="#841584"
                style={styles.button}
            />
            <Button
                onPress={handleLogOut}
                title="Log out"
                color="#841584"
                style={styles.button}
            />
            <Button
                onPress={handleRestart}
                title="Restart"
                color="#841584"
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        margin: 12,
        padding: 10
    },
    button: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
