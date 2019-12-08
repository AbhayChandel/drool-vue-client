<template>
  <v-app>
    <v-content>
      <SignupForm />
    </v-content>
  </v-app>
</template>

<script>
import SignupForm from "@/components/auth/SignupForm";
export default {
  layout: "headerless-layout",
  components: {
    SignupForm
  }
};
</script>

<style scoped>
.screenDiv {
  width: 100vw;
  background-color: #efefef;
  display: flex;
  justify-content: center;
}
.pageDiv {
  width: 100%;
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}

.verticalBanner {
  width: 39%;
  height: 100vh;
  background-color: #f1cdd7;
  padding-top: 40px;
  padding-left: 55px;
}

.subHeader {
  color: #865c6c;
  font-size: 20px;
}

.messageDiv {
  width: 350px;
  color: #865c6c;
  font-size: 25px;
  font-weight: 500;
  margin-top: 90px;
  display: inline-block;
}
</style>
