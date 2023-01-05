import 'regenerator-runtime/runtime';
import { API_URL_BASE,URL_COMICS } from './constants/api';
import { getDataApi } from './utils/GetDataApi';
(async () => {
    const data = await getDataApi.getData(API_URL_BASE + URL_COMICS);
    console.log('result:', data);
})();
