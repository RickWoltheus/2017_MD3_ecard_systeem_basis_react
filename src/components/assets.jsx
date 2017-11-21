import React from 'react';

class Asset extends React.Component {


    spawnAsset = () => {
        this.props.updateRoom(this.props)
    };
    render() {

        // hier mogen we lekker coderen
        const style = {
            height: "100px",
            width: "100px",

        };

        return (
                    <img
                        src={this.props.src}
                        style={style}
                        onClick={this.spawnAsset}
                    />
        );
    }

}
export default Asset;