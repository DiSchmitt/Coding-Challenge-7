//Task 3: Create a JavaScript file named script.js and write it to:
document.getElementById("reviewForm").addEventListener("submit", (event) => {
  //Prevent the default form submission action to keep the page from reloading:
  event.preventDefault();

  const reviewName = document.getElementById("Name").value;
  const reviewRating = document.getElementById("Rating").value;
  const reviewComment = document.getElementById("Comment").value;
  //Validate that all fields are filled out. If any field is empty, display an alert:
  if (reviewName == "") {
    Element.innerHTML;
    alert("Please ensure your name is provided.");
  } else if (reviewRating == "") {
    Element.innerHTML;
    alert("Please make sure to fill a rating out of five.");
  } else if (reviewComment == "") {
    Element.innerHTML;
    alert("Please make sure to leave a comment.");
  }
  //and append the submitted feedback to the display area upon successful form submission:
  else {
    document.getElementById("Results").innerHTML =
      //Task 4: Upon form submission, dynamically create elements that will display the customer’s name,
      //selected rating, and comments in the designated feedback display area.

      //I wasn't 100% sure what was wanted with this as I seem to have done it in the previous commit,
      //but I am creating elements in the HTML designated display area (div) so here's hoping this is correct:
      `   
      <h2>Your review:</h2>
      <p><strong>Your name: </strong> ${reviewName}</p>
      <p><strong>What rating was given out of five: </strong> ${reviewRating}</p>
      <p><strong>Comments you had: </strong> ${reviewComment}</p>
      `;
  }
});
//Accidently commited my forth commit version last time, but that is ok as the only thing that changed was adding
//the comment lines on 23-27 as I am somewhat certain that I completed task 4 at the same time I completed task 3