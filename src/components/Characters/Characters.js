import './Characters.css';
import { getDataApi } from '../../utils/getDataApi';
import {ROOT_INDEX} from '../../constants/root'
import { IMG_STANDARD_XLARGE,} from '../../constants/api';
import {ROOT_MODAL} from '../../constants/root';
import closeIconWhite from './img/close.svg';
import closeIconBlack from './img/close-dark.svg'


class Characters{
    renderNotification() {
        let htmlContent = '';

        htmlContent += `
          <div class="characters__containerNotification">
            <span>Not content</span>
            <button 
                class="bg-contain characters__close btn iconBlack"
                onclick="modal.innerHTML = '' "
                style="background-image: url(${closeIconBlack})"
            ></button>
          </div>
        `;
        
        ROOT_MODAL.innerHTML += htmlContent;
    }

    renderContent(data) {
        let htmlContent = '';

        data.forEach(({name, thumbnail: {extension, path}}) => {

            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

            htmlContent += `
                <li class="characters__item">
                    <img class="characters__img img-cover" src="${imgSrc}" />
                    <span class="characters__name">${name}}</span>
                </li>
            `;
            
        });

        const htmlWrapper = `
        <div class="characters__wrapper">
            <ul class="characters__container">
                ${htmlContent}
            </ul>
            <button 
                class="bg-contain characters__close btn "
                onclick="modal.innerHTML = '' "
                style="background-image: url(${closeIconWhite})"
            ></button>
        </div>
        
        `;
    
        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);
        if(data.length == 0) {
            this.renderNotification()
        } else if (data.length > 0) {
            this.renderContent(data)
            console.log(data)
        } else {
            Error.render()
        }
        
    }
}

export default new Characters()