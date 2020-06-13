function addBorder(array) {

  const initialArray = array;
  let finalArray = [];
  initialArray.unshift('');
  initialArray.push('');

  initialArray.forEach((element) => {
    element = element.split("");
    element.unshift("*");
    // console.log(typeof element);
    // console.log(Array.isArray(element));
    console.log(element.length);

    while (element.length<5) {
        element.push("*");
    };

    // element.toString();
    element = element.join("");

    finalArray.push(element);

    // console.log(element);
    return finalArray;
  })
  // console.log(finalArray);
  finalArray.forEach((element) => {
    let eachParagraph = document.createElement('p');
    eachParagraph.innerHTML = element;
    document.body.appendChild(eachParagraph);
  })
}
