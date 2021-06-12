import "./styles.css";

const onClickAdd = () => {
  createIncomplete(getInputText());
};

const onClickDelete = (li) => {
  deleteElement(li);
};

const onClickComplete = (li, text) => {
  deleteElement(li);
  createComplete(text);
};

const onClickBack = (li, text) => {
  deleteElement(li);
  createIncomplete(text);
};

const getInputText = () => {
  const textbox = document.getElementById("add-text");
  const result = textbox.value;
  textbox.value = "";
  textbox.focus();
  return "<" + result + ">";
};

const createIncomplete = (text) => {
  // 追加先エレメント取得
  const ul = document.getElementById("incomplete-list");

  // li作成
  const li = document.createElement("li");

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = text;

  // button(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    onClickComplete(li, text);
  });

  // button(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    onClickDelete(li);
  });

  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  ul.appendChild(li);
};

const createComplete = (text) => {
  // 追加先エレメント取得
  const ul = document.getElementById("complete-list");

  // li作成
  const li = document.createElement("li");

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = text;

  // button(戻す)作成
  const inCompleteButton = document.createElement("button");
  inCompleteButton.innerText = "戻す";
  inCompleteButton.addEventListener("click", () => {
    onClickBack(li, text);
  });

  li.appendChild(div);
  div.appendChild(inCompleteButton);
  ul.appendChild(li);
};

const deleteElement = (item) => {
  item.parentNode.removeChild(item);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
