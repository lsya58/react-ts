const title = document.getElementById("title");

if (title) {
  let count = 0;
  setInterval(() => {
    count++;
    title.textContent = `クリック数: ${count}`;
  }, 1000);
}



