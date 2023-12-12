function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const button = document.getElementById('check');
  if (button.checked) {
    document.getElementById('text').style.backgroundColor = 'red';
  } else {
    document.getElementById('text').style.backgroundColor = 'white';
  }
}
