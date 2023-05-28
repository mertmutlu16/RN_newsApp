import React from 'react';
import { SafeAreaView , Text,StyleSheet ,FlatList,ScrollView,Image} from 'react-native';
import newsData from './newsData.json';
import NewsCard from './components/NewsCard';
import BannerCard from './components/BannerCards/BannerCard';

const App=()=> {
  const renderNews =({item})=> <NewsCard   news ={item} />
  const renderBannerNews= ()=> <BannerCard />

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NEWS</Text>
        <FlatList
          ListHeaderComponent={renderBannerNews}       
          data={newsData}
          keyExtractor={(item)=>item.u_id.toString()}
          renderItem={renderNews }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'#eceff1',
  },
  title:{
    fontSize:40,
    color:'black',
    fontWeight:'bold',
  },
})


export default App;