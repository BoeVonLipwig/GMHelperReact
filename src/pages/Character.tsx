import React from 'react';
import {Component} from 'react';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";

type Props = {
  character: CharacterModel,
  updateList: (char: CharacterModel, list: String) => {}
}

export class Mobs extends Component<Props> {

}
