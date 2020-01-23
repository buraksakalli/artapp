import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import GeneralBlock from 'containers/GeneralBlock';
import Title from 'components/atoms/title'
import MenuIcon from 'components/molecules/menuIcon';
import style from './style';

export class General extends Component {
  render() {
    const { navigation } = this.props;
    const targetPage = navigation.getParam("targetPage");
    const query = navigation.getParam("query");
    const title = navigation.getParam("title");
    return (
      <View>
        <MenuIcon />
        <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
          <Title variant="section">{title}</Title>
          <View style={style.wrapper}>
            <GeneralBlock targetPage={targetPage} query={query} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default General