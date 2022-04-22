<template>
 <div>
    <!-- <h1>Hello Vue!!</h1>
    <p>{{ animal }}</p> 
    <p>강아지는 {{ food }}를 좋아합니다.</p>
    <input type="text" v-model="food"/>
    <div v-html="alertMessage"></div>
    <div v-html="subscribeHTML"></div> -->
    <!-- data 에 만든 변수를 머스타치 문법으로 불러올수 있다. -->
    <!-- v-html 은 태그자체를 받아와서 엘리멘트를 생성하고 컨텐츠 요소만 보여준다. 하지만 확실하게 믿을수 있을때만 사용 해야 한다/  -->
    <!-- 데이터 탈취등 예상치 못한 상황이 발생할수 있다. -->
  
    <!-- v-model 은 손쉽게 데이터의 상태 관리를 할수있다. 예// 인풋에 v-model에 food 변수를 연결하면 인풋의 상태가 실시간으로 변경된다. -->
  
    <!-- <img v-bind:src="imageSource" alt="random"> -->
    <!-- <a :href="food" target="_blank">{{food}}</a> -->
    <!-- <hr> -->
    <!-- 동적으로 클래스 부여 -->
    <!-- <h2 :class="{ red : food === 'Apple', 'not-good' : food === 'rice'}">원숭이는 {{food}} 를 좋아합니다.</h2> -->
    <!-- 동적으로 클래스를 만들때는 v-bind 를 사용 또는 :  (html 의 모든 속성을 제어할수 있다)-->
    <!-- v-bind:class="{ 클래스명  : 참 , 거짓 or 조건 }"  조건이 맞으면 동적으로 클래스를 적용 -->


  <!-- 조건문 -->
  <h2>당신의 나이는 {{ age }}살 입니다.</h2>
  <h3 v-if="age > 18">당신은 어른입니다.</h3>
  <h3 v-else-if="age > 13 && age <= 18">당신은 청소년 입니다.</h3>
  <h3 v-else>당신은 어린이 입니다.</h3>
  <!-- v-if 와 v-else 는 같은 계층에 있어야하고 바로 아에 있어야 한다. 조건문들 사이에 다른 요소가 들어가면 에러가 발생한다. -->
  <h2 v-if="display">보입니다!</h2>
  <h2 v-show="display">보입니다!</h2>
  <!-- v-if 는 새롭게 생성하기 때문에 무거운 컨포넌트나 데이터가 있으면 효율이 떨어진다, -->
  <!-- v-show 는 요소들을 생성하고 재생성 하지 않으므로 무거운 컴포넌트나 데이터는 show 를 사용해야 효율이 높아진다.  -->

  <!-- 반복문 -->
  <!-- 배열 반복 출력 -->
  <h2 v-for="(animal, index) in animal" :key="index">{{ animal }}의 인덱스는 {{ index }}</h2>
  <!-- for in 문 과 같이 작동하고 key가 바인딩이 되어야한다. for in 의 두번째 인자로 index를 받아서 사용 -->


  <!-- 배열 안에 객체 반복 출력 -->
  <ul>
    <li v-for="(user, index) in users" :key="index">
      이름은 {{ user.name }}이고 성별은 {{ user.gender }}
      <p v-for="skill in user.skill" :key="skill">{{ skill }}</p>
      <!-- 배열 안에 객체 안에 배열 출력하기 -->
    </li>
  </ul>

  <template v-for="(animal, index) in animal" :key="index">
  <h2 v-if="animal !== 'monkey'">{{ animal }}의 인덱스는 {{ index }}</h2>
  <!-- v-for 와 v-if 는 한 요소의 사용할수 없음 그래서 한번더 감싸서 만들어 주던지 해야한다. 혹은 template 태그를 사용한다. -->
  <!-- template 는 어떠한 의미도 없느 fragment 태그 이다 -->
  </template>
  <hr>
  <h1>{{ count  }}</h1>
  <button v-on:click="addNumber(1)">increase</button>
  <button v-on:click="minusNumber">decrease</button>
  <button v-on:mouseover="addNumber(10)">마우스 오버 10 증가</button>

  <h2>{{ message }}</h2>
  <!-- <button @click="greeting">인사하기</button>
  <button @click="goodbye">작별하기</button>
  <div @click="getMousePosition" class="box"></div> -->

  <button @click="addNumber($event,10)">10더하기</button>
  <button @click="addNumber($event,100)">100더하기</button>
  <!-- $event 를 인자로 넣어주면 뷰에서 발생하는 이벤트를 넘겨주게 된다. -->

 </div> 
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      count : 0 ,
      message: "",
      // animal : "Dog",
      // food : "Apple",
      // alertMessage: "<h2>경고!!</h2>",
      // subscribeHTML: `<button onclick="document.querySelector('body').style.background = 'none'">구독하기</button>`,
      // imageSource : "https://placeimg.com/100/100/any",
      // naverUrl: "https://www.naver.com"
      
      age : 13,
      display : false,
      animal: ["monkey","rat","dog","lion"],
      users: [
        { name : "chrys",
          age  : 30,
          weight: 87,
          gender: "male",
          skill: ["html","css","js"]  
        },
        { name : "john",
          age  : 20,
          weight: 37,
          gender: "female" ,
          skill: ["html","css","js"]  
        },
        { name : "bob",
          age  : 50,
          weight: 60,
          gender: "male"  ,
          skill: ["html","css","js"]  
        },
      ]
    }
  },
  methods : {
    getMousePosition(e){
      console.log(e)
      this.message = `마우스의 위치는 ${e.pageX},${e.pageY}`
    },
    greeting(){
      this.message = "안녕하세요"
    },
    goodbye(){
      this.message = "잘가세용"
    },
    addNumber(e,value){
      e.pageX
      this.message = `마우스 좌표 ${e.pageX}와 더하기 ${value}는 ${e.pageX + value} 입니다.`;
    },
    minusNumber(){
      if(this.count > 0){
        this.count -=1;
      }
    }
    // 함수는 methods 안에 명시하고 data() 안에 있는 데이터를 바인딩 하려면 this 를 사용해야한다. 그리고 화살표 함수는 상위 스코프의 영향을 받기 때문에 화살표 함수로 쓰고 this 를 사용하면 undefined 를 출력 그래서 일반 함수로 사용하는걸 권장 
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  font-size: 20px;
}

.orange {
  color: orange;
}
.salmon {
  color: salmon;
}
.red {
  color: red;
}
.not-good {
  text-decoration: line-through;
}
button {
  width: 130px;
  height: 100px;
  font-size: 24px;
}
.box {
  width: 300px;
  height: 300px;
  background: salmon;
}
</style>
