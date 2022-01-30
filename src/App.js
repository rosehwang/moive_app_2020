import React from 'react';
//import PropTypes from 'prop-types';

// function Food({props}){
//   //<Food fav="kimchi" />
//   //Food 컴포넌트에 데이터를 보내는 방법 'props'
//   //props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 값을 감싸야함.
//   //console.log(props);
//   return (
//     <h1>I LIKE {props.fav}</h1>
//   );
//   //{fav} = props;
//   //return <h1>I like {fav}</h1>;
//   //이런식으로 구조 분해 할당 방법으로 써두됨.
// }

// function Food({name, picture, rating}){//image props로 바꾸니깐 여긴 picture props로 바꿔서 에러나는거임. 일치를 안하니깐.
//   //console.log('name :: {}'+name);
//   //console.log('picture :: {}'+picture);
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// const foodILike = [
//   { id:1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/iimchi_bokkeumbap_02-.jpg",
//     rating: 5,
//   },
//   { id:2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//     rating: 4.8,
//   },
//   { id:3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//     rating: 4.7,
//   },
//   { id:4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//     rating: 4.7,    
//   },
//   { id:5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//     rating: 4.7,     
//   },
// ];

// function renderFood(dish){
//   return <Food name = {dish.name} picture={dish.image} />
// }

// function App() {
//   //console.log(foodILike.map(renderFood));
//   // return (
//   //   <div className="App"/>
//   // );
// // return <div>Hello!!!!</div>

// // return(
// //   <div>
// //     <h1>Hello</h1>
// //     <Food fav="kimchi" something={true} papapapa={['hello',1,2,3,4,true]}/>
// //     <Food fav="kimbab"/>
// //     <Food fav="bulgogi"/>
// //   </div>
// // );

// //2. props를 이용한 컴포넌트 여러개
// // return(
// //   <div>
// //     {foodILike.map(dish => (
// //       <Food name = {dish.name} picture={dish.image} />
// //     ))}
// //   </div>
// // );

// //3.  map() 함수를 이용한 컴포넌트 여러개
// // return(
// //   <div>
// //     {foodILike.map(renderFood)}
// //   </div>
// // ); 

// //4. prop-types 함수를 이용한 컴포넌트 여러개 
// // return(
// //   <div>
// //     {foodILike.map(dish => (
// //       <Food key={dish.id} name = {dish.name} picture={dish.image} rating={dish.rating}/>
// //     ))}
// //   </div>
// // );
// }

// //4. prop-types 함수를 이용한 컴포넌트 여러개 
// // Food.propTypes = {
// //  name:PropTypes.string.isRequired,
// //  picture:PropTypes.string.isRequired,
// //  rating:PropTypes.number,
// // };


//5. state를 이용한 컴포넌트 여러개 
// class App extends React.Component{//React.Component 클래스를 상속받음.
//  constructor(props){
//    super(props);
//    console.log('hello');
//  }
 
//   //객체형태의 데이터.
//  state = {
//   count:0,
//  };
 
//  add = () => {
//   //console.log('add');
//   //this.state.count=1;
//   this.setState(current => ({
//     count : current.count + 1,
//   })); 
// };

//  minus = () => {
//   //console.log('minus');
//   //this.state.count=-1;
//   this.setState(current => ({
//     count : current.count - 1,
//   }));  
//  };
 
//  //클래스형 컴포넌트의 생명주기 함수
// componentDidMount(){//화면 로드될때
//   console.log('component rendered');
// } 
 
// componentDidUpdate(){//화면이 새로 그려질때마다 작동
//   console.log('component update');
// }

// componentWillUnmount(){//컴포넌트가 화면에서 떠날때
//   console.log('component goodBye');
// }

//  render(){
//   console.log('render');
//    return(
//    <div>
//       <h1>The number is: {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//    </div>
//    ); 
//  }
// }

class App extends React.Component{
 state = {
   isLoading: true,
   movies : [],
 };

 componentDidMount(){
   //영화데이터 로딩
  setTimeout(() => {
      this.setState({isLoading : false});
  }, 6000)
 }

 render(){
  const { isLoading } = this.state; 
  return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
 }
}  

export default App;
