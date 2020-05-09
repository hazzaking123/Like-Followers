import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StatusBar, Platform, AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import styles from './styles/LoginscreenStyles'
import { Icons } from "../Utils/IconManager";
import Preloader from '../Components/Preloader';
import { WebView } from 'react-native-webview';
import { Services } from '../Configurations/Api/Connections';


const WWW_INJECTED_JAVASCRIPT =
  `setTimeout(() =>{window.ReactNativeWebView.postMessage(
    document.getElementById("__NEXT_DATA__").innerHTML  
   )},5000)`;

const VM_INJECTED_JAVASCRIPT =
  `setTimeout(() =>{window.ReactNativeWebView.postMessage(
    JSON.stringify(__INIT_PROPS__)  
 )},5000)`;


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      TiktokUrl: "",
      borderWidth: 0,
      type: "vm",
      fetchInfo: false
    };
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (

      <View style={styles.MAINVIW}>

        <StatusBar backgroundColor="#FA647F" />

        <Preloader isLoader={this.state.visible} />

        <Image style={styles.VIW1} source={require('../Icons/LoginImage.jpg')} />

        <View style={styles.VIW2} />

        <View style={{ height: "7%" }} >
          {
            this.state.fetchInfo ?
              <WebView
                source={{ uri: this.state.TiktokUrl }}
                javaScriptEnabled={true}
                allowUniversalAccessFromFileURLs={true}
                allowFileAccess={true}
                injectedJavaScript={this.state.type == "vm" ? VM_INJECTED_JAVASCRIPT : WWW_INJECTED_JAVASCRIPT}
                mixedContentMode={'always'}
                onMessage={event => this.state.type == "vm" ? this.VM_getData(event.nativeEvent.data) : this.WWW_getData(event.nativeEvent.data)}
                onError={() => this.setState({ visible: false })}
                onHttpError={() => this.setState({ visible: false })}
                style={{ height: 0 }}
              />
              : <></>
          }

        </View>

        <Image source={Icons.AppIcon} style={styles.IMG1} resizeMode="contain" />

        <View style={styles.VIW3}>
          <View style={styles.VIW4}>
            <Text style={styles.TXT2}>Free </Text>
            <Text style={styles.TXT1}>Like & Followers</Text>
          </View>
          <View style={styles.VIW5}>
            <TextInput ref={tl => this.tiktok = tl} onChangeText={(URL) => this.fillBox(URL)} style={[styles.TXTINPUT, { borderWidth: this.state.borderWidth, borderColor: "red" }]} placeholder="Enter Tiktok Profile User Link" />
          </View>
          <View style={styles.VIW6}>
            <TouchableOpacity style={styles.SRCH} onPress={() => this.GetOfficialDetails()}>
              <Text style={styles.TXT3}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    );
  }

  fillBox(URL) {
    this.setState({ TiktokUrl: URL })
    let checkURl = /^(?!\s*$).+/
    if (checkURl.test(URL)) {
      this.setState({ borderWidth: 0 })
    }
    else {
      this.setState({ borderWidth: 1 })
    }
  }


  GetOfficialDetails() {
    let checkURl = /^(?!\s*$).+/
    let url = this.state.TiktokUrl
    if (checkURl.test(url.trim())) {
      if (url.match(/www.tiktok.com/g)) {
        this.setState({ type: "www", fetchInfo: true, visible: true })
      }
      else if (url.match(/vm.tiktok.com/g)) {
        this.setState({ type: "vm", fetchInfo: true, visible: true })
      }
      else {
        alert("invalid Url !!")
      }
    }
    else {
      this.setState({ borderWidth: 1 })
    }

  }


  WWW_getData = (data) => {
    let DATA = JSON.parse(data)
    let FinalData = DATA.props.pageProps.userData
    this.CheckLogin(FinalData)
  }

  VM_getData = (data) => {

    let obj = JSON.parse(data)
    var result = Object.keys(obj).map(function (key) {
      return [Number(key), obj[key]];
    });

    let FinalData = result[0][1].userData

    this.CheckLogin(FinalData)
  }

  CheckLogin(data) {

    let FinalData=data

    let param = {
      user_id: FinalData.userId,
      username: FinalData.nickName,
      profile: FinalData.coversMedium[0],
      fullname: FinalData.uniqueId,
      user_link: this.state.TiktokUrl,
      account_type: FinalData.isSecret ? "public" : "private",
      device: Platform.OS === "android" ? "android" : "ios"
    }


    Services.login(param).then(async (res) => {
      if (res.user.success == "true") {
        FinalData["Coins"] = res.user
        await AsyncStorage.setItem("UserNaData", JSON.stringify(FinalData))
        this.setState({ visible: false, fetchInfo: false })
        this.props.navigation.navigate("Home")
      }
      else {
        this.setState({ visible: false, fetchInfo: false })
        alert("Error!")
      }
    })
  }

  
}



