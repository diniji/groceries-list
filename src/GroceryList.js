import { Component } from 'react';
import addedToBag from './cart-icon2.jpg';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e) {
        // 1 - console.log(e.target.value) //Obyasnenie: event.target.value - pozvolyaiut nam poluchit' dostup k tomu, chto pechataet pol'zovatel'. Vmesto "e" mojno pisat' "event".
        this.setState({userInput: e});

        // 2 - console.log(e);
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ""})
            // console.log(listArray);
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray.length = 0; //ili mojno napisat' na etoi stroke: listArray = [];
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target; //vmesto "li" mojno napisat' chto-ugodno. Programma znaet chto onClick ustanovlenno na li i vseravno poimet
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault(); // tak mi predotvrashaem perezagruzku stranitsi
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}> {/* kogda u nas est' "input" i nado, chtob on srabatival pri najatii knopki "Enter" - samii prostoi sposob - eto zavernut' vse v tag <form>. onSubmit - eto attribute, kotoriy ispolzuetsya kogda mi hotim, chtob chto-to proizoshlo pri najatii knopki "Enter" */}
                    <div className="container">
                        <input type="text" 
                        placeholder="What do you want to buy today?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>
                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn btnAdd">Add</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => ( //s pomoshiu funktsii map() poluchaem dostup k kajdomu elementu (item) v massive groceryList, kotoriy dobavlyaetsya v spisok. "index" mi vpisivaem, chtob v console.log ne bilo oshibki "Warning: Each child in a list should have a unique "key" prop"
                            <li onClick={this.crossedWord} key={index} className="liBox">
                                <img src={addedToBag} width="28px" alt="Add to bag icon" />
                                {item}
                                {/* to, gde kajdiy dobavlyaiushiysya element budet otrajen. "key={index}" mi vpisivaem, chtob v console.log ne bilo oshibki "Warning: Each child in a list should have a unique "key" prop" */}
                            </li>
                        ))}
                    </ul>
                    <div className="container">
                        <button onClick={() => this.deleteItem()} className="btn btnDelete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}


//oshibka: Manifest: Line: 1, column: 1, Syntax error. - ee mi ne reshaem (daje u Alli na rabote ee ne reshaiut)

//oshibka: esli ispolzovat' array s metodom map(), voznikaet takaya problema v console.log: 
//Warning: Each child in a list should have a unique "key" prop.
//Reshenie: 
//1. dobavit' argument "index" v {this.state.groceryList.map((item, index) =>...)}
//2. dobavit' v li key={index} - vot tak: <li key={index}>{item}</li>
//vmesto "index" mojno vpisat' oboih sluchayah tolko bukvu "i"