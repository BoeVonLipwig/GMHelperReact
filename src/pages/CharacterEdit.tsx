import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";
import {FormInput} from "react-native-elements";
import {FirebaseController} from "../data/FirebaseController";

type Props = {
    character: CharacterModel,
    type: string,
    index: number,
    updateChar: () => {}
}

type State = {
    update: number
}

export class CharacterEdit extends Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            update: 0
        }
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {this.info()}
                {this.printStats()}
                {this.fabButton()}
            </ScrollView>
        );
    }

    private info() {
        return (
            <View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>
                        Race:
                    </Text>
                    <FormInput defaultValue={this.props.character.race}
                               onChangeText={(text: string) => this.setValue(text, "race")}/>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>
                        Class:
                    </Text>
                    <FormInput defaultValue={this.props.character.class}
                               onChangeText={(text: string) => this.setValue(text, "class")}/>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>
                        AC:
                    </Text>
                    <FormInput defaultValue={this.props.character.armorClass + ""}
                               onChangeText={(text: string) => this.setValue(text, "ac")}/>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>
                        Max Hit Points:
                    </Text>
                    <FormInput defaultValue={this.props.character.maxHitPoints + ""}
                               onChangeText={(text: string) => this.setValue(text, "maxhp")}/>
                </View>

            </View>
        );
    }

    private printStats() {
        let stats = this.props.character.stats;
        return (
            <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 20, paddingTop: 10}}>Stats:</Text>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statsStyle}>
                            Str:
                        </Text>
                        <FormInput
                            defaultValue={stats.str + ""}
                            onChangeText={(text) => this.setStat(text, "str")}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statsStyle}>
                            Dex:
                        </Text>
                        <FormInput
                            defaultValue={stats.dex + ""}
                            onChangeText={(text) => this.setStat(text, "dex")}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statsStyle}>
                            Con:
                        </Text>
                        <FormInput
                            defaultValue={stats.con + ""}
                            onChangeText={(text) => this.setStat(text, "con")}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statsStyle}>
                            Int:
                        </Text>
                        <FormInput
                            defaultValue={stats.int + ""}
                            onChangeText={(text) => this.setStat(text, "int")}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        < Text style={styles.statsStyle}>
                            Wis:
                        </Text>
                        <FormInput
                            defaultValue={stats.wis + " "}
                            onChangeText={(text) => this.setStat(text, "wis")}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.statsStyle}>
                            Chr:
                        </Text>
                        <FormInput
                            defaultValue={stats.cha + ""}
                            onChangeText={(text) => this.setStat(text, "cha")}/>
                    </View>
                </View>
            </View>
        )
    }

    private fabButton() {
        const actions = [{
            text: FabConfig.save.text,
            position: FabConfig.save.position,
            name: FabConfig.save.name
        }];
        return (
            <FloatingAction actions={actions} onPressItem={() => {
                this.save();
            }}/>
        )

    }

    private save() {
        FirebaseController.send(this.props.character, this.props.type);
        //triggers a state update in the char page
        this.props.updateChar();
        Actions.pop();
    }

    private setValue(text: string, type: string) {
        switch (type.toLowerCase()) {
            case "name":
                this.props.character.name = text;
                break;
            case "race":
                this.props.character.race = text;
                break;
            case "class":
                this.props.character.class = text;
                break;
            case "ac":
                this.props.character.armorClass = this.getNum(text);
                break;
            case "maxhp":
                this.props.character.maxHitPoints = this.getNum(text);
                break;
        }
        this.setState({update: this.state.update + 1});
    }

    private setStat(text: string, type: string) {
        let num = this.getNum(text);
        switch (type.toLowerCase()) {
            case "str":
                this.props.character.stats.str = num;
                break;
            case "dex":
                this.props.character.stats.dex = num;
                break;
            case "con":
                this.props.character.stats.con = num;
                break;
            case "int":
                this.props.character.stats.int = num;
                break;
            case "wis":
                this.props.character.stats.wis = num;
                break;
            case "cha":
                this.props.character.stats.cha = num;
                break;
        }
        this.setState({update: this.state.update + 1});
    }

    // noinspection JSMethodCanBeStatic
    private getNum(input: string) {
        let parsed: number = parseInt(input);
        if (isNaN(parsed) || parsed < 0) {
            parsed = 0;
        }
        return parsed
    }
}

export const styles = StyleSheet.create({
    buttonStyleLower: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: 'rgb(255,0,0)'
    }, buttonStyleAdd: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 35,
        height: 25,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: 'rgb(0,0,255)'
    }, textStyle: {
        fontSize: 20,
        padding: 10
    }, statsStyle: {
        fontSize: 10,
        paddingLeft: 18
    }
});

export const FabConfig = {
    save: {
        text: "Save & Upload",
        name: "save",
        position: 1
    }
};
