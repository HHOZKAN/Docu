import CodeBlock from '../../components/CodeBlock'

export default function Gunicorn() {
  return (
    <div>
      <h1>Gunicorn</h1>
      <p className="subtitle">Serveur WSGI Python pour Django — interface entre Nginx et l'application.</p>

      <h2>Installation</h2>
      <p>Gunicorn s'installe dans le virtualenv Django :</p>
      <CodeBlock language="bash">{`source /var/www/monprojet/venv/bin/activate
pip install gunicorn`}</CodeBlock>

      <h2>Test de lancement manuel</h2>
      <CodeBlock language="bash">{`cd /var/www/monprojet
source venv/bin/activate

# Syntaxe : gunicorn <module_wsgi>:<callable>
gunicorn monprojet.wsgi:application

# Avec options
gunicorn --workers 3 --bind 0.0.0.0:8000 monprojet.wsgi:application`}</CodeBlock>

      <p>Vérification que l'application répond :</p>
      <CodeBlock language="bash">{`curl http://127.0.0.1:8000/
# ou depuis le navigateur en activant temporairement le port 8000`}</CodeBlock>

      <h2>Options importantes</h2>
      <table>
        <thead>
          <tr><th>Option</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>--workers N</code></td><td>Nombre de workers (recommandé : 2×CPU + 1)</td></tr>
          <tr><td><code>--bind IP:PORT</code></td><td>Adresse d'écoute (ex: 127.0.0.1:8000)</td></tr>
          <tr><td><code>--timeout N</code></td><td>Timeout en secondes (défaut 30)</td></tr>
          <tr><td><code>--log-level</code></td><td>debug, info, warning, error, critical</td></tr>
          <tr><td><code>--access-logfile</code></td><td>Fichier de log des accès</td></tr>
          <tr><td><code>--error-logfile</code></td><td>Fichier de log des erreurs</td></tr>
        </tbody>
      </table>

      <h2>Socket Unix (recommandé avec Nginx)</h2>
      <p>Plutôt qu'un port TCP, utiliser un socket Unix est plus performant en local :</p>
      <CodeBlock language="bash">{`gunicorn --workers 3 --bind unix:/run/gunicorn.sock monprojet.wsgi:application`}</CodeBlock>

      <h2>Fichier de configuration Gunicorn</h2>
      <p>On peut externaliser la configuration dans <code>gunicorn.conf.py</code> :</p>
      <CodeBlock language="python">{`# /var/www/monprojet/gunicorn.conf.py
bind = "unix:/run/gunicorn.sock"
workers = 3
timeout = 60
accesslog = "/var/log/gunicorn/access.log"
errorlog = "/var/log/gunicorn/error.log"
loglevel = "info"`}</CodeBlock>

      <CodeBlock language="bash">{`gunicorn -c gunicorn.conf.py monprojet.wsgi:application`}</CodeBlock>

      <h2>Vérification des logs</h2>
      <CodeBlock language="bash">{`# Si lancé comme service systemd :
journalctl -u gunicorn -f

# Logs directs
tail -f /var/log/gunicorn/error.log`}</CodeBlock>
    </div>
  )
}
