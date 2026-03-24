import CodeBlock from '../../components/CodeBlock'

export default function GrepCut() {
  return (
    <div>
      <h1>grep / cut</h1>
      <p className="subtitle">Filtrer des lignes et extraire des champs depuis la ligne de commande.</p>

      <h2>grep — recherche dans le texte</h2>
      <p><code>grep</code> filtre les lignes contenant un motif.</p>

      <CodeBlock language="bash">{`grep "motif" fichier.txt              # lignes contenant "motif"
grep -i "motif" fichier.txt           # insensible à la casse
grep -n "motif" fichier.txt           # avec numéros de ligne
grep -r "motif" /etc/                 # recherche récursive
grep -v "motif" fichier.txt           # lignes ne contenant PAS le motif
grep -c "motif" fichier.txt           # compte les lignes correspondantes
grep -l "motif" /etc/*.conf           # liste les fichiers qui matchent
grep -w "root" /etc/passwd            # mot exact uniquement`}</CodeBlock>

      <h3>Expressions régulières</h3>
      <CodeBlock language="bash">{`grep "^root" /etc/passwd         # lignes commençant par "root"
grep "bash$" /etc/passwd         # lignes se terminant par "bash"
grep -E "root|www-data" /etc/passwd   # OU logique (ERE)
grep -E "^[a-z]{3,8}:" /etc/passwd   # logins de 3 à 8 lettres`}</CodeBlock>

      <h3>grep en pipeline</h3>
      <CodeBlock language="bash">{`ps aux | grep nginx              # processus nginx
dmesg | grep -i error            # erreurs dans le journal kernel
cat /var/log/syslog | grep -E "error|warn" | tail -20`}</CodeBlock>

      <h2>cut — extraction de champs</h2>
      <p><code>cut</code> extrait des colonnes d'un texte délimité.</p>

      <CodeBlock language="bash">{`# -d = délimiteur, -f = champ(s)
cut -d: -f1 /etc/passwd          # 1er champ (noms d'utilisateurs)
cut -d: -f1,3 /etc/passwd        # champs 1 et 3
cut -d: -f1-3 /etc/passwd        # champs 1 à 3
cut -c1-10 fichier.txt           # caractères 1 à 10 de chaque ligne`}</CodeBlock>

      <h3>Combinaison grep + cut</h3>
      <CodeBlock language="bash">{`# Extraire le shell des utilisateurs dont le shell est bash
grep "bash$" /etc/passwd | cut -d: -f1,7

# Afficher les PIDs des processus nginx
ps aux | grep nginx | grep -v grep | awk '{print $2}'`}</CodeBlock>

      <h2>Autres outils de filtrage utiles</h2>
      <CodeBlock language="bash">{`sort fichier.txt                  # tri alphabétique
sort -n fichier.txt               # tri numérique
sort -r fichier.txt               # tri inverse
uniq fichier.txt                  # supprime les doublons consécutifs
sort fichier.txt | uniq -c        # compte les occurrences
wc -l fichier.txt                 # nombre de lignes
wc -w fichier.txt                 # nombre de mots`}</CodeBlock>
    </div>
  )
}
