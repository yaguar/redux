
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

let d = true;
let arr =[];
let state ={
	person:[
		{
			name: '',
			lastname: '',
			phone: ''
		},
	]
};

function reducer(state,action){
	switch(action.type){
		case 'ADD_PERSON':
			return {person:[...state.person, action.person]};
		case 'DEL_PERSON':
			return {person: [...state.person.filter((elem) => {return(elem['name'] !=action.person.name || elem['lastname']!=action.person.lastname);})]}
		default:
			return state;
	}
}

let store = createStore(reducer, state);

//класс str получает из общего массива одного человека и выводит его, добавляя возможность посмотреть и изменить контакт

class Str extends React.Component{
	constructor(props){
		super(props);
		this.state = { flag1: true};
		this.readmoreClick = this.readmoreClick.bind(this);
		this.addClick = this.addClick.bind(this);
		this.name = this.props.data.name;
		this.lastname = this.props.data.lastname;
		this.phone = this.props.data.phone;}
    readmoreClick() { 
		this.setState({flag1: !this.state.flag1 });
	}

	//этот метод изменяет контакт, при клике считывает значение из полей, изменяет стор и записывает другое значение

	addClick(){
		let obj = {};
		if (name2.value != '' || lastname2.value != '' || phone2.value != ''){
			obj['name']=this.name;
			obj['lastname']=this.lastname;
			obj['phone']=this.phone;
			store.dispatch({type:'DEL_PERSON',person:obj});
			obj['name']=name2.value;
			obj['lastname']=lastname2.value;
			obj['phone']=phone2.value;
			this.name=name2.value;
			this.lastname=lastname2.value;
			this.phone=phone2.value;
			store.dispatch({type:'ADD_PERSON', person:obj});
		}
		this.setState({flag1: !this.state.flag1 });
	}
    render() {
		let flag1 = this.state.flag1;
		const html = <p>фамилия: <input type="text" id="name2" /> имя: <input type="text" id="lastname2" /> номер: <input type="text" id="phone2" /> <input type="button" value="изменить" onClick={this.addClick}/> {this.name} {this.lastname} {this.phone}</p>

        return (
			<div>
            	{(flag1 && <p onClick={this.readmoreClick}> {this.name} {this.lastname}</p>) || html }
            </div>
		);
	}
}

//класс database берет массив контактов, каждый элемент массива скармливает str и выводит все это на экран

class Database extends React.Component{
	 constructor(props){
        super(props); 
	}
    render() {
    	let data = this.props.data;
    	let newsTemplate = data.map((item, index) => {
            	return (
            		<div key={index}>
            			<Str data={item} />
          			</div>
        		)
	  		} 
   		)

    	return (
      		<div>
        		{newsTemplate}
      		</div>
    	);
  	}
}

//класс addform рисует поля для ввода и удаления данных и добавляет/удаляет из нашего массива, в конце вызывает класс database 

class AddForm extends React.Component{
	constructor(props){
    	super(props);
		this.state = { flag: true};
        this.addClick = this.addClick.bind(this);
		this.delClick = this.delClick.bind(this);
    }
    addClick(){
    	let obj = {};
        obj['name']=name1.value;
		obj['lastname']=lastname.value;
		obj['phone']=phone.value;
        store.dispatch({type:'ADD_PERSON', person:obj});
		this.setState({flag: !this.setState.flag });
    }
	delClick(){
		let obj = {};
		obj['name']=name1.value;
		obj['lastname']=lastname.value;
		store.dispatch({type:'DEL_PERSON',person:obj});
        this.setState({flag: !this.setState.flag }); 
	}
    render(){
    	return(
    		<div>   
                  фамилия: <input type="text" id="name1" /> имя: <input type="text" id="lastname" /> номер: <input type="text" id="phone" />
                  <input type="button" value="отправить" onClick={this.addClick}/>
				  <input type="button" value="удалить" onClick={this.delClick}/>
             	  <Database data={store.getState().person} />
			</div>
              
          );
     }
  }

class App extends React.Component{
	render() {
    	return (
      		<div>
			<AddForm />
      		</div>
    	);
  	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


