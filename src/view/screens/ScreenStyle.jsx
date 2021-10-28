import {StyleSheet} from 'react-native';
import {COLORS, icons, dummyData} from '../../constants';
const ScreenStyle = StyleSheet.create({
  navTitle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  search: {
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputSearch: {
    height: 50,
    backgroundColor: COLORS.lightGray1,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  containerSearch: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  //cartScreeen......

  priceTotalCart: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.gray,
  },

  //Item product.....

  contentFavorite: {
    backgroundColor: COLORS.green,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentAddCart: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 36,
    marginTop: 5,
  },
});
export default ScreenStyle;
