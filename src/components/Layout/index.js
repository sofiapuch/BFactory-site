import React from 'react';
import Aux from '../../hoc/Aux';

import Navigation from '../Navigation/index';
// import Footer from '../Footer/index';

const layout = ( props ) => {

    return (
        <Aux>
            <Navigation />
            <main className="layout">
                {props.children}

                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ipsum orci. Mauris tincidunt pharetra lobortis. Duis condimentum ligula vitae mi accumsan pellentesque. Fusce malesuada erat justo, ut aliquet enim eleifend eu. Integer egestas tincidunt tellus vitae efficitur. Nam a lectus sed est ornare varius eget eget diam. Fusce lobortis consectetur sem, sit amet consectetur metus elementum vitae. Aenean vel sapien scelerisque, ornare lectus commodo, tincidunt nisl. Integer mollis imperdiet dolor a maximus. Duis bibendum, nisl sed feugiat efficitur, dui urna vestibulum leo, id auctor mauris sapien sit amet ipsum. Maecenas odio dui, mollis in iaculis sed, tincidunt ac arcu. Donec non purus quis est convallis maximus. Quisque in nunc pellentesque, varius mi quis, auctor eros. Nullam convallis interdum ligula sed elementum.

Pellentesque vulputate sem vitae enim euismod porta. Sed vel ipsum turpis. Aliquam sed aliquet turpis, tempor consequat nulla. Quisque in imperdiet libero. Nam eget sagittis neque, at aliquam metus. Vivamus eget maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis magna nec mollis pulvinar. Nullam vulputate ex fringilla elit malesuada cursus. Pellentesque ornare, odio quis viverra bibendum, libero ante gravida tellus, a porta massa ante a sapien. Nulla vel convallis enim. Nam gravida risus lacus, sed facilisis nunc elementum in.

Aliquam in eros nec turpis malesuada bibendum id ac elit. Vivamus congue lectus a nisi viverra cursus. Aliquam tincidunt elit malesuada justo dignissim semper. Integer quis nisi et augue semper varius non ac neque. Nam rutrum, felis ac facilisis pulvinar, libero mi scelerisque orci, id dignissim libero augue non nulla. Nunc cursus nunc a vulputate fringilla. Integer convallis nisi dui, quis blandit tortor dapibus id.</div>
            </main>
            {/* <Footer /> */}
        </Aux>
    )
}

export default layout;