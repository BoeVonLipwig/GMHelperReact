import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FloatingAction} from "react-native-floating-action";
import {CharacterModel} from "../data/CharacterModel";
import {Actions} from "react-native-router-flux";
import {FirebaseController} from "../data/FirebaseController";

type StateType = {
    players: CharacterModel[],
    update: number,
}

export class Players extends Component<{}, StateType> {

    constructor(props: any) {
        super(props);
        this.state = {
            players: [],
            update: 0
        };
    }

    componentDidMount() {
    }

    render() {
        console.log(this.state.players);
        return (
            <View style={{flex: 1}}>
                {this.state.players.map((player, i) =>
                    <TouchableOpacity
                        onPress={() => this.viewPlayer(player, i)}
                        style={styles.listItem} key={i}>
                        <Text>{player.name + " the " + player.race + " " + player.class}</Text>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                backgroundColor: "rgb(255,0,0)",
                                height: "100%",
                                width: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            key={i}
                            onPress={() => this.deleteChar(i)}
                        >
                            <Text style={{fontSize: 10}}>{"Del"}</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>)
                }
                {this.fabButton()}
            </View>
        );
    }


    private deleteChar(i: number) {
        let newList = this.state.players;
        newList.splice(i, 1);
        this.setState({players: newList});
    }


    private addChar() {
        let char: CharacterModel = {
            name: "Click",
            race: "Player",
            class: "to edit",
            maxHitPoints: 0,
            curHitPoints: 0,
            armorClass: 0,
            stats: {
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0
            },
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        };
        this.setState({players: this.state.players.concat(char)});
    }

    private download() {
        let firebasePromiseLocal = FirebaseController.downloadAllChars("players").then(query => {
            const chars = FirebaseController.getChars(query)
            for (let i = 0; i < chars.length; i++) {
                let curChar = chars[i];
                let char: CharacterModel = {
                    name: curChar.name,
                    race: curChar.race,
                    class: curChar.class,
                    maxHitPoints: curChar.maxHitPoints,
                    curHitPoints: curChar.curHitPoints,
                    armorClass: curChar.armorClass,
                    stats: curChar.stats,
                    id: curChar.id
                };
                this.setChar(char);
            }
        }).catch(() => {
            console.log(firebasePromiseLocal);
        });
    }

    private setChar(char: CharacterModel) {
        let x = -1;
        for (let i = 0; i < this.state.players.length; i++) {
            if (this.state.players[i].id === char.id) {
                x = i;
                break;
            }
        }
        if (x > 0) {
            let newPlayers = this.state.players;
            newPlayers[x] = char;
            this.setState({players: newPlayers});
        } else {
            this.setState({players: this.state.players.concat(char)});
        }
    }

    // noinspection JSMethodCanBeStatic
    private viewPlayer(player: CharacterModel, i: number) {
        Actions.push('character', {
            character: player,
            index: i,
            type: "players",
            title: player.name
        })
    }

    fabButton() {

        const actions = [
            {
                text: FabConfig.add.text,
                position: FabConfig.add.position,
                name: FabConfig.add.name
            }, {
                text: FabConfig.download.text,
                position: FabConfig.download.position,
                name: FabConfig.download.name
            }

        ];

        return (
            <FloatingAction actions={actions} onPressItem={
                (name) => {
                    if (FabConfig.add.name.localeCompare(name + "") == 0) {
                        this.addChar();
                    } else {
                        this.download();
                    }
                }
            }/>
        )

    }
}

export const styles = StyleSheet.create({
        listItem: {
            borderRadius: 0,
            borderWidth: 0.5,
            borderColor: '#d6d7da',
            justifyContent: 'space-between',
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#d6d6d6",
            width: "90%",
            height: 40,
            alignSelf: "center",
        }
    }
);

export const FabConfig = {
    add: {
        text: "Add",
        name: "add",
        position: 1
    },
    download: {
        text: "Download",
        name: "download",
        position: 2
    }
};
