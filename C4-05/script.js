const container = document.querySelector('.img-container');       // 画像全体を包むコンテナ要素を取得
const image = document.querySelector('.img-base');                // 元画像の要素を取得
const magnifier = document.querySelector('.img-magnifier');       // ルーペ（円形要素）を取得
const magnifiedImage = magnifier.querySelector('img');            // ルーペ内に表示する拡大画像を取得

// マウスが画像上に入ったとき
container.addEventListener('mouseenter', () => {                  // コンテナにマウスが入ったら
  magnifier.style.display = 'block';                              // ルーペを表示する
});

// マウスが画像から離れたとき
container.addEventListener('mouseleave', () => {                  // コンテナからマウスが出たら
  magnifier.style.display = 'none';                               // ルーペを非表示にする
});

// マウスの動きに応じてルーペを動かす
container.addEventListener('mousemove', (e) => {                  // マウス移動イベントを監視
  const rect = image.getBoundingClientRect();                     // 画像の表示位置とサイズを取得
  const x = e.clientX - rect.left;                                // マウスのX座標を画像内基準で算出
  const y = e.clientY - rect.top;                                 // マウスのY座標を画像内基準で算出

  // ルーペの位置を更新
  const magnifierSize = magnifier.offsetWidth / 2;                // ルーペの半径（中心合わせ用）
  magnifier.style.left = `${x - magnifierSize}px`;                // ルーペの左位置を調整
  magnifier.style.top = `${y - magnifierSize}px`;                 // ルーペの上位置を調整

  // 拡大画像の位置を更新
  const scale = magnifiedImage.offsetWidth / image.offsetWidth;   // 拡大率（拡大画像 ÷ 元画像）
  magnifiedImage.style.left = `${-x * scale + magnifierSize}px`;  // 拡大画像の左位置を逆方向に移動して拡大部分を表示
  magnifiedImage.style.top = `${-y * scale + magnifierSize}px`;   // 拡大画像の上位置も逆方向に移動して調整
});
