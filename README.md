<h1 align="center">Interaktywne portfolio</h1>
<h5 align="center">Jest to indywidualny projekt zaliczeniowy z przedmiotu Techniki WWW</h5>

---

<p align="center">
  <a href="#introduction">Założenia projektowe</a> •
  <a href="#env">Środowisko pracy</a> •
  <a href="#nit">Narzędzia i technologie</a> •
  <a href="#ss">Szybki start</a>
</p>

---

<div align="center">
  <img width="612" alt="image" src="https://github.com/PiotrekWojtowicz/projekt_1/assets/49318908/f0cad6ac-d4ea-4257-81d5-1a2ed55a4dfd">
</div>

## Założenia projektowe <a name="introduction"></a>

Projekt zakładał stworzenie interaktywnego portfolio, gdzie częsciowa nawigacja odbywałaby się poprzez dialog z odwiedzający stronę.
Wstępne założenia zakładały stworzenie aplikacji podobnej do popularnych aplikacji chatowych oraz możliwość prymitywnej nawigacji poprzez użytkownika strony.
<br><br>
Całość projektu została oparta o łatwo wymienialne oraz zastępowalne komponenty interfejsu użytkownika, sprawia to, że aplikacja ma dalekie możliwości rozwoju i rozbudowy.
Następnym krokiem w budowie aplikacj jest wykorzystanie sztucznej inteligencji do prowadzenia konwersacji z użytkownikiem w oparciu o dane autora portfolio, przykładem służą
tutaj popularne aplikacje udostępniające LLMy (ChatGPT, Bard).
<br><br>

Podstawowy diagram interakcji z użytkownikiem prezentuje się następująco
<br><br>
<div align="center">
<img width="416" alt="image" src="https://github.com/PiotrekWojtowicz/projekt_1/assets/49318908/d8da92c6-e578-440a-ab8b-b0ce0099fa33">
</div>
<br><br>
Projekt został zrealizowany przy użyciu frameworku Svelte, który zapewnia bardzo wysoką modularność w wymiarze projektowania UI.
<br><br>
<div align="center">
<img width="625" alt="image" src="https://github.com/PiotrekWojtowicz/projekt_1/assets/49318908/0b478b62-cdbf-4231-8d82-6197ce3d5738">
</div>


---

## Środowisko pracy <a name="env"></a>

<div align="center">
  <img width="746" alt="image" src="https://github.com/PiotrekWojtowicz/projekt_1/assets/49318908/5492ed1d-424e-44cf-9414-f3e7cc146bba">
</div>

<br><br>
Środowisko pracy opierało się o wykorzystanie zadalnego środowiska wykonywalnego dla javascriptu jakim był node js. Dodatkowo całość została skonteneryzowana przy użyciu Dockera.

---

## Narzędzia i technologie <a name="nit"></a>
Tech stack opierał się o następujące języki i technologie:

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,svelte,docker)](https://skillicons.dev)

---

## Szybki start <a name="ss"></a>
Statyczne pliki znajdują się w folderze 

<code>build</code>

w branchu 

<code>static_conent</code>

### Przykładowy szybki start
Przykład zakłada dostęp lokalny do środowiska nodeJS oraz jakiegokolwiek serwera http (np. <a href="https://www.npmjs.com/package/serve">serve</a>)

0. Utwórz i przejdź do foler `portfolio`.

1. Używając preferowanej metody pobierz repozytorium (np. `git pull <repo url>`).

2. Upewnij się, że znajdujesz się w branchu `static_content` (np. `git checkout static_content`).

3. Przejdź do folderu `build` oraz uruchom serwer http (np. `serve`).

4. Pokieruj się do ścieżki lokalnej udostępnionej przez serwer (np. wchodząc na `http://localhost:3000/` przez przeglądarkę)

---
