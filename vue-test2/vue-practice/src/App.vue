<template>
  <h1>Hello {{ myName }}</h1>
  <!-- 머스테치 문법이 좀더 활용하기 편하다. -->
  <h1 v-text="myName"></h1>
  <!-- v-text 는 안에 들어있는 내용을 전부 바꿔주는 거기 때문에 빈요소에 사용해야 한다. 
  머스테치 문법보다 사용법이 번거롭다-->
  <p>안녕하세요 저는 {{ user.name }} 입니다.</p>
  <p>저는 {{ user.job }} 입니다.</p>
  <p>저는 {{ user.age }}살 입니다.</p>
  <div v-html="button"></div>
  <div v-html="button2"></div>
  <div v-html="button3"></div>
  <!-- v-html 은 확실할때만 사용해야 한다. 외부에서 스크립트를 통해서 제어당하거나 해킹의 위험성이 있기때문임(스크립트가 실행 가능함) -->

  <h1 v-bind:id="dynamicId">style</h1>
  <a v-bind:href="url" target="_blank">naver</a>
  <img v-bind:src="image.src" v-bind:alt="image.alt" />
  <input v-bind:type="inputType" />

  <p v-bind:style="pStyle">Hello vue</p>
  <!-- data 에 변수로 만들 스타일 적용 -->
  <p v-bind:style="{ color: 'blue', fontSize: '50px' }">Hello vue</p>
  <!-- 인라인 스타일의 스타일 적용 -->
  <p v-bind:style="titleStyle">chrys</p>
  <!-- 오브젝트로 만든 스타일 적용 -->
  <p v-bind:style="[titleStyle, basicStyle]">Array Style</p>
  <!-- 오브젝트로 만든 2개의 스타일은 배열로 둘다 적용하기 -->
  <h2 class="line-thought">line-through</h2>
  <h2 v-bind:class="textDcoration" class="text-red">line-through v-bind</h2>
  <!-- 동적으로 부여한 클래스와 스태틱하게 부여한 클래스의 스타일이 모두 적용 -->

  <h2 :class="idDone === true ? 'line-thought' : 'highlight'">
    조건에 따른 클래스 적용
  </h2>
  <!-- 조건에 따른 클래스 부여 (삼항연산자,) 
    조건이 투루 이면 line-thought 클래스 적용
    조건이 폴스 이면 highlight 클래스 적용
   -->
  <h2 :class="{ highlight: idDone === false, 'text-red': myName === 'chrys' }">
    Object 형태의 동적 클래스
  </h2>
  <!-- 오브젝트 형태로 동적 클래스 부여하기  { 클래스이름: 조건 } 
    오브젝트 형태로 부여하면 한번에 여러가지의 클래스를 적용할수 있다.
  -->

  <h2
    :class="[
      isDone !== true ? 'line-thought' : 'highlight',
      myName === 'chrys' ? 'text-green' : 'text-red',
    ]"
  >
    배열 형태의 동적 클래스
  </h2>

  <!-- 배열형태로 동적 클래스 부여 
    배열형태로 삼항연산자로 조건을 주어서 클래스를 동적으로 줄수 있다. 
    오브젝트와 마찬가지로 다수의 클래스를 부여 가능하다
   -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      idDone: false,
      textDcoration: "line-thought",
      myName: "chrys",
      year: 2022,
      inputType: "color",
      user: {
        name: "john",
        job: "programmer",
        age: 23,
      },
      image: {
        src: "https://placeimg.com/100/100/any",
        alt: "random img",
      },
      dynamicId: "content",
      url: "https://www.naver.com",
      button: "<button>버튼</button>",
      button2: `<button onclick='alert("you hacked")'>버튼</button>`,
      button3: `<button onclick='document.body.style="background :red; transform: rotate(180deg);"'>버튼</button>`,
      pStyle: "color: red; font-size: 36px",
      titleStyle: {
        fontWeight: "50px",
        border: "1px solid red",
        fontSize: "50px",
      },
      basicStyle: {
        background: "yellow",
      },
    };
  },
  components: {},
};
</script>

<style>
#title {
  color: yellow;
  background: red;
}
#content {
  color: blue;
  background: yellow;
}
.line-thought {
  text-decoration: line-through;
}
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.highlight {
  background: royalblue;
  font-weight: bold;
}
</style>
