import AuthStackNavigator from "../stack/AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

function RootNavigator() {
    // const isLoggedIn = true;
    const isLoggedIn = false;
    return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;