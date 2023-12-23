const box = document.getElementById("main-content");

function boxes() {
  const div = document.createElement("div");
  div.className = "box";

  const img = document.createElement("img");
  img.className = "profile-img";
  img.src =
    "https://media.istockphoto.com/id/653844526/photo/portrait-of-cheerful-man-eating-salad.jpg?s=1024x1024&w=is&k=20&c=jfqIeRCbm7yDe5d0ewh3MVgsme4Ps9oZiht9D2IRnf4=";

  const text = document.createElement("div");
  text.className = "text-container";

  const prof_name = document.createElement("h3");
  prof_name.className = "professor-name";
  prof_name.textContent = "Random person";

  const sub_name = document.createElement("p");
  sub_name.className = "subject-name";
  sub_name.textContent = "Computer Science";

  text.appendChild(prof_name);
  text.appendChild(sub_name);

  div.appendChild(img);
  div.appendChild(text);

  box.appendChild(div);
}
