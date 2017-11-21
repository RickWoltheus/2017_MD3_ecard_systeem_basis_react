import React from 'react';
import Asset from './components/assets';
import Marker from './components/marker';
import {deepCopy} from './utils/object.utils';

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
                    {id: 2, objectName: "chair", x: 0, y: 0, src: "src/images/2.png"},
                    {id: 3, objectName: "table", x: 0, y: 0, src: "src/images/demo.png"}
                    ],
                art: [
                    {id: 1, objectName: "sculpture", x: 0, y: 0, src: "src/images/demo.png"},
                    {id: 1, objectName: "vase", x: 0, y: 0, src: "src/images/demo.png"},
                    {id: 1, objectName: "painting", x: 0, y: 0, src: "src/images/demo.png"}
                ]

            };
        this.state = {};
        this.state.card =
            {_id:"23[049838954]",
                name: "Amins_Ecard",
                date: "21-04-2016",
                objects: [
                    {id: 1, objectName : "bigshaq", x: 0, y: 0, src : "src/images/demo.png"},
                    {id: 25, objectName : "vegetable", x: 0, y: 315, src : "src/images/2.png"},
                    {id: 2, objectName : "Gold Rush", x : 0 , y : 300, src : "src/images/background.jpg"}
                    ]
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
                    this.state.card.objects[i].x = object.x;
                    this.state.card.objects[i].y = object.y;
                }}

            />
        );
    };
    renderMenuAssets = (currentItem, i) => {
        return (
            <Asset
                key={i}
                src = {currentItem.src}
                updateRoom = { object => {
                    const newCard = deepCopy(this.state.card);
                    newCard.objects.push({objectName : "Gold Rush", x : 50 , y : 50, src : object.src});
                    this.setState({
                        card : newCard
                    })
                    // const newObjects = [...this.state.card.objects];
                    // newObjects.push({objectName : "Gold Rush", x : 50 , y : 50, src : "src/images/2.png"});
                    // this.state.card.objects = newObjects;
                    // this.setState({
                    //     card : this.state.card
                    // })
                    // this.state.card.objects[this.state.card.length] = {objectName : "Gold Rush", x : 50 , y : 50, src : "src/images/2.png"};
                    // console.log(this.state.card)
                   }
                }
            />

        );
    };

    inputValue = (input) =>{
        this.state.card.name = input.target.value;
        console.log(this.state.card);
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
                <div className="menu">
                    <div className="app">
                        IKEA POSTCARD
                        <h3>Meubels</h3>
                        {this.assets.furniture.map(this.renderMenuAssets)}
                    </div>
                </div>
                <div className="room-wrapper">
                    {this.state.card.objects.map(this.renderItems)}
                    <img
                        className="background-image"
                        src="src/images/background.jpg"
                    />
                    <button
                        onMouseDown={(e)=>this.saveToDatabase(this.state.card)}
                    >Save to database</button>
                    <input name="name" placeholder="your name" onChange={this.inputValue}/>

                </div>


            </div>

        );
    }

}
export default App;