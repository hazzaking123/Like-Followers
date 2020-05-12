import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    MAINVIW: { flex: 1, backgroundColor: "#E8EBF2" },
    VIW1: { height: hp(12), backgroundColor: "#FE2C55", elevation: 5, flexDirection: "row", paddingLeft: hp(2) },
    VIW7: { width: "50%", flexDirection: "row" },
    VIW8: { width: "50%", justifyContent: "center", alignItems: "flex-end" },
    VIW9: { height: hp(7), backgroundColor: "#FE7E97", borderTopLeftRadius: hp(100), borderBottomLeftRadius: hp(100), width: wp(28), flexDirection: "row", padding: hp(1) },
    VIW10: { borderRadius: hp(100), backgroundColor: "#FE2C55", height: hp(5), width: hp(5), justifyContent: "center", alignItems: "center" },
    VIW11: { justifyContent: "center", height: "100%", width: "100%" },
    IMG2: { height: hp(4), width: hp(4), },
    IMG3: { height: hp(3), width: hp(3) },
    IMG4: { height: hp(2.5), width: hp(2.5) },
    IMG44: { height: hp(3), width: hp(3), top: hp(0.3) },
    IMG5: { height: hp(4), width: hp(4) },
    TXT4: { fontSize: hp(3), fontFamily: "LatoBlack", color: "white", left: hp(1) },
    TXT5: { fontSize: hp(3.5), fontFamily: "LatoBlack", color: "#E9ECF2" },
    INGBTN: { justifyContent: "center" },
    Title: { justifyContent: "center", left: wp(6) },
    VIW12: { elevation: 10, height: hp(22), borderRadius: hp(2), backgroundColor: "white", marginHorizontal: hp(2), marginBottom: hp(2) },
    FlatList: { flex: 1 },
    VIW13: { height: "45%", justifyContent: "flex-start", padding: hp(2), flexDirection: "row" },
    VIW14: { height: "55%", justifyContent: "center", alignItems: "center" },
    TXT6: { fontFamily: "LatoBlack", fontSize: hp(3) },
    VIW16: { height: hp(7), backgroundColor: "#FE2C55", borderRadius: hp(100), flexDirection: "row", padding: hp(1), elevation: 10, paddingRight: hp(2) },
    VIW17: { borderRadius: hp(100), height: hp(5), width: hp(5), justifyContent: "center", alignItems: "center", borderWidth: hp(0.3), borderColor: "white" },
    VIW18: { justifyContent: "center", height: "100%", paddingHorizontal: hp(1) },
    VIW19: { justifyContent: "center", alignItems: "center", paddingLeft: hp(1) }
})

export default styles