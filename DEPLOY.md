# 🚀 Despliegue en Vercel - Alquileres PWA

## Instrucciones para desplegar la aplicación:

### Paso 1: Instalar Vercel CLI (si no está instalado)
```bash
npm install -g vercel
```

### Paso 2: Desplegar la aplicación
```bash
npx vercel --prod
```

### Paso 3: Seguir los pasos del CLI
1. **Iniciar sesión** con tu cuenta de Vercel (o crear una)
2. **Confirmar el proyecto** cuando pregunte "Set up and deploy"
3. **Seleccionar las opciones**:
   - Framework: Next.js (se detectará automáticamente)
   - Root Directory: ./ (actual)
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install

### Paso 4: Obtener la URL
Después del despliegue, obtendrás una URL como:
`https://alquileres-pwa.vercel.app`

### Paso 5: Usar en tu iPhone
1. **Abre Safari** y ve a la URL proporcionada
2. **Toca el botón Compartir**
3. **Selecciona "Agregar a pantalla de inicio"**
4. **La app funcionará permanentemente** sin tu computadora

## 🎯 Características del Despliegue:
- ✅ **URL permanente** que funciona 24/7
- ✅ **Almacenamiento local** en cada dispositivo
- ✅ **Funciona sin conexión** después de cargar
- ✅ **Compatible con iOS Safari**
- ✅ **PWA completa** con icono en pantalla de inicio

## 📱 URL Final:
Después del despliegue, tu aplicación estará disponible en:
`https://[nombre-proyecto].vercel.app`

¡Listo para usar desde cualquier dispositivo sin necesidad de tu computadora!
