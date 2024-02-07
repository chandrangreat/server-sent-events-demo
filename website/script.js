function listenForNotifications() {
  const sse = new EventSource("http://localhost:3000/stream");
  const messageStorage = [];
  let notificationCount = 0;
  document.getElementById("notifiyCount").innerText = notificationCount;
  sse.onmessage = (m) => {
    if (notificationCount === 200) {
      sse.close();
    }
    const receivedMessage = JSON.parse(m.data).message;
    messageStorage.push(receivedMessage);
    console.log("My Message", m);
    notificationCount = notificationCount + 1;
    document.getElementById("notifiyCount").innerText = notificationCount;
    const messageBody = document.getElementById("messages");
    let listOfElements = `<ul>`;
    messageStorage.forEach((message) => {
      listOfElements += `<li>${message}</li>`;
    });
    listOfElements += `</ul>`;
    messageBody.innerHTML = listOfElements;
  };
}

listenForNotifications();
