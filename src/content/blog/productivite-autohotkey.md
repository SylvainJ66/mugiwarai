---
title: "Tip Productivité : AutoHotKey"
description: "Quand on jongle entre plusieurs applications, Alt+Tab devient trop lent. AutoHotKey permet de mapper des raccourcis clavier directs pour switcher instantanément entre vos apps."
date: 2025-12-24
category: devops
tags: [productivité, outils, AutoHotKey, PowerToys, workflow]
layout: ../../layouts/BlogPost.astro
---

Quand on jongle entre plusieurs applications, le classique `Alt+Tab` devient trop lent.

**AutoHotKey** permet de mapper des scripts simples sur des touches clavier. On peut alors mettre en avant les applications grâce au **clavier numérique**.

---

## Le script

Chaque touche du pavé numérique lance ou active une application spécifique :

```ahk
#Requires AutoHotkey v2.0

; 1 => Rider IDE
Numpad1::{
  if WinExist("ahk_exe rider64.exe")
    WinActivate()
  else
    Run "C:\Program Files\JetBrains\JetBrains Rider 2025.1\bin\rider64.exe"
}

; 2 => Chrome
Numpad2::{
  if WinExist("ahk_exe chrome.exe")
    WinActivate()
  else
    Run "chrome.exe"
}

; 3 => Obsidian
Numpad3::{
  if WinExist("ahk_exe Obsidian.exe")
    WinActivate()
  else
    Run "C:\Users\...\Obsidian.exe"
}

; 4 => Docker Desktop
Numpad4::{
  if WinExist("ahk_exe Docker Desktop.exe")
    WinActivate()
  else
    Run "C:\Program Files\Docker\Docker\frontend\Docker Desktop.exe"
}

; 5 => Postman
Numpad5::{
  if WinExist("ahk_exe Postman.exe")
    WinActivate()
  else
    Run "C:\Users\...\Postman.exe"
}

; 6 => Terminal (Windows Terminal)
Numpad6::{
  if WinExist("ahk_exe WindowsTerminal.exe")
    WinActivate()
  else
    Run "wt.exe"
}

; 7 => Claude Desktop
Numpad7::{
  if WinExist("ahk_exe claude.exe")
    WinActivate()
  else
    Run "C:\Users\...\claude.exe"
}

; 8 => Microsoft Teams
Numpad8::{
  if WinExist("ahk_exe Teams.exe")
    WinActivate()
  else
    Run "ms-teams.exe"
}
```

---

## Comment ça fonctionne

Le principe est simple :

1. **Si l'application est ouverte** : `WinActivate()` la met au premier plan instantanément
2. **Si elle n'est pas ouverte** : `Run` la lance

Le résultat : un switch d'application en une seule touche, sans passer par `Alt+Tab` ni chercher dans la barre des tâches.

---

## Combiné avec PowerToys

Je combine ce script avec **PowerToys - Espace de travail**, qui ouvre toutes mes applications à des endroits précis sur l'écran.

Le workflow :

1. **PowerToys** lance et positionne toutes les apps au démarrage
2. **AutoHotKey** permet de naviguer entre elles instantanément

C'est un petit investissement de temps qui fait gagner des secondes à chaque switch — et sur une journée de développement, ça s'accumule vite.
