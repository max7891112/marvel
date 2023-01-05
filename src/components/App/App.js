import { API_URL_BASE,URL_COMICS } from '../../constants/api';
import { getDataApi } from '../../utils/GetDataApi';
import './App.css'
class App{
   async render() {
        const data = await getDataApi.getData(API_URL_BASE + URL_COMICS);
        console.log('result:', data);
    }
}
export default new App()