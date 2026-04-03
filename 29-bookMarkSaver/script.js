const bookmarkBtn = document.getElementById("bookmarkbtn");
    const nameInput = document.getElementById("text-input");
    const urlInput = document.getElementById("url-input");
    const bookMarkList = document.getElementById("bookMarkList");

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];


    function renderBookmarks() {
      bookMarkList.innerHTML = "";
      bookmarks.forEach((b) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = b.name;
        a.href = b.url;
        a.target = "_blank";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.addEventListener("click", function () {
          
          li.remove();
          
          bookmarks = bookmarks.filter(item => !(item.name === b.name && item.url === b.url));
          // Update localStorage
          localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        });

        li.appendChild(a);
        li.appendChild(deleteBtn);
        bookMarkList.appendChild(li);
      });
    }

    // Render bookmarks on page load
    renderBookmarks();

    // Add new bookmark
    bookmarkBtn.addEventListener("click", function () {
      const name = nameInput.value.trim();
      const url = urlInput.value.trim();

      if (name === "" || url === "") {
        alert("Please enter both name and URL.");
        return;
      }

      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        alert("Please enter a valid URL (starting with http:// or https://).");
        return;
      }

      const newBookmark = { name, url };
      bookmarks.push(newBookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      renderBookmarks();

      nameInput.value = "";
      urlInput.value = "";
    });