const form = document.getElementById("enquiryForm");
const whatsappBtn = document.getElementById("whatsappBtn");

const branchName = document.getElementById("branchName");
const branchAddress = document.getElementById("branchAddress");
const branchPhone = document.getElementById("branchPhone");
const branchMap = document.getElementById("branchMap");


const branches = {
  Kormangalla: {
    name: "Sri Spardha Academy - Kormangalla",
    address: "No 434, 1st floor, 17th Main Rd, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
    phone: "+91 ",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5849883398278!2d77.61607337484068!3d12.934373987377583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144fb5e0a455%3A0x552f5f8f0910f744!2sSri%20Spardha%20Academy%20-%20Best%20Coaching%20for%20PSI%2CFDA%2CSDA%2CKAS%2CPDO%20and%20other%20Competitive%20exams%20in%20Bangalore.%20Library%2FStudy%20Centre!5e0!3m2!1sen!2sin!4v1768220266242!5m2!1sen!2sin"
  },
  Vajarahalli: {
    name: "Sri Spardha Academy - Vajarahalli",
    address: "587, 3rd Floor , 100 Feet Rd, Dwarakanagar, opposite Mariya Mart, Talaghattapura, Vajarahalli, Bengaluru, Karnataka 560062",
    phone: "+91 ",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5071742045766!2d77.5368341!3d12.875076000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fdf3cf7cb43%3A0x67c605e70d157907!2sSri%20Spardha%20Academy%20Vajarahalli!5e0!3m2!1sen!2sin!4v1768219842078!5m2!1sen!2sin"
  },
  Hoskote: {
    name: "Sri Spardha Academy - Hoskote",
    address: "65, 3rd Cross Rd, near Srinivasa Hospital, T. G. Extension, Kammavari Pete, Hoskote, Bengaluru, Karnataka 562114",
    phone: "+91 ",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.393523582691!2d77.78272107484328!3d13.074227987250621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae05a7996810d7%3A0x792d701d42b3b62e!2sSri%20Spardha%20Academy%20Hosakote%20-%20Coaching%20for%20PSI%2CFDA%2CSDA%2CKAS%2CPDO%2CBanking%20and%20other%20Competitive%20exams%20in%20Hoskote.!5e0!3m2!1sen!2sin!4v1768220368414!5m2!1sen!2sin"
  }
};


updateBranch("Kormangalla");


document.querySelectorAll('input[name="branch"]').forEach(radio => {
  radio.addEventListener("change", function () {
    updateBranch(this.value);
  });
});


function updateBranch(branch) {
  branchName.innerText = branches[branch].name;
  branchAddress.innerText = branches[branch].address;
  branchPhone.innerText = "Phone: " + branches[branch].phone;
  branchMap.src = branches[branch].map;
}


form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("submit.php", {
    method: "POST",
    body: new FormData(form)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === "success") {
        alert("Enquiry submitted successfully!");
        form.reset();
        updateBranch("Kormangalla");
      } else {
        alert(data.message);
      }
    })
    .catch(() => {
      alert("Server error. Please try again.");
    });
});

whatsappBtn.addEventListener("click", function () {
  const name = form.name.value;
  const phone = form.phone.value;
  const course = form.course.value;
  const branch = document.querySelector('input[name="branch"]:checked').value;
  const message = form.message.value;

  if (!name || !phone || !course) {
    alert("Please fill required fields");
    return;
  }

  const text = 
`Enquiry Details:
Name: ${name}
Phone: ${phone}
Course: ${course}
Branch: ${branch}
Message: ${message}`;

  const whatsappURL = 
    "https://wa.me/9100000000000?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
});
