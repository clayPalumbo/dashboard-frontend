import { WiCloudy, WiDayCloudy, WiDaySunny, WiDaySprinkle, WiDayThunderstorm, WiFog, WiDayRainMix, WiDayShowers, WiRain, WiThunderstorm, WiNightClear } from "react-icons/wi";

// TODO: Add night and snow icons/functionality
export const iconGenerator = (iconType: number, size: number, day: boolean) => {
    let icon = <WiDaySunny size={size}/>;
    const findIcon = () => {
        switch (iconType) {
            case 1000:
                icon = day ? <WiDaySunny size={size}/> : <WiNightClear size={size}/>;
                break;
            case 1003:
                icon = <WiDayCloudy size={size}/>
                break;
            case 1006:
                icon = <WiCloudy size={size}/>
                break;
            case 1009:
                icon = <WiDayCloudy size={size}/>
                break;
            case 1063:
                icon = <WiDaySprinkle size={size}/>
                break;
            case 1087:
                icon = <WiDayThunderstorm size={size}/>
                break;
            case 1135:
                icon = <WiFog size={size}/>
                break;
            case 1030:
            case 1153:
            case 1180:
            case 1186:
            case 1189:
            case 1192:
            case 1195:
                icon = <WiDayRainMix size={size}/>
                break;
            case 1183:
            case 1240:
            case 1243:
                icon = <WiDayShowers size={size}/>
                break;
            case 1246:
                icon = <WiRain size={size}/>
                break;
            case 1273:
            case 1276:
                icon = <WiThunderstorm size={size}/>
                break;
            default:
            <WiDaySunny size={size}/>
        }
    }
    findIcon();
    return icon;

}