import { StatusBar, StyleSheet, Text, View } from 'react-native';
import RoutesAuth from './src/routes/routesAuth';


export default function App() {
  return  ( 
      <>
      <RoutesAuth/>
      <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent" 
      translucent/>
      </>
  )
}


