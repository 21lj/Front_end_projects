const typeInfos = [
    {
      id: 1,
      title: "Root Canal Treatment",
      decription: "Ideal for infected or damaged tooth",
      types: [
        "Root Canal Treatment", 
        "Split RCT", 
        "Split RCT with rubber dam", 
        "Split RCT with laser"
      ],
      price: "19,999",
      image: "./imgs/rct1.jpg" 
    },
    {
      id: 2,
      title: "Re-Root Canal Treatment",
      decription: "Issue that persists or recurs after initial root canal treatment",
      types: [
        "Root Canal Treatment", 
        "Split RCT", 
        "Re-RCT with rubber dam", 
        "Re-RCT with laser specialist", 
        "e-RCT with retrieval of old RCT filling"
      ],
      price: "19,999",
      image: "./imgs/rct2.jpg"
    }
  ]

  const patients = [
    {
      id: 1,
      name: "Arjun Mehta",
      place: "Mumbai",
      img: "./imgs/p1.jpeg"
    },
    {
      id: 2,
      name: "Vikram Balaji",
      place: "Norway",
      img: "./imgs/p2.jpeg"
    },
    {
      id: 3,
      name: "Rahul Kapoor",
      place: "Sweden",
      img: "./imgs/p3.jpeg"
    }
  ]

  const faqs = [
    {
      question: "What is a root canal treatment?",
      answer: "It's a procedure to treat infection at the center of a tooth and save the natural tooth."
    },
    {
      question: "Is root canal painful?",
      answer: "Modern root canals are performed under local anesthesia and are virtually painless."
    },
    {
      question: "How long does it take?",
      answer: "Typically, 1–2 visits are needed, each taking about 30–60 minutes."
    },
    {
      question: "What happens after the procedure?",
      answer: "You may experience slight discomfort. A dental crown is often recommended afterward."
    }
  ]

  const reviews = [
    {
      name: "Soumya Koshy",
      rating: 5,
      text: "Absolutely painless root canal! The team was professional and made me feel at ease throughout.",
      image: "./imgs/u1.jpeg"
    },
    {
      name: "Tony Thomas",
      rating: 4,
      text: "Great service and clean clinic. The dentist explained everything patiently.",
      image: "./imgs/u2.jpeg"
    },
    {
      name: "Althaf Muhammed",
      rating: 5,
      text: "Top-notch experience! Quick recovery and expert treatment.",
      image: "./imgs/u3.jpeg"
    }
  ]

  function renderFun() {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; 
  
    typeInfos.forEach(info => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("card-image");
      const img = document.createElement("img");
      img.src = info.image;
      img.alt = info.title;
      imgDiv.appendChild(img);
      card.appendChild(imgDiv);
  
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("card-content");
  
      const title = document.createElement("h3");
      title.textContent = info.title;
      contentDiv.appendChild(title);
  
      const desc = document.createElement("p");
      desc.textContent = info.decription;
      contentDiv.appendChild(desc);
  
      const ul = document.createElement("ul");
      info.types.forEach(type => {
        const li = document.createElement("li");
        li.textContent = type;
        ul.appendChild(li);
      });
      contentDiv.appendChild(ul);
  
      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = `Price: ₹${info.price}`;
      contentDiv.appendChild(price);
  
      const btn = document.createElement("button");
      btn.textContent = "Book Now";
      btn.classList.add("card-btn");
      contentDiv.appendChild(btn);
  
      card.appendChild(contentDiv);
  
      container.appendChild(card);
    });
  }

  function renderPatients() {
    const container = document.getElementById("patients-container");
    container.innerHTML = "";
  
    patients.forEach(patient => {
      const card = document.createElement("div");
      card.classList.add("patient-card");
  
      const img = document.createElement("img");
      img.src = patient.img;
      img.alt = patient.name;
  
      const overlay = document.createElement("div");
      overlay.classList.add("patient-info");
  
      const name = document.createElement("span");
      name.classList.add("patient-name");
      name.textContent = patient.name;
  
      const place = document.createElement("span");
      place.classList.add("patient-place");
      place.textContent = patient.place;
  
      overlay.appendChild(name);
      overlay.appendChild(place);
  
      card.appendChild(img);
      card.appendChild(overlay);
      container.appendChild(card);
    });
  }

  
  function renderFAQs() {
    const faqList = document.getElementById("faq-list");
  
    faqs.forEach((faq, index) => {
      const faqItem = document.createElement("div");
      faqItem.classList.add("faq-item");
  
      faqItem.innerHTML = `
        <div class="faq-question" data-index="${index}">
          <span>${faq.question}</span>
          <button class="toggle-btn">+</button>
        </div>
        <div class="faq-answer" id="faq-answer-${index}">${faq.answer}</div>
      `;
  
      faqList.appendChild(faqItem);
    });
  
    document.querySelectorAll(".faq-question").forEach(question => {
      question.addEventListener("click", () => {
        const index = question.dataset.index;
        const answer = document.getElementById(`faq-answer-${index}`);
        const btn = question.querySelector("button");
  
        const isVisible = answer.classList.toggle("show");
  
        btn.textContent = isVisible ? "−" : "+";
      });
    });
  }

  
  function renderReviews() {
    const container = document.getElementById("reviews-container");
  
    reviews.forEach((review) => {
      const card = document.createElement("div");
      card.classList.add("review-card");
  
      card.innerHTML = `
        <div class="review-header">
          <img src="${review.image}" alt="${review.name}" class="reviewer-img" />
          <div>
            <h4>${review.name}</h4>
            <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
          </div>
        </div>
        <p class="review-text">"${review.text}"</p>
      `;
  
      container.appendChild(card);
    });
  }

  function lodFun(){
    renderFun();
    renderPatients();
    renderFAQs();
    renderReviews();
  }
  
  document.addEventListener("DOMContentLoaded", lodFun);

  