import { ref } from "vue"

const LocationUrl = "https://dash-sinhthainambo.girs.vn/"
const BaseURL = 'https://kong2_sinhthainambo.girs.vn/core/'
const AuthenticationURL = 'https://kong2_sinhthainambo.girs.vn/users/'

const BASE_URL = 'http://210.245.96.134:3001'
// const BASE_URL = 'http://localhost:3001'

const urlIamge = ref("http://210.245.96.134:3001/images/")
// const urlIamge = 'http://localhost:3001/images/'

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

export { urlIamge, LocationUrl, BaseURL, AuthenticationURL, timeNow, BASE_URL, convertTime }
