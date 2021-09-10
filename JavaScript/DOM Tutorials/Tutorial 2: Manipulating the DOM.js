// https://dom-tutorials.appspot.com/static/2.html

/*
<input id="input" type="text"><br><br>
    <button onclick="rollercoaster()">Click</button><br><br>
    <p id="para"></p>

    <script>
*/

function rollercoaster() {

    let input = document.getElementById('input').value.trim();

    let para = document.getElementById('para');
    para.innerHTML = '';

    let lettersArr = [...input];

    lettersArr.forEach((letter, index) => {

        let span = document.createElement('span');
        let text = document.createTextNode(letter);
        span.appendChild(text);

        let fontSize;
        if (index <= lettersArr.length / 2) fontSize = 10 + 5 * index;
        else fontSize = 10 + 5 * (lettersArr.length - index)
            span.style.fontSize = `${fontSize}px`;

        para.appendChild(span)
    });

    input.value = '';
}
