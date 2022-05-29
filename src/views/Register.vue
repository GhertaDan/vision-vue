<template>
  <div class="wrapper">
    <main class="page">
      <div class="page__container">
        <div class="register">
          <div class="register__wrapper">
            <div class="register__logo">
              <img src="img/logo 1.png" alt="" />
              VISION
            </div>
            <form role="form" id="form">
              <div class="register__name">Register</div>
              <div class="form-group">
                <div>
                  <label for="">Name</label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div>
                  <label for="">Email</label>
                  <input type="text" name="email" id="email" required />
                </div>
                <div>
                  <label for="">Phone</label>
                  <input type="phone" name="phone" id="phone" required />
                </div>
                <div>
                  <label for="">Password</label>
                  <input type="password" name="pass" id="pass" required />
                </div>
                <div>
                  <label for="">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPass"
                    id="confirmPass"
                    required
                  />
                </div>
              </div>
              <button type="submit" class="register__btn">Sign in</button>
            </form>
            <p>Already have an account? <a href="login.html">Sign in</a></p>
          </div>
          <picture>
            <source srcset="img/register.webp" type="image/webp" />
            <img src="img/register.png" alt="" class="register__img"
          /></picture>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "register",
};
</script>

<style>
</style>