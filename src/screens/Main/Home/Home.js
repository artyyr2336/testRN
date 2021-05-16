import PropType from 'prop-types';
import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import messageIcon from '../../../static/img/images/messageIcon.png';
import {stylesCommon, stylesUi} from '../../../static/styles';

let deviceWidth = Dimensions.get('window').width;

const bannerData = [
  {name: 'Лента', value: 'lenta'},
  {name: 'Рейтинг пользователей', value: 'rating'},
  {name: 'Поиск', value: 'search'},
  {name: 'Подборка', value: 'podb'},
  {name: 'Элемент новости', value: 'elem'},
];

const Home = ({navigation}) => {
  const [clickedNews, setClickedNews] = useState(0);
  return (
    <View style={stylesCommon.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>ARTISAN</Text>
        <TouchableOpacity>
          <Image style={{width: 17, height: 17}} source={messageIcon} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <ScrollView
          horizontal
          // pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {bannerData.map((i, index) => (
            <View key={index} style={[index !== 0 && stylesCommon.ml10]}>
              <TouchableOpacity onPress={() => setClickedNews(index)}>
                <Text
                  style={[
                    stylesUi.tabBarText,
                    index === clickedNews && stylesUi.clickedTabBar,
                  ]}>
                  {i.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

Home.propTypes = {
  navigation: PropType.object,
};

export default Home;
