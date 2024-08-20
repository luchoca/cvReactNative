// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Linking, Image } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.photoContainer}>
//         <Image source={require('./assets/fotocv.jpg')} style={styles.photo} />
//         <Text style={styles.heading}>LUCIANO CASTRO SAAD</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Contacto</Text>
//         <Text onPress={() => Linking.openURL('tel:+59898700322')} style={styles.text}>+598-98700322</Text>
//         <Text onPress={() => Linking.openURL('tel:+34692722524')} style={styles.text}>+34-6927225524</Text>
//         <Text onPress={() => Linking.openURL('mailto:lucianocastrosaad@gmail.com')} style={styles.text}>lucianocastrosaad@gmail.com</Text>
//         <Text onPress={() => Linking.openURL('https://github.com/luchoca')} style={styles.link}>GitHub</Text>
//         <Text onPress={() => Linking.openURL('https://linkedin.com/in/luchocastrosaad')} style={styles.link}>LinkedIn</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Perfil</Text>
//         <Text style={styles.text}>
//           Hola! Soy Luciano Castro y soy consultor de desarrollo en Sofka. Luego de un largo camino de aprendizaje logré mi objetivo de convertirme laboralmente en Programador. 
//           Siempre dispuesto a aprender lo que sea necesario para cubrir las necesidades del momento.
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Experiencia</Text>
//         <Text style={styles.text}>
//           - Junio 2022 - 2023: Trainee Sofka en Sofka Technologies
//           {'\n'}  Entrenamiento Full Stack de la empresa.
//           {'\n'}  Se desarrolló un aplicativo en Angular y Java para prueba final, simulando un sprint real.
//           {'\n'}
//           {'\n'}- Enero - Marzo 2023: Consultor desarrollo Sofka
//           {'\n'}  Se prestaron servicios como consultor de desarrollo, colaborando en la construcción de formularios en Angular para assesments de la compañía.
//           {'\n'}
//           {'\n'}- 2023 - Presente: Consultor desarrollo Sofka en DALE!
//           {'\n'}  Especialista en Banking - FinTech, usando Saas como Mambu y Frame Banking (PTS).
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Habilidades</Text>
//         <Text style={styles.text}>TypeScript, JavaScript, Springboot, Java, NestJs, Angular, MySQL, MongoDB, HTML, CSS, Git, Mambu, FrameBanking</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Educación</Text>
//         <Text style={styles.text}>
//           - 2021-2022: Curso Front end en Hack Academy
//           {'\n'}- 2022-2023: Training Full Stack en Sofka Technologies
//           {'\n'}- 2022-2023: Training Mambu - FrameBanking en Sofka Technologies
//         </Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheading}>Idiomas</Text>
//         <Text style={styles.text}>Español: Nativo</Text>
//         <Text style={styles.text}>Inglés: Intermedio (B1)</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#e6e6e6', // Color de fondo similar al documento
//   },
//   photoContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   photo: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 15,
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333333', // Color de texto oscuro
//   },
//   subheading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#4b4b4b', // Color de texto más claro
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#555555', // Color de texto general
//   },
//   link: {
//     fontSize: 16,
//     color: '#1e90ff',
//     marginBottom: 5,
//   },
//   section: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#ffffff', // Fondo de cada sección similar al documento
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
// });

// export default App;
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
