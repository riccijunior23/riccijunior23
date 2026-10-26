"""Local review server. Standard library only; not used by Netlify."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import json
import threading
import webbrowser

ROOT = Path(__file__).resolve().parent

class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def unavailable_api(self):
        body = json.dumps({"error": "O servidor de APIs não está incluído neste ZIP. O gerador usa o modo local existente."}, ensure_ascii=False).encode()
        self.send_response(503)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path.startswith("/api/"):
            self.unavailable_api()
            return
        if not Path(self.translate_path(self.path)).is_file():
            self.path = "/index.html"
        super().do_GET()

    def do_POST(self):
        self.unavailable_api()

if __name__ == "__main__":
    address = ("127.0.0.1", 4173)
    server = ThreadingHTTPServer(address, PreviewHandler)
    url = "http://127.0.0.1:4173/"
    print("Prévia local do Palpinet: " + url)
    print("Para encerrar, pressione Ctrl+C nesta janela.")
    threading.Timer(0.5, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
