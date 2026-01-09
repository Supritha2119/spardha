const branchData = {
  vajarahalli: {
    name: "Vajarahalli Branch",
    phone: "+91  / ",
    call: "+91",
    address:
      "587, 3rd Floor, 100ft Road, Dwaraka Nagar, Kanakapura Main Rd, Bengaluru – 560062",
    map: "https://www.google.com/maps?q=Vajarahalli,Bengaluru&output=embed",
    whatsapp: "91"
  },
  koramangala: {
    name: "Koramangala Branch",
    phone: "+91 9XXXXXXXXX",
    call: "+919XXXXXXXXX",
    address: "Koramangala, Bengaluru",
    map: "https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed",
    whatsapp: "919XXXXXXXXX"
  },
  hoskote: {
    name: "Hoskote Branch",
    phone: "+91 9XXXXXXXXX",
    call: "+919XXXXXXXXX",
    address: "Hoskote, Bengaluru Rural",
    map: "https://www.google.com/maps?q=Hoskote,Bengaluru&output=embed",
    whatsapp: "919XXXXXXXXX"
  }
};


changeBranch();

function changeBranch() {
  const branch = document.getElementById("branchSelect").value;
  const data = branchData[branch];

  document.getElementById("branchName").innerText = data.name;
  document.getElementById("branchAddress").innerHTML =
    "<i class='fa fa-location-dot'></i> " + data.address;

  document.getElementById("branchPhone").innerHTML =
    "<i class='fa fa-phone'></i> <a href='tel:" +
    data.call +
    "'>" +
    data.phone +
    "</a>";

  document.getElementById("branchMap").src = data.map;

  
  document.getElementById("floatingCallBtn").href = "tel:" + data.call;
}

function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();
  const branch = document.getElementById("branchSelect").value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  const wa = branchData[branch].whatsapp;

  const text =
    "📌 Enquiry from Sri Spardha Academy Website%0A%0A" +
    "👤 Name: " + name + "%0A" +
    "📞 Phone: " + phone + "%0A" +
    "📚 Course: " + course + "%0A" +
    "🏫 Branch: " + branch + "%0A%0A" +
    "💬 Message:%0A" + message;

  window.open("https://wa.me/" + wa + "?text=" + text, "_blank");
  document.getElementById("successMsg").style.display = "block";
}


const academyNumber = "91"; 

document.getElementById("whatsappChat").addEventListener("click", function (e) {
  e.preventDefault();

  
  const page = document.title;

  
  let branch = "Vajarahalli"; 
  const branchSelect = document.getElementById("branchSelect");
  if (branchSelect) branch = branchSelect.value;

  let course = "Not selected"; 
  const courseSelect = document.getElementById("course");
  if (courseSelect) course = courseSelect.value;

 
  const message =
    "👋 Hello Sri Spardha Academy\n\n" +
    "I visited your website: " + page + "\n" +
    "📚 Course: " + course + "\n" +
    "🏫 Branch: " + branch + "\n" +
    "Please provide details about the course and admission process.";

  
  const encodedMessage = encodeURIComponent(message);

 
  window.open(
    "https://wa.me/" + academyNumber + "?text=" + encodedMessage,
    "_blank"
  );
});
