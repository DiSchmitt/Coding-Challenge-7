doccument.getElementById("reviewForm").addEventListener("Submit",(event)=>{
    event.preventDefault();

    const reviewName = document.getElementById("Name").value;
    const reviewRating = document.getElementById("Rating").value;
    const reviewComment = document.getElementById("Comment").value;

    document.getElementById("Results").innerHTML =`
    <h2>Review happening</h2>
    <p><strong>Name: </strong> ${reviewName}</p>
    <p><strong>Rating: </strong> ${reviewRating}</p>
    <p><strong>Comment: </strong> ${reviewComment}</p>
    `
})