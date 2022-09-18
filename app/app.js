function initListeners() {
  $("#submit").click((e) => {
    e.preventDefault();
    let allUsers = JSON.parse(localStorage.getItem("Person"));
    let fn = $("#firstName").val();
    let ln = $("#lastName").val();
    let a = $("#ages").val();
    let ad = $("#addresses").val();
    let phone = $("#phone").val();
    let classes = $("#class").val();
    let cls = $("#class-one").val();
    let clas = $("#class-two").val();
    console.log(fn + " " + ln);

    if (
      fn != "" &&
      ln != "" &&
      a != "" &&
      ad != "" &&
      phone != "" &&
      classes != ""
    ) {
      let userObj = {
        fname: fn,
        lname: ln,
        age: a,
        address: ad,
        phones: phone,
        class: [classes, cls, clas],
      };

      allUsers.push(userObj);

      localStorage.setItem("Person", JSON.stringify(allUsers));
      //   console.log(localStorage.getItem("Person"));

      $("#firstName").val("");
      $("#lastName").val("");
      $("#ages").val("");
      $("#addresses").val("");
      $("#phone").val("");
      $("#class").val("");
      $("#class-one").val("");
      $("#class-two").val("");
    } else {
      alert("Please enter the required information!");
    }
  });

  $("#getName").click((e) => {
    e.preventDefault();
    $("#app").html("");
    let allUsers = JSON.parse(localStorage.getItem("Person"));

    $.each(allUsers, function (idx, user) {
      console.log(user.fname);
      console.log(user.lname);
      $("#app").append(
        `
        <div class="info"><p><b>First Name:</b> ${user.fname}</p>
        <p><b>Last Name:</b> ${user.lname}</p>
        <p><b>Age:</b> ${user.age}</p>
        <p><b>Address:</b> ${user.address}</p>
        <p><b>Phone Number:</b> ${user.phones}</p>
        <p><b>Class List:</b> ${user.class}</p
        </div>`
      );
    });
  });
}

function initSite() {
  if (localStorage) {
    let people = localStorage.getItem("Person");
    if (people) {
      let persons = JSON.parse(localStorage.getItem("Person"));
      console.log(persons);
    } else {
      localStorage.setItem("Person", "[]");
      alert("no people have been added yet");
    }
    // console.log("I have it!");
    // localStorage.setItem("Person", JSON.stringify(userObj));
    // console.log(localStorage.getItem("Person"));
    // let retrievedObj = JSON.parse(localStorage.getItem("Person"));
    // console.log(retrievedObj);
  } else {
    console.log("No local Storage");
  }
}
$(document).ready(function () {
  initListeners();
  initSite();
});
