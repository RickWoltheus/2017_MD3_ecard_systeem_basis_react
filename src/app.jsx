import React from 'react';
import Item from './components/item';
import Marker from './components/marker';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.card =
            {_id:"23[049838954]",
                name: "Amins_Ecard",
                date: "21-04-2016",
                objects: [
                    {objectName: "bigshaq", x: 0, y: 0, src: "src/images/demo.png"},
                    {objectName: "vegetable", x: 0, y: 315, src: "src/images/2.png"}]
            }

    }
    renderItems(currentItem, i){
        return (
            <Marker
                x={currentItem.x}
                y={currentItem.y}
                name={currentItem.objectName}
                src={currentItem.src}
                onUpdate={object => {
                    //this.setState( { x : object.x, y : object.y } );
                    console.log(object, i);
                }}

            />
        );
    }

    render() {
        const style = {
            backgroundColor: "black",
            backgroundImage: "url('src/images/background.jpg')",

        };
        return (
            <div
                className="app"
            >
                {this.card.objects.map(this.renderItems)}
                <img src="src/images/background.jpg" />
            </div>
        );
    }

}
export default App;