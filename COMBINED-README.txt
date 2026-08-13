# Combined Birthday Experience

Open `index.html`.

Flow:
1. Pavi experience starts normally.
2. The Pavi loading screen closes when its countdown begins.
3. Pavi's final book page is completed.
4. Pavi's music is stopped and a short handoff appears.
5. `interactive-birthday/index.html` loads automatically.
6. The second experience runs inside an iframe, isolating its CSS/JavaScript from Pavi to avoid conflicts.

No Node.js/npm is required for the combined version; the second experience uses its built `dist` files.
