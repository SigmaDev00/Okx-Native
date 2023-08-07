import { Button, StyleSheet, Text, View,TextInput, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.btn}>:::</Text>
          <View style={{display:'flex',flexDirection:"row",backgroundColor:'gray',padding:10,borderRadius:'50',alignItems:'baseline'}}>
            <Text style={styles.btn}>Button1  </Text>
            <Text style={styles.btn}>|</Text>
            <Text style={styles.btn}>  Button2</Text></View>
          <Text >☎</Text>
        </View>
        <ScrollView>
        <View style={{borderRadius:'100%'}}>
        <View style={{borderRadius:'50%',height:'1'}}>
          {/* s<TextInput style={{margin:'2%',backgroundColor:'gray',color:'white',padding:'2%'}} placeholder="Type here to translate!"></TextInput> */}
        </View>
        </View>

        <View style={{backgroundColor:'black',marginTop:'2%'}}>
          <Text style={{fontSize:'20',color:'white'}}>Est total value: </Text>
          <Text style={{fontWeight:'bold',fontSize:'40',color:'white'}}>$2000<Text style={{fontSize:'15',fontWeight:'normal'}}>USDT↓</Text></Text>

        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:'10%'}}>
          <View style={{display:'flex',backgroundColor:'gray',borderRadius:'50%',textAlign:'center',padding:'2%',flexGrow:'1',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:'25',color:'white',fontWeight:'bold'}}>    €  Deposit   </Text>
          </View>
          <View style={{display:'flex',backgroundColor:'gray',borderRadius:'50%',textAlign:'center',padding:'2%',flexGrow:'1',justifyContent:'center',alignItems:'center',marginLeft:'5%'}}>
          <Text style={{fontSize:'25',color:'white',fontWeight:'bold'}}>⇌  P2P Trading</Text>
          </View>
        </View>

        <View style={{height: 1, backgroundColor: 'gray',marginTop:'6%'}} />

        <View style={{padding:'4%'}}>
        <Text style={{color:'gray',fontWeight:'bold'}}>Copy Trading</Text>
        <Text style={{color:'white',fontWeight:'bold',fontSize:'20',paddingTop:'2%'}}>Automatically copy expert traders and earb upto 500% Pnl!</Text>
        <Text style={{color:'white',fontWeight:'bold',fontSize:'18',paddingTop:'5%'}}>Try  now -> </Text>

        </View>

        <View style={{height: 10, backgroundColor: 'gray',marginTop:'2%'}} />

        <View style={{margin:'3%'}}>
          <Text style={{color:'gray',fontSize:'20',fontWeight:'bold'}}>Favorites     Top     Hot     Gainers     New</Text>
          <Text style={{color:'gray',marginTop:'5%'}}>Name                          Listing Date        Change/Last Price</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>
          <Text style={{color:'white',marginTop:'5%',fontSize:'20'}}>Eth                     20/1/2023           1,800</Text>

          <View style={{height: 10, backgroundColor: 'gray',marginTop:'5%'}} />

          <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Announcements                                   ></Text>

        </View>


        <View style={{height: 1, backgroundColor: 'gray'}} />
        <View style={{padding:'3%'}}>


        <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Okex to list this token TWc/Usdt .</Text>
        <Text style={{color:'gray',marginLeft:'3%'}}>08/07/2023, 16:20</Text>

        <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Okex to list this token TWc/Usdt .</Text>
        <Text style={{color:'gray',marginLeft:'3%'}}>08/07/2023, 16:20</Text>

        <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Okex to list this token TWc/Usdt .</Text>
        <Text style={{color:'gray',marginLeft:'3%'}}>08/07/2023, 16:20</Text>

        <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Okex to list this token TWc/Usdt .</Text>
        <Text style={{color:'gray',marginLeft:'3%'}}>08/07/2023, 16:20</Text>

        <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Okex to list this token TWc/Usdt .</Text>
        <Text style={{color:'gray',marginLeft:'3%'}}>08/07/2023, 16:20</Text>

        <Text style={{color:'white',margin:'3%',fontSize:'22',fontWeight:'bold'}}>Okex to list this token TWc/Usdt .</Text>
        <Text style={{color:'gray',marginLeft:'3%'}}>08/07/2023, 16:20</Text>
        </View>
        
        </ScrollView>
        {/* <SearchBar/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  
  },
  navbar:{
    position:'fixed',
    marginTop:"12%",
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'White',
    
    color:'white',
    alignItems:'baseline',
    padding:10,
  },
  btn:{
    color:'white',
    fontWeight:'bold',
    backgroundColor:'gray'
    }
});


export default App;