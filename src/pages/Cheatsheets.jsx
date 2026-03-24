import CodeBlock from '../components/CodeBlock'

export default function Cheatsheets() {
  return (
    <div>
      <h1>Cheatsheets</h1>
      <p className="subtitle">Résumés rapides des commandes les plus utilisées.</p>

      <h2>Navigation</h2>
      <CodeBlock language="bash">{`pwd / ls -lah / cd ~ / cd - / cd ..`}</CodeBlock>

      <h2>Fichiers</h2>
      <CodeBlock language="bash">{`touch f  mkdir -p a/b  cp -r src dst  mv old new  rm -rf dir
cat f  less f  head -n 20 f  tail -f f`}</CodeBlock>

      <h2>Permissions</h2>
      <CodeBlock language="bash">{`chmod 755 fichier      # rwxr-xr-x
chmod +x script.sh
chown user:group fichier
chown -R www-data:www-data /var/www/`}</CodeBlock>

      <h2>systemd</h2>
      <CodeBlock language="bash">{`systemctl start|stop|restart|status nginx
systemctl enable|disable nginx
journalctl -u nginx -f
journalctl -u nginx --since "1 hour ago"`}</CodeBlock>

      <h2>Réseau</h2>
      <CodeBlock language="bash">{`ip a                          # interfaces réseau
ss -tlnp                      # ports en écoute
curl -I http://localhost       # test HTTP
ufw status
ufw allow 80/tcp`}</CodeBlock>

      <h2>Processus</h2>
      <CodeBlock language="bash">{`ps aux | grep nginx
kill -9 <PID>
pkill nginx`}</CodeBlock>

      <p className="placeholder">D'autres cheatsheets seront ajoutées ici.</p>
    </div>
  )
}
