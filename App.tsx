import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { pushMainRoute } from './src/navigation/NavigationRoute';

const App = () => {
    useEffect(()=>{
        //TODO : change route if its not the first access
        pushMainRoute();
    },[])

    return (
        <View></View>
    );
};

export default App;

