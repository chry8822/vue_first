<template>
  <h2>now {{ age }}years old, 5 years later {{ age + 5 }}</h2>
  <h2>now {{ age + 5 }}years old, 5 years later {{ age + 10 }}</h2>
  <!-- 하드코딩으로 상태값을 변화시키는건 효율적이지 않다. -->
  <h2>5년뒤 {{ add(5) }}</h2>
  <h2>10년뒤 {{ add(10) }}</h2>
  <h2>15년뒤 {{ add(15) }}</h2>
  <h2>20년뒤 {{ add(20) }}</h2>

  <h2>동갑의 10명이 있다면 나이의 총 합은? {{ multiply(age, 14) }}</h2>
  <h2>{{ getTotalScore(100) }}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
    };
  },
  methods: {
    add(num) {
      return this.age + num;
    },
    multiply(num, people = 10) {
      // 디폴트 파라미터
      return num * people;
    },
    getTotalScore(num) {
      console.log(this.multiply(num, num));
      return this.multiply(num, num);
    },
  },
  // 메서드는 data 와 같은 레벨에 methods 객체를 만들어서 사용
  // 여기서 this는 data 에 바인딩 된다 콘솔 확인하면 proxy 확인 proxy 타엣 안에 data 안에 선언한 값들이 존재 .
};
</script>

<style></style>
