
//single element 

const form = document.querySelector('#todo-form')
console.log(form);


//double element
 const items = document.querySelectorAll('.item')
 items.forEach((item)=>{
    console.log(item);
 });
//위와 똑같은 상황
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// 즉,아래처럼 클래스 네임이나 태크로 따로 사용하기 보다는 
// query 하나로 사용하는게 더 좋음




const todos = document.querySelector("#todo-list");
/*
//todos.remove();
//todos.style.background = 'yellow';

//todos.lastElementChild.remove();
todos.firstElementChild.textContent = 'Hello';
todos.lastElementChild.innerHTML = '<h1>Hello</h1>';
*/


const button = document.querySelector('.button');
button.addEventListener('click', onsubmit);
// 저장눌렀을때 자동적으로 form tag안의 기능이 자동제춣하였기 
//때문에 저장을 눌렀을때 clicked가 금방 사라져버린다.
//그래서 prevent기능을 사용하여 제출을 멈춘다.
//click한 이벤트를 e라는 인자로 function에 담아서 preventDefault 
//메소드 사용함.

//e. target 은 button이기때문에


//button을 클릭했을때 text에 기록된걸 불러올수 있도록 하기
//그리고 그 값을 아래 list에 추가해주면 됨
const todoInput = document.querySelector('.text');

//미리 설정해둠. 내용을 입력하세요라는 안내 메세지 설정을 위해
const msg = document.querySelector('#msg');


//함수를 외부로 뺄수도 있음

function onsubmit(e) {
    e.preventDefault();
    //e.target.style.color = 'red';
    //console.log(todoInput.value); 확인해보기
    //그 값을 todos의 li 에 집어넣을거기 때무에 li 먼저 생성
    const li = document.createElement('li');
    //이제 생성된 li에 어떤 내용을 넣기 위해 appendChild라는 명령을 해준다
    li.appendChild(document.createTextNode(todoInput.value));

    //이대로면 li에 css로 설정한 간격이 적용이 안됨.  
    //html의 class= "item" 을 주석처리해놨기때문. item class가 없어서.
    //그래서 여기에서 다시 스타일을 지정해주어야함.
    li.classList.add('item');

    // console.log(li); 찍어보면 글자가 들어간 li가 생성된게 확인됨 
    //그럼이제 li에 들어간 내용을  todo-List에 추가해주면 됨
    todos.appendChild(li);

    //할일을 저장한 후 다시 빈칸이 되도록 하기 위해서
    todoInput.value='';

    //공백을 저장하면 리스트에 공백이 생기는걸 방지하기위해
    if(todoInput.value === ''){
        msg.style.display = 'block';
        //메세지를 3초후에 사라지게 하기 위해서
        setTimeout(()=>msg.style.display="none",3000)
        return;
    }
};

