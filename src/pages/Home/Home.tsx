import * as React from 'react'
import Badge from '../../library-components/Badge/Badge'
import CheckInput from '../../library-components/CheckInput/CheckInput'
import SideDrawer from '../../library-components/SideDrawer/SideDrawer'
import Button from '../../library-components/Button/Button'
import Toast from '../../library-components/Toast/Toast'
import UploadFile from '../../library-components/UploadFile/UploadFile'
import ModalSample from '../../components/ModalSample/ModalSample'

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return (
        <div>
            <div>
                <Badge content={"1"} />
            </div>
            <div>
                <CheckInput label={"Acepto los terminos y condiciones"} inputId={'teminos-y-condiciones'} inputName={'teminos-y-condiciones'}/>
            </div>
            <div>
                <SideDrawer />
            </div>
            <div>
                <Button label={"ok"} onClickHandler={()=>console.log('clicked')}/>
            </div>
            <div>
                <Toast />
            </div>
            <div>
                <UploadFile />
            </div>
            <div>
                <ModalSample />
            </div>
        </div>
    )
}
 
export default Home