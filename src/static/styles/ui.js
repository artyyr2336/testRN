const stylesUi = () => {
  return {
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: '10%',
      marginTop: 20,
    },
    btn: {
      paddingVertical: 15,
      alignItems: 'center',
    },
    btnRed: {
      backgroundColor: 'rgba(255, 0, 0, 0.6)',
    },
    btnGrey: {
      backgroundColor: 'rgba(232, 232, 232, 1)',
    },
    input: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ebebeb',
      paddingHorizontal: 10,
    },
    tabBarText: {
      color: 'rgba(0, 0, 0, 0.2)',
      paddingBottom: 5,
    },
    clickedTabBar: {
      color: 'red',
      fontWeight: 'bold',
      borderBottomWidth: 3,
      borderColor: '#FF6666',
    },
  };
};

export default stylesUi();
