var input = document.getElementById("testt");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const val = document.getElementById("testt").value;

        const name = document.getElementById("testt2").value;

        let xhr = new XMLHttpRequest();

        xhr.open('POST', '/WeatherForecast');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onload = function () {
            const obj = JSON.parse(xhr.response);

            let myTable = document.getElementById('myTable').getElementsByTagName('tbody')[0];

            obj.forEach((item) => {
                console.log(item);

                let row = myTable.insertRow();
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);

                cell1.innerHTML = item.date;
                cell2.innerHTML = item.temperatureC;
            })
        };

        xhr.onerror = function () {
            alert(`Ошибка соединения`);
        };

        xhr.send(JSON.stringify({ name: name, date: val }));
    }
});