
function displayList() {
  // fruits内のp要素を取得
  const fruitsContainer = document.getElementById("fruits");
  const fruitElements = fruitsContainer.getElementsByTagName("p");

  // ul要素を作成
  const ulElement = document.createElement("ul");

  // 各p要素からli要素を作成してul要素に追加
  for (let i = 0; i < fruitElements.length; i++) {
    const liElement = document.createElement("li");
    liElement.textContent = fruitElements[i].textContent;
    ulElement.appendChild(liElement);
  }

  // fruits内の要素を削除
  while (fruitsContainer.firstChild) {
    fruitsContainer.removeChild(fruitsContainer.firstChild);
  }

  // fruits内に新しいul要素を追加
  fruitsContainer.appendChild(ulElement);
}
