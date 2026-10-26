"""Generate public browser configuration from environment bindings. Never use a secret key."""
import base64
import json
import os
import re
from pathlib import Path

url=os.environ.get('PALPINET_SUPABASE_URL','').rstrip('/')
key=os.environ.get('PALPINET_SUPABASE_PUBLISHABLE_KEY','')
if not re.fullmatch(r'https://[a-z0-9-]+\.supabase\.co',url):
    raise SystemExit('Configure PALPINET_SUPABASE_URL com a URL HTTPS do seu projeto Supabase.')
valid=key.startswith('sb_publishable_')
if not valid:
    try:
        payload=key.split('.')[1]
        valid=json.loads(base64.urlsafe_b64decode(payload+'='*(-len(payload)%4))).get('role')=='anon'
    except (ValueError,IndexError,UnicodeError):
        valid=False
if not valid:
    raise SystemExit('Use somente a chave publishable/anon. Nunca use secret ou service_role.')
config={'enabled':True,'url':url,'publishableKey':key}
path=Path(__file__).resolve().with_name('account-config.js')
path.write_text('/* Public Supabase configuration. */\nwindow.palpinetAccount = '+json.dumps(config)+';\n')
print('Configuração pública criada. A conexão ainda precisa ser verificada no navegador.')
