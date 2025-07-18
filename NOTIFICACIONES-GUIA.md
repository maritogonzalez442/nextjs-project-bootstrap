# 🔔 GUÍA DE NOTIFICACIONES - Alquileres PWA

## IMPORTANTE: Cómo hacer que las notificaciones funcionen en iOS

### ✅ PASOS PARA ACTIVAR NOTIFICACIONES EN iOS:

1. **Usa Safari** (no Chrome ni otros navegadores)
2. **Abre la app** en: http://localhost:8000
3. **Presiona "Activar Notificaciones"** cuando aparezca el mensaje
4. **Acepta el permiso** cuando Safari lo solicite
5. **Agrega a pantalla de inicio** para mejor experiencia

### 📱 Para probar las notificaciones:

1. **Crea un alquiler** con vencimiento en 1 minuto (para pruebas)
2. **Deja la app abierta** o en segundo plano
3. **Verás una alerta** cuando venza el tiempo
4. **También aparecerá en rojo** en la lista

### ⚠️ Limitaciones de iOS Safari:
- Las notificaciones push requieren que la app esté abierta o en segundo plano
- Safari no permite notificaciones push cuando la app está completamente cerrada
- **SOLUCIÓN**: La app verifica cada minuto y muestra alertas visuales

### 🎯 Sistema de Notificaciones Implementado:

1. **Notificaciones Push** (cuando están habilitadas)
2. **Alertas Visuales** (siempre visibles)
3. **Indicadores Rojos** para alquileres vencidos
4. **Mensaje de Alerta** con el texto exacto: "Alquiler [nombre] por [monto] ha vencido"

### 🔧 Para desarrollo:

En la app encontrarás:
- **Botón "Probar Notificación"** para verificar que funciona
- **Botón "Verificar Vencidos"** para forzar la verificación
- **Estado de notificaciones** visible en la pantalla principal

### 📋 Mensaje de Notificación:
```
Alquiler "Nombre del Alquiler" por $50,000 ha vencido. Actualiza el monto.
```

### 🚨 Si no funcionan las notificaciones:
1. Ve a Configuración > Safari > Notificaciones
2. Asegúrate que estén habilitadas para este sitio
3. Mantén la app abierta o en segundo plano
4. Los alquileres vencidos aparecerán en ROJO en la lista

La aplicación está diseñada para garantizar que **SIEMPRE** verás cuando un alquiler venza, incluso si las notificaciones push no funcionan.
