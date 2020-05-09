import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    MAINVIW: { flex: 1, backgroundColor: "#E9ECF2", alignItems: "center" },
    VIW1: { height: "43%", width: "100%", backgroundColor: "#FA647F", borderBottomLeftRadius: hp(100), borderBottomRightRadius: hp(100) },
    VIW2: { height: "43%", opacity: 0.5, justifyContent: "center", alignItems: "center", width: "100%", position: "absolute", backgroundColor: "#FE7E97", borderBottomLeftRadius: hp(100), borderBottomRightRadius: hp(100) },
    IMG1: { height: hp(14.53), width: hp(14.53), borderRadius: hp(0), position: "absolute", top: hp(20) },
    VIW3: { height: "50%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: hp(1.5) },
    VIW4: { justifyContent: "center", alignItems: "center", flexDirection: "row" },
    VIW5: { justifyContent: "center", alignItems: "center", marginVertical: hp(3) },
    VIW6: { justifyContent: "center", alignItems: "center" },
    TXT1: { fontSize: hp(3.28), fontFamily: "LatoBlack", color: "black" },
    TXT2: { fontSize: hp(3.28), fontFamily: "LatoBlack", color: "#FE2C55" },
    TXTINPUT: { paddingVertical: 0, height: hp(8), width: wp(83), backgroundColor: "white", borderRadius: hp(100), elevation: 10, paddingHorizontal: hp(4), fontFamily: "LatoBold", fontSize: hp(2.5), color: "#7C7A7A", },
    SRCH: { height: hp(7), width: wp(56), borderRadius: hp(100), backgroundColor: "#FE2C55", justifyContent: "center", alignItems: "center", elevation: 5 },
    TXT3: { fontSize: hp(2.5), fontFamily: "LatoBlack", color: "#E9ECF2" },
})
export default styles