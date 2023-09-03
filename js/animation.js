// title1アニメーション
var TLParamsInheritance = anime.timeline();

// ① 画像が右から出現するアニメーション
TLParamsInheritance
  .add({
    targets: '.title-name2 img',
    translateX: [-500, 0], // 右から0位置へ移動
    opacity: [0, 1], // 透明から不透明へ
    duration: 2000, // アニメーションの時間（ミリ秒）
    easing: 'easeOutExpo', // イージング
  });

// 各画像ごとに順番にズームアップするアニメーション
document.querySelectorAll('.title-name2 img').forEach(function(img, index) {
  TLParamsInheritance
    .add({
      targets: img,
      scale: [
        { value: 1, duration: 0 }, // ズームしない（初期状態）
        { value: 1.5, duration: 400, easing: 'easeOutExpo' }, // 100ミリ秒でズームアップ
        { value: 1, duration: 1, easing: 'easeOutExpo' } // 100ミリ秒で元に戻る
      ],
      duration: 400, // 合計のアニメーション時間
      delay: 0 + (index * 1), // 順番にズームアップするアニメーションを適用するディレイ
    });
});

// アニメーション完了後にランダムな画像を回転するアニメーションを開始
TLParamsInheritance.finished.then(function() {
  // ランダムな画像を回転させるアニメーションを定義
  var rotateRandomImage = function() {
    var images = document.querySelectorAll('.title-name2 img');
    var randomImageIndex = Math.floor(Math.random() * images.length); // ランダムな画像のインデックスを生成
    var randomImage = images[randomImageIndex];

    anime({
      targets: randomImage,
      rotate: 360, // 1回転する
      duration: 1000, // アニメーションの時間（ミリ秒）
      easing: 'linear', // イージング
      complete: function() {
        // 回転が完了したら画像を元に戻すアニメーションを実行
        anime({
          targets: randomImage,
          rotate: 0, // 元に戻す
          duration: 0, // アニメーションの時間（0なので即時）
          complete: function() {
            // アニメーションが完了したら次の画像を回転させる
            rotateRandomImage();
          }
        });
      }
    });
  };

  // 最初のアニメーションを1.38秒遅らせて実行
  setTimeout(function() {
    rotateRandomImage();
  }, 1500);
});


// title2アニメーション
var TLParamsInheritance = anime.timeline();

// ① 画像が右から出現するアニメーション
TLParamsInheritance
  .add({
    targets: '.title-name1 img',
    translateX: [500, 0], // 右から0位置へ移動
    opacity: [0, 1], // 透明から不透明へ
    duration: 2000, // アニメーションの時間（ミリ秒）
    easing: 'easeOutExpo', // イージング
  });

// 各画像ごとに順番にズームアップするアニメーション
document.querySelectorAll('.title-name1 img').forEach(function(img, index) {
  TLParamsInheritance
    .add({
      targets: img,
      scale: [
        { value: 1, duration: 0 }, // ズームしない（初期状態）
        { value: 1.5, duration: 400, easing: 'easeOutExpo', delay: index === 0 ? 1600 : 0 }, // 最初の画像の場合は3秒遅延してからズームアップ開始
        { value: 1, duration: 1, easing: 'easeOutExpo' } // 100ミリ秒で元に戻る
      ],
      duration: 400, // 合計のアニメーション時間
      delay: 0 + (index * 1), // 順番にズームアップするアニメーションを適用するディレイ
    });
});


// アニメーション完了後にランダムな画像を回転するアニメーションを開始
TLParamsInheritance.finished.then(function() {
  // ランダムな画像を回転させるアニメーションを定義
  var rotateRandomImage = function() {
    var images = document.querySelectorAll('.title-name1 img');
    var randomImageIndex = Math.floor(Math.random() * images.length); // ランダムな画像のインデックスを生成
    var randomImage = images[randomImageIndex];

    anime({
      targets: randomImage,
      rotate: 360, // 1回転する
      duration: 1000, // アニメーションの時間（ミリ秒）
      easing: 'linear', // イージング
      complete: function() {
        // 回転が完了したら画像を元に戻すアニメーションを実行
        anime({
          targets: randomImage,
          rotate: 0, // 元に戻す
          duration: 0, // アニメーションの時間（0なので即時）
          complete: function() {
            // アニメーションが完了したら次の画像を回転させる
            rotateRandomImage();
          }
        });
      }
    });
  };

  // 初回のアニメーションを実行
  rotateRandomImage();
});


