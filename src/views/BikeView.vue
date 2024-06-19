<template>
  <head>
    <title>Profile</title>
    <link rel="icon" href="@/assets/bike-view/favicon.ico" />
  </head>
  <header id="header" class="wrapper">
    <h1 class="site-title">
      <a><img src="@/assets/bike-view/logo.svg" alt="profile" /></a>
    </h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#bicycle">bicycle</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div id="mainvisual">
      <img src="@/assets/bike-view/mainvisual.jpg" alt="テキスト" />
    </div>

    <section id="about" class="wrapper">
      <h2 class="section-title">About</h2>
      <div class="content">
        <img src="@/assets/bike-view/about.jpg" alt="" />
        <h3 class="content-title">タイトル</h3>
        <p>テキストテキスト</p>
      </div>
    </section>

    <section id="bicycle" class="wrapper">
      <h2 class="section-title">Bicycle</h2>
      <ul>
        <li>
          <img src="@/assets/bike-view/bicycle1.jpg" alt="" />
          <h3 class="content-title">タイトル</h3>
          <p>テキスト</p>
        </li>
        <li>
          <img src="@/assets/bike-view/bicycle2.jpg" alt="" />
          <h3 class="content-title">タイトル</h3>
          <p>テキスト</p>
        </li>
        <li>
          <img src="@/assets/bike-view/bicycle3.jpg" alt="" />
          <h3 class="content-title">タイトル</h3>
          <p>テキスト</p>
        </li>
      </ul>
    </section>
  </main>
  <footer id="footer">
    <p>&copy; 2020 Profile</p>
  </footer>
</template>

<style scoped>
/* 共通 */
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
li {
  list-style: none;
}
.site-title {
  width: 120px;
  line-height: 1px;
  padding: 10px 0;
}
.site-title a {
  display: block;
}
.section-title {
  display: inline-block;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 60px;
  border-bottom: solid 1px #383e45;
}
.content-title {
  font-size: 1rem;
  margin: 10px 0;
}
.wrapper {
  max-width: 960px;
  margin: 0 auto 100px auto;
  padding: 0 4%;
  text-align: center;
}

/* ヘッダー */
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
#header ul {
  display: flex;
  padding: 10px 0;
}
#header li {
  margin-left: 30px;
}
#header li a {
  color: #24292e;
}
#header li a:hover {
  opacity: 0.7;
}

/* メインビジュアル */
#mainvisual {
  margin-bottom: 80px;
}
#mainvisual img {
  width: 100%;
  max-width: 1920px;
  height: 600px;
  object-fit: cover;
}

@media screen and (max-width: 600px) {
  /*-------------------------------------------
    Mainvisual
    -------------------------------------------*/
  #mainvisual img {
    height: calc(100vh - 60px);
  }
}

/* About */
#about .content {
  display: flex;
  justify-content: center;
  align-items: center;
}
#about img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 30px;
}
#about .text {
  text-align: left;
}

@media screen and (max-width: 600px) {
  /*-------------------------------------------
    About
    -------------------------------------------*/
  #about .content {
    flex-direction: column;
  }
  #about img {
    margin-right: 0;
  }
}

/* Bicycle */
#bicycle ul {
  display: flex;
  justify-content: space-between;
}
#bicycle li {
  width: 32%;
}

@media screen and (max-width: 600px) {
  /*-------------------------------------------
    Bicycle
    -------------------------------------------*/
  #bicycle ul {
    flex-direction: column;
  }
  #bicycle li {
    width: 100%;
    margin-bottom: 30px;
  }
}

/* フッター */
#footer {
  font-size: 0.5rem;
  padding: 10px 0;
  text-align: center;
}
</style>
