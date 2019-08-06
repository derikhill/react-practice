import React from 'react';
import Header from './Header';

class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="aboutDisplay">
                {/* <img src='http://loremflickr.com/g/250/150/boat' alt=''/> */}
                    <div className="cell column-1">
                        <h2>Column 1</h2>
                        <p>church-key pork belly Portland direct trade  hoodie polaroid before they sold out photo booth Marfa tousled mixtape deep v Cosby sweater readymade kogi aesthetic axe PBR&B meh farm-to-table selvage post-ironic quinoa</p>
                    </div>
                    <div className="cell column-2">
                        <h2>COLMUN 2</h2>
                        <p>Intelligentsia Godard synth kale chips Neutra gluten-free High Life banh mi mixtape whatever tofu vinyl cleanse post-ironic authentic cray Portland retro Austin Williamsburg banjo Echo Park crucifix pour-over readymade</p>
                    </div>
                    <div className="cell column-3">
                        <h2>COLMUN 3</h2>
                        <p>tousled beard scenester sartorial Marfa swag McSweeney's hashtag twee Truffaut chambray direct trade  four loko crucifix selfies retro biodiesel umami pug Williamsburg authentic 3 wolf moon iPhone Tonx raw denim quinoa</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;