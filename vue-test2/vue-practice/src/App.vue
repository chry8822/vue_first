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
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      myName: "chrys",
      year: 2022,
      user: {
        name: "john",
        job: "programmer",
        age: 23,
      },
      button: "<button>버튼</button>",
      button2: `<button onclick='alert("you hacked")'>버튼</button>`,
      button3: `<button onclick='document.body.style="background :red; transform: rotate(180deg);"'>버튼</button>`,
    };
  },
  components: {},
};
</script>

<style></style>
