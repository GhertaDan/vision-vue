<template>
  <div class="wrapper">
    <main class="page">
      <div class="page__container">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <picture>
                <source srcset="img/carousel/cat.webp" type="image/webp" />
                <img src="img/carousel/cat.png" alt=""
              /></picture>
              <h1>Glasses for everybody</h1>
              <h3>get 15% discount!</h3>
            </div>
            <div class="swiper-slide">
              <picture>
                <source srcset="img/carousel/woman.webp" type="image/webp" />
                <img src="img/carousel/woman.png" alt=""
              /></picture>
              <div>
                <p>“Fashion is what you buy.</p>
                <p><span>style</span> is what you do with it”.</p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source srcset="img/carousel/aviator.webp" type="image/webp" />
                <img src="img/carousel/aviator.png" alt=""
              /></picture>
              <picture>
                <source srcset="img/carousel//ray-ban.webp" type="image/webp" />
                <img src="img/carousel//ray-ban.png" alt="" id="logo"
              /></picture>
            </div>
            <div class="swiper-slide">
              <picture>
                <source srcset="img/carousel/darkness.webp" type="image/webp" />
                <img src="img/carousel/darkness.png" alt=""
              /></picture>
              <div>
                <h3>up to 30% off</h3>
                <h2>For specially-abled people</h2>
                <h3>only in vison</h3>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="glasses">
          <div class="glasses__title">Sunglasses</div>
          <div class="glasses__wrapper">
            <my-product></my-product>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/sun2 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/sun3 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/sun4 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
          </div>
          <div class="glasses__title">PRESCRIPTION FRAMES</div>
          <div class="glasses__wrapper">
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/1 2.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/2 2.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/3 2.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/4 2.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
          </div>
          <div class="glasses__title">Protective eyeware</div>
          <div class="glasses__wrapper">
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/1 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/2 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/3 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
            <div class="glasses__card card">
              <div class="card__img">
                <img src="img/sunglasses/4 1.png" alt="" />
              </div>
              <div class="card__descr">
                <div class="card__model">Premium Square Sunglasses</div>
                <div class="card__price">$32.95</div>
              </div>
              <div class="card__button">
                <div class="card__favorite">
                  <picture>
                    <source
                      srcset="img/icons/favorite.webp"
                      type="image/webp" />
                    <img
                      src="img/icons/favorite.png"
                      alt="favorite"
                      class="card__icon"
                  /></picture>
                </div>
                <div class="card__add">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.18688 0C5.80822 0 6.34312 0.431895 6.46199 1.02885L6.54303 1.6875H29.2735C30.3703 1.6875 31.2455 2.75537 30.9376 3.83168L28.02 13.9588C27.8092 14.6865 27.1285 15.1875 26.3558 15.1875H9.22292L9.72 17.7188H26.3666C27.0852 17.7188 27.6634 18.283 27.6634 18.9844C27.6634 19.6857 27.0852 20.25 26.3666 20.25H8.59617C8.02345 20.25 7.48856 19.8176 7.36969 19.2217L4.11384 2.53125H1.29672C0.580822 2.53125 0 1.96436 0 1.26562C0 0.566895 0.580822 0 1.29672 0H5.18688ZM6.91584 24.4688C6.91584 23.0713 8.07748 21.9375 9.50928 21.9375C10.9411 21.9375 12.1027 23.0713 12.1027 24.4688C12.1027 25.8662 10.9411 27 9.50928 27C8.07748 27 6.91584 25.8662 6.91584 24.4688ZM27.6634 24.4688C27.6634 25.8662 26.5017 27 25.0699 27C23.6381 27 22.4765 25.8662 22.4765 24.4688C22.4765 23.0713 23.6381 21.9375 25.0699 21.9375C26.5017 21.9375 27.6634 23.0713 27.6634 24.4688Z"
                      fill="#fff"
                    />
                  </svg>
                  <p>add to cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MyProduct from "@/components/MyProduct";
export default {
  name: "Home",
  components: {
    MyProduct,
  },
  methods: {
    async getProducts() {
      let data = await fetch("/api/sunglasses");
      console.log(data);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>