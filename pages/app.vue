<script lang="ts" setup>
const username = ref("");
const password = ref("");
const login = () => {
  console.log(username.value, password.value);
  alert("ログイン");
};
const signup = () => {
  alert("新規登録");
};
</script>

<template>
  <div class="container">
    <h2 class="text-center">ようこそ、サンプル</h2>
    <div class="grid">
      <div class="col-5 flex align-items-center justify-content-center">
        <div class="p-fluid surface-ground p-5 border-round">
          <div class="field">
            <label for="username">ユーザー名</label>
            <InputText id="username" type="text" v-model="username" />
          </div>
          <div class="field">
            <label for="password">パスワード</label>
            <InputText id="password" type="password" v-model="password" />
          </div>
          <Button label="ログイン" @click="login"></Button>
        </div>
      </div>
      <div class="col-2">
        <Divider layout="vertical"> または </Divider>
      </div>
      <div class="col-5 flex align-items-center justify-content-center">
        <Button label="新規登録" icon="pi pi-user-plus" class="p-button-success" @click="signup"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 700px;
  margin: auto;
}
</style>