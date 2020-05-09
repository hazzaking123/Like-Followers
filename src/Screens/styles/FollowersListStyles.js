import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from "../../Utils/fonts";
const styles = StyleSheet.create({
    MAINVIW: { flex: 1, backgroundColor: "#E8EBF2" },
    VIW1: { height: hp(88) },
    VIW2: { height: hp(15), flexDirection: "row", padding: hp(2), borderRadius: hp(1), backgroundColor: "white", elevation: 10, marginBottom: hp(2), marginHorizontal: hp(2) },
    VIW3: { justifyContent: "center", flex: 6, },
    VIW4: { justifyContent: "center", alignItems: "flex-start", flex: 4 },


    flat: { backgroundColor: "transparent" },
    CMNVIW: { justifyContent: "center", alignItems: "flex-end", flex: 4 },
    IMG: { height: hp(10), width: hp(10), borderRadius: hp(100) },
    TXT: { fontFamily: Fonts.LatoBlack, fontSize: hp(2.5) },
    TXT1: { fontSize: hp(1.6), fontFamily: Fonts.LatoBlack, color: "white" },
    BTN: { justifyContent: 'center', elevation: 10, alignItems: 'center', height: hp(4.6), backgroundColor: "#FE2C55", padding: hp(2), borderRadius: hp(100) }
})

export default styles