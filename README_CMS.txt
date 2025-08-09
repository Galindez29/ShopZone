INSTRUCCIONES PARA USAR Y COMPILAR TU WEB CON PANEL DE ADMINISTRACIÓN

1. Instala Node.js en tu computadora desde https://nodejs.org (elige la versión LTS).

2. Abre una terminal o consola de comandos.

3. Navega a la carpeta de tu proyecto (descomprime el ZIP y entra a la carpeta):
   cd ruta/a/tu/proyecto

4. Instala las dependencias del proyecto:
   npm install

5. Genera la versión lista para publicar:
   npm run build

6. El resultado estará en la carpeta "build".
   Para probarla localmente, puedes instalar "serve":
     npm install -g serve
     serve -s build

7. Para subirla a Netlify:
   - Ve a https://netlify.com, crea una cuenta (gratis).
   - Crea un nuevo sitio desde Git (sube tu código a GitHub antes).
   - Activa "Identity" y "Git Gateway" en la configuración del sitio.
   - Accede a /admin en tu dominio para editar contenido.

Archivos añadidos:
- public/admin/index.html  (interfaz del CMS)
- public/admin/config.yml  (configuración del CMS)
- src/data/pages/example.md (ejemplo de contenido editable)
- public/uploads/          (carpeta para imágenes)
