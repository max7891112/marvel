import './Error.css';
import { ROOT_INDEX } from '../../constants/root'
class Error {
    render() {
        const htmlWrapper = `
            <div class="error__container">
                <span>
                    <p class="error__alert">Error happened</p>
                    <p class="error__alert">Please try to enter later</p>
                </span>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();