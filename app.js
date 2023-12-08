//class
class Budge {
  constructor(budge) {
    this.budge = budge;
  }
  priceForm(price) {
    return (this.budge -= price);
  }
}
class Html {
  showButge(budge) {
    budgeWeek.innerHTML = budge;
    remaining.innerHTML = budge;
  }
  printMessage(message, className) {
    let div = document.createElement("div");
    div.classList = " justify-end flex ";
    let p = document.createElement("p");
    p.classList = "text-right  px-4 py-2 rounded-lg text-white className";
    p.classList.add(className);
    p.innerText = message;

    div.appendChild(p);
    const section1 = document.querySelector(".section1");
    section1.insertBefore(div, form);
    setTimeout(() => {
      div.remove();
    }, 3000);
    form.reset();
  }

  //add to list
  addprice(name, price) {
    let addList = document.querySelector(".addList");
    let div = document.createElement("div");

    div.innerHTML = `
    <ul class="flex flrx-row bg-pink-300 border text-right justify-between px-5 py-2 rounded-lg my-2">
    <li>${price}</li>
    <li>:${name}</li>
    </ul>
    `;
    addList.appendChild(div);
  }

  //price
  trakBudge(price, budge) {
    const budgePrice = budgetUser.priceForm(price);
    remaining.innerText = budgePrice;
    console.log(budge);

    //chenge bg coler
    if (budge / 4 > budgePrice) {
      remaining.parentElement.parentElement.classList.remove(
        "bg-green-300",
        "bg-orange-500"
      );
      remaining.parentElement.parentElement.classList.add("bg-red-600");
    } else if (budge / 2 > budgePrice) {
      remaining.parentElement.parentElement.classList.remove("bg-green-300");
      remaining.parentElement.parentElement.classList.add("bg-orange-500");
    }
  }
}

//variable
let user;
let budgetUser;
let budgeWeek = document.querySelector(".budgeWeek");
let remaining = document.querySelector(".remaining");
let form = document.querySelector("form");
let nameinput = document.querySelector(".name");
let priceinput = document.querySelector(".price");

let blur;

const html = new Html();

//eventLisener
function addeventLisener() {
  document.addEventListener("DOMContentLoaded", function () {
    user = prompt("لطفا بودجه هفته خود را وارد کنید");
    if (user === null || user === "" || user === "0") {
      window.location.reload();
    } else {
      budgetUser = new Budge(user);
      html.showButge(budgetUser.budge);
    }
  });

  document.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let price = document.querySelector(".price").value;
    if (name === "" || price === "") {
      html.printMessage("نوشتن همه موارد الزامی است", "bg-red-500");
    } else {
      html.printMessage("همه موارد درست وارد شده است", "bg-green-500");
      html.addprice(name, price);
      html.trakBudge(price, budgetUser.budge);
    }
  });
  nameinput.addEventListener("blur", blurColer);
  priceinput.addEventListener("blur", blurColer);
}
addeventLisener();

//function
function blurColer() {
  if (this.value.length > 0) {
    this.classList.remove("border-green-200");
    this.classList.add("border-green-500");

    this.classList.remove("border-red-500");
  } else {
    this.classList.remove("border-green-200");
    this.classList.add("border-red-500");
  }
}
