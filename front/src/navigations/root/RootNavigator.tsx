import AuthStackNavigator from "../stack/AuthStackNavigator";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";
import useAuth from "../../hooks/queries/useAuth";

function RootNavigator() {
    // const isLoggedIn = false;
    const {isLogin} = useAuth();
    // return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
    return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;