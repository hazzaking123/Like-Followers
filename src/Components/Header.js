import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles/HeaderStyles';
import { Icons } from '../Utils/IconManager';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.VIW1} >
                <View style={styles.VIW7}>
                    <TouchableOpacity onPress={() => this.props.backPress()} style={styles.INGBTN}>
                        <Image source={Icons.Back} style={styles.IMG2} resizeMode="contain" />
                    </TouchableOpacity>
                    <View style={styles.Title}>
                        <Text style={styles.TXT5}>{this.props.title}</Text>
                    </View>
                </View>
                <View style={styles.VIW8}>
                    <View style={styles.VIW9}>
                        <View style={styles.VIW10}>
                            <Image source={Icons.premium_quality} style={styles.IMG3} resizeMode="contain" />
                        </View>
                        <View style={styles.VIW11}>
                            <Text style={styles.TXT4}>{this.props.coin}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
