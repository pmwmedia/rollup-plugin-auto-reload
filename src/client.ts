const socket = new WebSocket("ws://HOST:PORT")
socket.addEventListener("message", event => {
  if (event.data === "RELOAD") {
    window.location.reload()
  }
})
