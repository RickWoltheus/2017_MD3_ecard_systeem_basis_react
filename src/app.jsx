import React from 'react';
import Item from './components/item';
import Marker from './components/marker';

class App extends React.Component {

    constructor(props) {
        super(props);
        //
        // const self = this;
        // document.body.addEventListener("click", function(){
        //     console.log(self.card);
        // });
        this.assets =
            {
                furniture: [
                    {id: 1, objectName: "couch", x: 0, y: 0, src: "src/images/demo.png"},
                    {id: 2, objectName: "chair", x: 0, y: 0, src: "src/images/demo.png"},
                    {id: 3, objectName: "table", x: 0, y: 0, src: "src/images/demo.png"},
                    ],
                art: [
                    {id: 1, objectName: "sculpture", x: 0, y: 0, src: "src/images/demo.png"}
                    {id: 1, objectName: "couch", x: 0, y: 0, src: "src/images/demo.png"}
                    {id: 1, objectName: "couch", x: 0, y: 0, src: "src/images/demo.png"}
                ]

            }

        this.card =
            {_id:"23[049838954]",
                name: "Amins_Ecard",
                date: "21-04-2016",
                objects: [
                    {id: 1, objectName: "bigshaq", x: 0, y: 0, src: "src/images/demo.png"},
                    {id: 25, objectName: "vegetable", x: 0, y: 315, src: "src/images/2.png"}]
            }

    }
    saveToDatabase(card) {
        console.log(card)
    }
    renderItems = (currentItem, i) => {
        return (
            <Marker
                key={i}
                x={currentItem.x}
                y={currentItem.y}
                name={currentItem.objectName}
                src={currentItem.src}
                onUpdate={object => {
                    this.card.objects[i].x = object.x;
                    this.card.objects[i].y = object.y;
                }}

            />
        );
    };

    render() {

        const style = {
            backgroundColor: "black",
            backgroundImage: "url('src/images/background.jpg')",

        };
        return (
            <div
                className="app"
            >
                this
                {this.card.objects.map(this.renderItems)}
                <img src="src/images/background.jpg" />
                <button
                     onMouseDown={(e)=>this.saveToDatabase(this.card)}
                >Save to database</button>
            </div>

        );
    }

}
export default App;