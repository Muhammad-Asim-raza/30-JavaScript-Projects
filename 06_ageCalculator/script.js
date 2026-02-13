let input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];
let paragraph= document.getElementById("para");
function getAge() {
    let date = new Date(input.value);
    let today = new Date();
    let y1 = date.getFullYear();
    let m1 = date.getMonth();
    let d1 = date.getDate();
    let y2 = today.getFullYear();
    let m2 = today.getMonth();
    let d2 = today.getDate();
    let y3, m3, d3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = m2 - m1 + 12;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        let daysInPrevMonth = new Date(y2, m2, 0).getDate();
        d3 = d2 - d1 + daysInPrevMonth;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
   paragraph.innerHTML= `${y3} Years ${m3} Months ${d3} Days`;
    console.log(`${y3} Years ${m3} Months ${d3} Days`);
}