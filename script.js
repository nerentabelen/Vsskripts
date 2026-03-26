function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Добро пожаловать</h1>";
    document.body.appendChild(header);
}

function createMain() {
    const main = document.createElement("main");
    main.className = "container";
    main.appendChild(createImgBlock("Этого кота зовут Тимофей", "https://i.ytimg.com/vi/PHNegAnWhUE/maxresdefault.jpg"));
    main.appendChild(createImgBlock("Эту кошку зовут Мурка", "https://avatars.mds.yandex.net/i?id=2255b781fa5632690b04a1e6fdd08620_l-9181272-images-thumbs&n=13"));
    main.appendChild(createForm());
    document.body.appendChild(main);
}

function createImgBlock(text, imgSrc) {
    const block = document.createElement("div");
    block.className = "text-block";
    block.innerHTML = `<p>${text}</p><img class="image" src="${imgSrc}" alt="пример">`;
    return block;
}

function createForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    formContainer.innerHTML = `<h3>Оставьте заявку</h3>
        <form>
            <input type="text" placeholder="Ваше имя" required>
            <input type="email" placeholder="Ваш email" required>
            <button type="submit">Отправить</button>
        </form>`;
    return formContainer;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = "2025 Все права защищены";
    document.body.appendChild(footer);
}

createHeader();
createMain();
createFooter();

