import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, TouchableHighlight, AsyncStorage, BackHandler } from 'react-native';
import styles from './styles/HomeScreenStyles'
import { Icons } from '../Utils/IconManager';
import SplashScreen from 'react-native-splash-screen'
import { Services } from '../Configurations/Api/Connections';
import { custom_number_format } from '../Utils/functions'

let AllData = null
let OtherData = null

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  async UNSAFE_componentWillMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress',()=>{
      return true
    })
    await AsyncStorage.getItem("UserNaData", (err, res) => {
      AllData = JSON.parse(res)
    })
    Services.setting({ user_id: AllData.userId }).then((res) => {
      OtherData = res.setting
      this.setState({})
    })

  }

  render() {

    return (
      AllData != null && OtherData != null ?
        <View style={styles.MAINVIW}>

          <StatusBar backgroundColor="#FE2C55" />

          <View style={styles.VIW1}>

            <View style={styles.VIW13}>

              <View style={styles.VIW7}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image source={Icons.menu} style={styles.IMG2} />
                </TouchableOpacity>
              </View>

              <View style={styles.VIW8}>
                <View style={styles.VIW9}>
                  <View style={styles.VIW10}>
                    <Image source={Icons.premium_quality} style={styles.IMG3} resizeMode="contain" />
                  </View>
                  <View style={styles.VIW11}>
                    <Text style={styles.TXT4}>{OtherData.coin}</Text>
                    {/* <Text style={styles.TXT4}>{1000}</Text> */}
                  </View>
                </View>
              </View>

            </View>
          </View>

          <View style={styles.VIW2}>
            <View style={styles.VIW4}>
              <Image source={{ uri: AllData.coversMedium[0] }} style={styles.IMG1} />
            </View>
            <View style={styles.VIW5}>
              <Text style={styles.TXT1}>{AllData.nickName}</Text>
              {/* <Text style={styles.TXT1}>{"Nirav Bhesaniya"}</Text> */}

            </View>
            <View style={styles.VIW6}>
              <View style={styles.CMNVIW}>
                <Text style={styles.TXT2}>{custom_number_format(AllData.following)}</Text>
                <Text style={styles.TXT3}>Following</Text>
              </View>
              <View style={styles.CMNVIW}>
                <Text style={styles.TXT2}>{custom_number_format(AllData.fans)}</Text>
                <Text style={styles.TXT3}>Followers</Text>
              </View>
              <View style={styles.CMNVIW}>
                <Text style={styles.TXT2}>{custom_number_format(parseInt(AllData.heart))}</Text>
                <Text style={styles.TXT3}>Likes</Text>
              </View>
            </View>
          </View>

          <View style={styles.VIW3}>
            <View style={styles.VIW12}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Follower")}>
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Follower", { data: OtherData.follower_coin })}> */}
                <Image style={styles.IMG4} source={Icons.AddFL} />
                <Text style={styles.TXT5}>Follower</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.VIW12}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Likes")}>
                <Image style={styles.IMG4} source={Icons.Like} />
                <Text style={styles.TXT5}>Like</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.VIW12}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Comments")}>
                <Image style={styles.IMG4} source={Icons.comment} />
                <Text style={styles.TXT5}>Comment</Text>
              </TouchableOpacity>

            </View>
          </View>


          <View style={styles.VIW3}>
            <View style={styles.VIW12}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Share")}>
                <Image style={styles.IMG4} source={Icons.shareHome} />
                <Text style={styles.TXT5}>Share</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.VIW12}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Follower")}>
                <Image style={styles.IMG4} source={Icons.Earn} />
                <Text style={styles.TXT5}>Earn</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.VIW12}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Follower")}>
                <Image style={styles.IMG4} source={Icons.purchase} />
                <Text style={styles.TXT5}>Purchase Coins</Text>
              </TouchableOpacity>

            </View>
          </View>

        </View > :
        <></>

    );
  }
}
