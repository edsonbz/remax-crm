# Manual de uso - RE/MAX Desarrollo CRM

## Objetivo

Este CRM centraliza clientes que llegan desde WhatsApp, Facebook, Instagram, X, recomendaciones y otros canales comerciales. La finalidad es que cada oportunidad tenga requerimiento, zona, presupuesto, tiempo de compra, proyecto recomendado, pais, tipo de cliente, seguimiento visible y trazabilidad comercial.

## 1. Dashboard

El Dashboard es la vista ejecutiva. Ahi se ve:

- Leads activos.
- Clientes extranjeros.
- Oportunidades en visita, reserva y cierre.
- Comision potencial calculada al 5%.
- Segmentacion por canal de llegada.

Para saber de donde caen los clientes, mirar el panel "De donde caen los clientes". Al hacer clic en WhatsApp, Facebook, Instagram, X, Recomendaciones u Otros, el CRM aplica el filtro de ese canal.

## 2. Nuevo lead

Usar "Nuevo lead" para cargar un cliente. Campos principales:

- Nombre.
- Canal de origen.
- Que busca.
- Zona.
- Presupuesto.
- Tiempo de compra.
- Pais / residencia.
- Tipo de cliente.
- Proyecto sugerido.
- Primer seguimiento con fecha y hora.
- Prioridad.
- Notas.

El boton "Cancelar" y la "x" cierran el formulario sin exigir completar campos.

## 3. Leads

La vista Leads es la base maestra. Sirve para buscar y filtrar clientes por:

- Canal.
- Etapa.
- Zona.
- Prioridad.
- Texto libre.

Al hacer clic sobre un cliente se abre la ficha comercial.

## 4. Ficha comercial

La ficha muestra:

- Requerimiento.
- Zona y presupuesto.
- Proyecto recomendado.
- Pais y tipo de cliente.
- Proximo seguimiento.
- Notas.
- Comision potencial.
- Historial comercial.

"Registrar contacto" abre un formulario para guardar el resumen de una llamada, WhatsApp, reunion, email o visita. Ese registro queda visible luego en "Historial comercial" dentro de la ficha.

## 5. Pipeline

La vista Pipeline funciona como tablero kanban. Cada tarjeta se puede arrastrar y soltar en otra columna, al estilo Jira. Tambien tiene controles rapidos:

- Nombre del cliente.
- Zona y presupuesto.
- Canal.
- Tipo de cliente.
- Prioridad.
- Flecha izquierda para retroceder.
- Flecha derecha para avanzar.

Las etapas son Nuevo, Calificado, Visita, Reserva y Cierre. Si una oportunidad retrocede en la conversacion, arrastrar la tarjeta a una columna anterior o usar la flecha izquierda. Si avanza comercialmente, arrastrarla a la siguiente columna o usar la flecha derecha.

## 6. Cerrar o cancelar venta

En la ficha comercial:

- "Cerrar venta" mueve el cliente a Cierre y registra la comision estimada.
- "Cancelar venta" marca la oportunidad como venta cancelada y deja registro en el historial.

## 7. Desarrollos

La vista Desarrollos muestra proyectos por zona, desarrollador, rango de precio, inventario, leads asociados, entrega estimada y comision. Cada tarjeta es clicable y abre una ficha con demanda vinculada, notas y clientes interesados.

Para crear un desarrollo nuevo, usar "Nuevo desarrollo" y cargar:

- Nombre.
- Desarrollador.
- Zona.
- Estado.
- Precio desde / hasta.
- Unidades disponibles.
- Comision.
- Entrega estimada.
- Notas comerciales.

Los filtros de zona y busqueda afectan esta vista. Si se filtra por canal, etapa o prioridad, la vista muestra desarrollos que tienen leads coincidentes con esos filtros.

## 8. Seguimientos

La vista Seguimientos muestra la agenda de proximas acciones. Cuando se registra un contacto, el proximo seguimiento se carga con selector de fecha y hora, no como texto libre. El cliente queda actualizado con esa proxima accion.

## 9. Exportar

"Exportar" genera un CSV con la vista filtrada actual. Incluye cliente, canal, etapa, estado, zona, presupuesto, pais, tipo, proyecto y proximo seguimiento.

## 10. Demo recomendada para video

1. Mostrar el problema: clientes dispersos en WhatsApp, Facebook, Instagram, X y recomendaciones.
2. Entrar al Dashboard y mostrar metricas ejecutivas.
3. Hacer clic en un canal del panel de segmentacion.
4. Crear un Nuevo lead extranjero.
5. Abrir su ficha y registrar contacto.
6. Ir a Pipeline y avanzar o retroceder la tarjeta.
7. Cerrar venta y mostrar comision potencial.
8. Crear un nuevo desarrollo y abrir su ficha.
9. Exportar CSV como respaldo.

## 11. Backend recomendado para Railway

Para llevarlo a produccion en Railway, la arquitectura recomendada es:

- Frontend: React con Vite o Next.js.
- Backend: Node.js con NestJS o Express.
- Base de datos: PostgreSQL en Railway.
- ORM: Prisma.
- Autenticacion: NextAuth/Auth.js o Clerk si se quiere acelerar.
- Storage: S3 compatible si luego se cargan documentos, contratos o imagenes.

Tablas principales:

- users: agente, asistente, admin.
- leads: cliente, canal, etapa, prioridad, presupuesto, pais, zona, proyecto.
- lead_activities: llamadas, WhatsApp, reuniones, emails, visitas.
- followups: fecha, hora, estado, responsable.
- developments: desarrollos, desarrollador, zona, precios, inventario, comision.
- developers: empresas desarrolladoras.
- deals: cierre, reserva, comision estimada, comision cobrada.

PostgreSQL es la mejor opcion para Railway porque permite relaciones reales entre leads, desarrollos, actividades, usuarios y cierres. Para este CRM, no conviene depender solo de planillas o almacenamiento local.
