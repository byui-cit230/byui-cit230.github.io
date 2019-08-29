function test() {
  const aside = document.querySelector('aside');

  const desc = document.querySelector('meta[name="description"]');

  //region fetch url

    let url = document.getElementById('url').value;
    const call = 'https://validator.w3.org/nu/';

    let promise = fetch(call);
    if (promise.ok) {
      let json = promise.json();
      console.log(json);

    } else {
      alert("HTTP Response Error: " + promise.status);
    }

  //endregion

  aside.insertAdjacentHTML('beforeEnd', debug);

}