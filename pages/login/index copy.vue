<template>
  <v-app>
    <div class="screenDiv">
      <div class="pageDiv">
        <div class="verticalBanner">
          <div class="subHeader">drool</div>
          <div class="messageDiv">Discover the communities, products and lot more.</div>
        </div>
        <LoginForm />
      </div>
    </div>
  </v-app>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";
export default {
  layout: "headerless-layout",
  components: {
    LoginForm
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
  width: 1366px;
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
