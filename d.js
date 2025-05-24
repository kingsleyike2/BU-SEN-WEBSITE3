document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".grid-container .item");
  
    items.forEach((item) => {
      const img = item.querySelector("img");
      const altText = img.alt;
  
      // Add tooltip
      img.title = altText;
  
      // Button container
      const btnContainer = document.createElement("div");
      btnContainer.className = "btn-container";
  
      // Order button
      const orderBtn = document.createElement("button");
      orderBtn.textContent = "🛒 Order";
      orderBtn.className = "order-btn";
  
      // Ignore button
      const ignoreBtn = document.createElement("button");
      ignoreBtn.textContent = "🚫 Ignore";
      ignoreBtn.className = "ignore-btn";
  
      let selected = null;
  
      // Handle button toggles
      orderBtn.addEventListener("click", () => {
        if (selected === "order") {
          orderBtn.classList.remove("selected");
          selected = null;
        } else {
          orderBtn.classList.add("selected");
          ignoreBtn.classList.remove("selected");
          selected = "order";
          alert(`You ordered: ${altText}`);
        }
      });
  
      ignoreBtn.addEventListener("click", () => {
        if (selected === "ignore") {
          ignoreBtn.classList.remove("selected");
          selected = null;
        } else {
          ignoreBtn.classList.add("selected");
          orderBtn.classList.remove("selected");
          selected = "ignore";
          alert(`You ignored: ${altText}`);
        }
      });
  
      btnContainer.appendChild(orderBtn);
      btnContainer.appendChild(ignoreBtn);
      item.appendChild(btnContainer);
    });
  });
  