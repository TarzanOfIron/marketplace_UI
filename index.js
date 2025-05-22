const ads = [
  {
    title: "Ad Title 1",
    description: "This is the first advertisement",
    image: "https://placehold.co/150x150",
    contact: "first@email.com",
  },
  {
    title: "Ad Title 2",
    description: "This is the second advertisement",
    image: "https://placehold.co/150x150",
    contact: "second@email.com",
  },
  {
    title: "Ad Title 3",
    description: "This is the third advertisement",
    image: "https://placehold.co/150x150",
    contact: "third@email.com",
  },
  {
    title: "Ad Title 4",
    description: "This is the fourth advertisement",
    image: "https://placehold.co/150x150",
    contact: "fourth@email.com",
  },
  {
    title: "Ad Title 5",
    description: "This is the fith advertisement",
    image: "https://placehold.co/150x150",
    contact: "fith@email.com",
  },
  {
    title: "Ad Title 6",
    description: "This is the sixth advertisement",
    image: "https://placehold.co/150x150",
    contact: "sixth@email.com",
  },
];


const container = document.getElementById("card-container");
const searchInput = document.querySelector("[data-search]");

function renderAds(filteredList) {
  container.innerHTML = "";

  filteredList.forEach(ad => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-6 col-md-4 col-lg-3"

    const card = document.createElement("div");
    card.className = "card border-0 ";

    const title = document.createElement("h3");
    title.textContent = ad.title;

    const description = document.createElement("p");
    description.textContent = ad.description;

    const image = document.createElement("img");
    image.src = ad.image;

    const contact = document.createElement("p");
    contact.textContent = "***";

    const button = document.createElement("button");
    button.className = "btn btn-primary";
    button.textContent = "Show Contact info";
    button.addEventListener("click", (e) => {
        if(contact.textContent == "***") {
            contact.textContent = ad.contact;
            button.textContent = "Hide Contact info"
        } else {
            contact.textContent = "***";
            button.textContent = "Show Contact info"
        }
        
    })
    // todo: set button on the bottom of div

    
    

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(contact);
    card.appendChild(button)
    cardWrapper.appendChild(card);

    container.appendChild(cardWrapper);
  });
}


renderAds(ads);

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filteredAds = ads.filter(ad => 
        ad.title.toLowerCase().includes(value)
    );

    renderAds(filteredAds)
});






