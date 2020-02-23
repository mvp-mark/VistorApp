import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
// import MaterialHeader21 from "../../components/MaterialHeader21";
import FbAddSurvey from '../../components/Home/FbAddSurvey';
import api from '../../services/api';

function Home(...props) {
  async function loadVistorias() {
    const [vistorias, setVistorias] = useState([]);

    const response = await api.get('/listAll', {
      // params: {
      // 	latitude,
      // 	longitude,
      // 	techs,
      // },
    });
    setVistorias(response.data.vistorias);

    useEffect(() => {
      subscribeToNewVistorias(vistoria =>
        setVistorias([...vistorias, vistoria]),
      );
    }, [vistorias]);

    return (
      <View style={styles.container}>
        {vistorias.map(vistoria => (
          <View style={styles.jxs1RowColumn} key={vistoria._id}>
            <View style={styles.jxs1Row}>
              <Text style={styles.jxs1}>{vistoria.licence_plate}</Text>
              <Text style={styles.jan1}>{vistoria.data_insert}</Text>
            </View>
            <View style={styles.fox1Row}>
              <Text style={styles.fox1}>Fox 1.0</Text>
              <Svg viewBox="0 0 20.00 20.00" style={styles.ellipse1}>
                <Ellipse
                  strokeWidth={1}
                  fill="rgba(126,211,33,1)"
                  stroke="rgba(230, 230, 230,1)"
                  cx={10}
                  cy={10}
                  rx={10}
                  ry={10}></Ellipse>
              </Svg>
            </View>
            <View style={styles.rect1}></View>
            {/* <MaterialHeader21 style={styles.materialHeader21}></MaterialHeader21> */}
          </View>
        ))}
        <View style={styles.jxs1RowColumnFiller}></View>
        <FbAddSurvey style={styles.materialButtonShare}></FbAddSurvey>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jxs1: {
    color: 'rgba(0,0,0,1)',
    fontFamily: 'roboto-700',
    marginTop: 3,
  },
  jan1: {
    color: 'rgba(155,155,155,1)',
    fontFamily: 'roboto-regular',
    marginLeft: 'auto',
  },
  jxs1Row: {
    height: 20,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 6,
    marginRight: 9,
  },
  fox1: {
    color: 'rgba(155,155,155,1)',
    fontSize: 12,
    fontFamily: 'roboto-regular',
    marginTop: 1,
  },
  ellipse1: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  fox1Row: {
    height: 20,
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 7,
    marginRight: 8,
  },
  rect1: {
    width: 346,
    height: 1,
    backgroundColor: 'rgba(230, 230, 230,1)',
    marginTop: 5,
    marginLeft: 6,
  },
  materialHeader21: {
    height: 56,
    marginTop: -120,
  },
  jxs1RowColumn: {},
  jxs1RowColumnFiller: {
    flex: 1,
  },
  materialButtonShare: {
    width: 56,
    height: 58,
    alignSelf: 'flex-end',
    marginBottom: 34,
    marginRight: 32,
  },
});

export default Home;
