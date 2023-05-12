const LocationUrl = "https://dash-sinhthainambo.girs.vn/"
// const LocationUrl = "http://localhost:3002/"
const BaseURL = 'https://kong2_sinhthainambo.girs.vn/core/'
// const BaseURL = 'http://localhost:3000/'
const AuthenticationURL = 'https://kong2_sinhthainambo.girs.vn/users/'
// const AuthenticationURL = 'http://localhost:3005/'

const BASE_URL = 'http://210.245.96.134:3001'

const timeNow = () => {
    const dateString = new Date();
    const date = new Date(dateString);
    const isoDateString = date.toISOString();
    return isoDateString;
}

const convertTime = (time) => {
    const date = new Date(time);

    // Lấy các thành phần của ngày và giờ
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();
    const millisecond = date.getUTCMilliseconds();

    // Định dạng lại chuỗi theo định dạng mong muốn
    const outputDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

    return outputDate; // Kết quả: "04-04-2023 14:01:39.870"
}

export { LocationUrl, BaseURL, AuthenticationURL, timeNow, BASE_URL, convertTime }
