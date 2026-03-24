import CodeBlock from '../../components/CodeBlock'

export default function Vim() {
  return (
    <div>
      <h1>Vim</h1>
      <p className="subtitle">Éditeur modal puissant — courbe d'apprentissage abrupte, efficacité maximale.</p>

      <h2>Les modes de Vim</h2>
      <p>Vim fonctionne avec des <strong>modes</strong>. On ne tape pas directement du texte comme dans un éditeur classique.</p>
      <table>
        <thead>
          <tr><th>Mode</th><th>Accès</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Normal</strong></td><td>Mode par défaut / <code>Échap</code></td><td>Navigation, commandes</td></tr>
          <tr><td><strong>Insertion</strong></td><td><code>i</code>, <code>a</code>, <code>o</code></td><td>Saisie de texte</td></tr>
          <tr><td><strong>Visuel</strong></td><td><code>v</code>, <code>V</code>, <code>Ctrl+v</code></td><td>Sélection de texte</td></tr>
          <tr><td><strong>Commande</strong></td><td><code>:</code></td><td>Sauvegarder, quitter, substituer…</td></tr>
        </tbody>
      </table>

      <h2>Ouvrir et quitter</h2>
      <CodeBlock language="bash">{`vim fichier.txt      # ouvre le fichier
vim +42 fichier.txt  # ouvre à la ligne 42
vim +/motif fic.txt  # ouvre et positionne sur motif`}</CodeBlock>

      <p>Depuis le mode Normal :</p>
      <table>
        <thead>
          <tr><th>Commande</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td><code>:w</code></td><td>Sauvegarder</td></tr>
          <tr><td><code>:q</code></td><td>Quitter (si pas de modifications)</td></tr>
          <tr><td><code>:wq</code> ou <code>:x</code></td><td>Sauvegarder et quitter</td></tr>
          <tr><td><code>:q!</code></td><td>Quitter sans sauvegarder</td></tr>
          <tr><td><code>ZZ</code></td><td>Sauvegarder et quitter (raccourci)</td></tr>
        </tbody>
      </table>

      <h2>Navigation (mode Normal)</h2>
      <CodeBlock language="bash">{`h j k l      # gauche, bas, haut, droite
w / b        # mot suivant / précédent
0 / $        # début / fin de ligne
gg / G       # début / fin du fichier
42G          # aller à la ligne 42
Ctrl+f       # page suivante
Ctrl+b       # page précédente`}</CodeBlock>

      <h2>Édition (mode Normal)</h2>
      <CodeBlock language="bash">{`i            # insérer avant le curseur
a            # insérer après le curseur
o            # nouvelle ligne en dessous
O            # nouvelle ligne au dessus
dd           # supprimer la ligne courante
5dd          # supprimer 5 lignes
yy           # copier la ligne courante
p            # coller après
P            # coller avant
u            # annuler (undo)
Ctrl+r       # rétablir (redo)
.            # répéter la dernière action`}</CodeBlock>

      <h2>Recherche et remplacement</h2>
      <CodeBlock language="bash">{`/motif       # cherche vers le bas
?motif       # cherche vers le haut
n / N        # occurrence suivante / précédente

# Substitution (mode Commande)
:s/ancien/nouveau/        # remplace sur la ligne courante (1ère occurrence)
:s/ancien/nouveau/g       # remplace toutes les occurrences de la ligne
:%s/ancien/nouveau/g      # remplace dans tout le fichier
:%s/ancien/nouveau/gc     # avec confirmation`}</CodeBlock>

      <h2>Sélection visuelle et opérations</h2>
      <CodeBlock language="bash">{`v            # mode visuel (caractère par caractère)
V            # mode visuel ligne
Ctrl+v       # mode visuel bloc (colonne)

# Après sélection :
d            # supprimer
y            # copier
>            # indenter à droite
<            # indenter à gauche`}</CodeBlock>
    </div>
  )
}
