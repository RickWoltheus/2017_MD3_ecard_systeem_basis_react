import React from 'react';

class Item extends React.Component {

    render() {

        // hier mogen we lekker coderen
        console.log(this.props);

        return (
            <div className="student">
                <div className="student__src">
                   {this.props.src}
                </div>
                <div className="student__src">
                    {this.props.src}
                </div>
            </div>
        );
    }

}
export default Item;