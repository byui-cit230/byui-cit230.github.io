function test() {
  let url = document.getElementById('url').value;
  const call = 'https://validator.w3.org/nu/';

  let promise = fetch(call);
  if (promise.ok) {
    let json = promise.json();

  } else {
    alert("HTTP Response Error: " + promise.status);
  }
  
  console.log(json);

}